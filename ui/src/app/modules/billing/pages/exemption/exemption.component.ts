import { Component, OnInit, AfterContentInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/shared/resources/patient/models/patient.model';
import { PatientService } from 'src/app/shared/resources/patient/services/patients.service';
import { addCurrentPatient, loadCurrentPatient } from 'src/app/store/actions';
import { discountBill } from 'src/app/store/actions/bill.actions';
import { AppState } from 'src/app/store/reducers';
import {
  getLoadingBillStatus,
  getPatientBillLoadedStatus,
  getPatientBills,
} from 'src/app/store/selectors/bill.selectors';
import { getCurrentPatient } from 'src/app/store/selectors/current-patient.selectors';
import {
  getAllPayments,
  getLoadingPaymentStatus,
} from 'src/app/store/selectors/payment.selector';
import { BillObject } from '../../models/bill-object.model';
import { PaymentObject } from '../../models/payment-object.model';
import { BillingService } from '../../services/billing.service';

@Component({
  selector: "app-exemption",
  templateUrl: "./exemption.component.html",
  styleUrls: ["./exemption.component.scss"],
})
export class ExemptionComponent implements OnInit, AfterContentInit {
  currentPatient$: Observable<Patient>;
  patientDetails: any;
  quoteToShow: boolean;
  bills$: Observable<BillObject[]>;
  loadingBills$: Observable<boolean>;
  loadingPayments$: Observable<boolean>;
  payments$: Observable<PaymentObject[]>;
  patientId: string;
  patientsBillsLoadedState$: Observable<boolean>;
  discountItemsCount: any;
  discountItems: any;
  bill: import("f:/icare/ui/src/app/modules/billing/models/bill.model").Bill;
  constructor(
    private store: Store<AppState>,
    private patientService: PatientService,
    private route: ActivatedRoute,
    private billingService: BillingService
  ) {}
  ngAfterContentInit(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
    this.patientId = this.route?.snapshot?.params?.patientId;

    this.store.dispatch(loadCurrentPatient({ uuid: this.patientId }));

    this.currentPatient$ = this.store.select(getCurrentPatient);

    this.bills$ = this.store.pipe(select(getPatientBills));
    this.loadingBills$ = this.store.pipe(select(getLoadingBillStatus));

    this.payments$ = this.store.pipe(select(getAllPayments));
    this.loadingPayments$ = this.store.pipe(select(getLoadingPaymentStatus));

    this.patientsBillsLoadedState$ = this.store.select(
      getPatientBillLoadedStatus
    );
  }

  AfterContentInit() {
    this.billingService.getAllPatientBills(this.patientId).subscribe({
      next: (bills) => {
        bills.forEach((bill) => {
          if (bill) {
            this.bill = bill;
            //Get discounted Items
            let paidAmount: number = 0;
            let discountItems: any[];
            let paidItems: any[];
            let givenItems: any[];

            this.discountItems = bill.billDetails.discountItems.filter(
              (discountItem) => {
                //Get total amount that is already paid for an item
                bill.billDetails.payments.forEach((payment) => {
                  paidItems = payment.items.filter((paymentItem) => {
                    if (discountItem.item.uuid === paymentItem.item.uuid) {
                      return paymentItem;
                    }
                  });
                });

                //Get total amount of the item from the list of items the patient has
                givenItems = bill.billDetails.items.filter((givenItem) => {
                  if (discountItem.item.uuid === givenItem.item.uuid) {
                    return givenItem;
                  }
                });

                //calculate total amount paid
                paidItems.forEach((paymentItem) => {
                  paidAmount = paidAmount + paymentItem.amount;
                });

                // return discount item if paid amount is less than item's price
                if (paidAmount >= givenItems[0].price) {
                  return discountItem;
                }

                console.log("Not returned; ", discountItem);
              }
            );

            this.discountItemsCount = this.discountItems.length;
          }
        });
      },
    });
  }

  onDiscountBill(exemptionDetails): void {
    if (exemptionDetails) {
      const { bill, discountDetails, patient } = exemptionDetails;
      this.store.dispatch(discountBill({ bill, discountDetails, patient }));
    }
  }

  onSelectPatient(e) {
    e.stopPropagation();
  }
}
