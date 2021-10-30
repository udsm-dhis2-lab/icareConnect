import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentTypeInterface } from 'src/app/shared/models/payment-type.model';
import { BillItem } from '../../models/bill-item.model';
import { BillObject } from '../../models/bill-object.model';
import { Bill } from '../../models/bill.model';
import { PaymentInput } from '../../models/payment-input.model';
import { BillConfirmationComponent } from '../bill-confirmation/bill-confirmation.component';
import { PaymentReceiptComponent } from '../payment-reciept/payment-reciept.component';

@Component({
  selector: 'app-quotation-item',
  templateUrl: './quotation-item.component.html',
  styleUrls: ['./quotation-item.component.scss'],
})
export class QuotationItemComponent implements OnInit {
  @Input() bill: Bill;
  @Input() billItems: BillItem[];
  @Input() disableControls: boolean;
  @Input() paymentTypes: any[];
  @Input() currentUser: any;
  @Input() expanded: boolean;

  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  confirmedBillEntities: any = {};
  columns: any[];
  displayedColumns: string[];
  selectedPaymentType: any;

  @Output() confirmPayment = new EventEmitter<PaymentInput>();
  @Output() paymentSuccess = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {}

  get canDisableItemSelection(): boolean {
    return (this.billItems || []).some((item) => item.payable === 0);
  }

  get canConfirmBill(): boolean {
    return (this.selection?.selected || []).length > 0;
  }

  get allItemsConfirmed(): boolean {
    return this.selection?.selected.length === this.billItems.length;
  }

  get totalBillAmount(): number {
    return (this.selection?.selected || []).reduce(
      (sum, item) => sum + parseInt(item.amount, 10),
      0
    );
  }

  get totalBillDiscount(): number {
    return (this.selection?.selected || []).reduce(
      (sum, item) => sum + parseInt(item.discount, 10),
      0
    );
  }

  get totalPayableBill(): number {
    return (this.selection?.selected || []).reduce(
      (sum, item) => sum + parseInt(item.payable, 10),
      0
    );
  }

  get isAllSelected() {
    return this.selection?.selected?.length === this.dataSource?.data?.length;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.billItems);

    this.columns = [
      { id: 'index', label: '#', isIndexColumn: true },
      { id: 'name', label: 'Description', width: '50%' },
      { id: 'quantity', label: 'Quantity' },
      { id: 'price', label: 'Unit Price', isCurrency: true },
      { id: 'discount', label: 'Discount', isCurrency: true },
      { id: 'amount', label: 'Amount', isCurrency: true },
    ];
    this.displayedColumns = [
      ...this.columns.map((column) => column.id),
      'select',
    ];
    // TODO: Remove hardcoding for payment type
    this.paymentTypes = [
      {
        uuid: '00000100IIIIIIIIIIIIIIIIIIIIIIIIIIII',
        display: 'Cash',
        code: 'CASH',
        direct: true,
      },
      {
        uuid: '00000100IIIIIIIIIIIIIIIIIIIIIIIIIIII',
        display: 'GePG',
        code: 'GePG',
      },
    ];

    this.selectedPaymentType = this.paymentTypes[0];
  }

  onConfirmAll(e): void {
    this.billItems.forEach((billItem) => {
      this.confirmedBillEntities = {
        ...this.confirmedBillEntities,
        [billItem.id]: e.checked,
      };
    });
  }

  onConfirmBillItem(e, billItem: BillItem): void {
    this.confirmedBillEntities = {
      ...this.confirmedBillEntities,
      [billItem.id]: e.checked,
    };
  }

  onConfirmPayment(e): void {
    // const paymentType: any = this.selectedPaymentType;
    e.stopPropagation();
    const dialog = this.dialog.open(BillConfirmationComponent, {
      width: '600px',
      disableClose: true,
      data: {
        billItems: this.selection?.selected,
        items: this.billItems,
        bill: this.bill,
        totalPayableBill: this.totalPayableBill,
        paymentType: this.selectedPaymentType,
        currentUser: this.currentUser,
      },
    });

    dialog.afterClosed().subscribe((paymentResponse) => {
      this.paymentSuccess.emit();
      if (paymentResponse) {
        this.dialog.open(PaymentReceiptComponent, {
          width: '500px',
          data: {
            ...paymentResponse,
            billItems: this.selection?.selected,
            items: this.billItems,
            bill: this.bill,
            totalPayableBill: this.totalPayableBill,
            paymentType: this.selectedPaymentType,
            currentUser: this.currentUser,
          },
        });
      }
    });
  }

  onToggleAll(e) {
    if (this.isAllSelected) {
      this.selection.clear();
      return;
    }

    this.selection.select(...(this.dataSource?.data || []));
  }

  onToggleOne(row) {
    this.selection.toggle(row);
  }

  onGetInvoice(e: MouseEvent) {}

  onChangePaymentType(e) {
    console.log(e);
  }
}
