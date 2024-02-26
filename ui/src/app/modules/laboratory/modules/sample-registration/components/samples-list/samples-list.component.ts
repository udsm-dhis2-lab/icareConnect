import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";
import { Store } from "@ngrx/store";
import { from, fromEvent, Observable, of, Subject, Subscription } from "rxjs";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  take,
  tap,
} from "rxjs/operators";
import { iCareConnectConfigurationsModel } from "src/app/core/models/lis-configurations.model";
import { SystemSettingsWithKeyDetails } from "src/app/core/models/system-settings.model";
import { SystemSettingsService } from "src/app/core/services/system-settings.service";
import { RegistrationService } from "src/app/modules/registration/services/registration.services";
import { formatDateToYYMMDD } from "src/app/shared/helpers/format-date.helper";
import { DateField } from "src/app/shared/modules/form/models/date-field.model";
import { Dropdown } from "src/app/shared/modules/form/models/dropdown.model";
import { Field } from "src/app/shared/modules/form/models/field.model";
import { PhoneNumber } from "src/app/shared/modules/form/models/phone-number.model";
import { TextArea } from "src/app/shared/modules/form/models/text-area.model";
import { Textbox } from "src/app/shared/modules/form/models/text-box.model";
import { ConceptsService } from "src/app/shared/resources/concepts/services/concepts.service";
import { ConceptGetFull } from "src/app/shared/resources/openmrs";
import { SamplesService } from "src/app/shared/services/samples.service";
import { AppState } from "src/app/store/reducers";
import { getConceptById } from "src/app/store/selectors";

@Component({
  selector: "app-samples-list",
  templateUrl: "./samples-list.component.html",
  styleUrls: ["./samples-list.component.scss"],
})
export class SamplesListComponent implements OnInit {
  @Input() mrnGeneratorSourceUuid: string;
  @Input() preferredPersonIdentifier: string;
  @Input() provider: any;
  @Input() agencyConceptConfigs: any;
  @Input() referFromFacilityVisitAttribute: string;
  @Input() referringDoctorAttributes: SystemSettingsWithKeyDetails[];
  @Input() labSections: ConceptGetFull[];
  @Input() labNumberCharactersCount: string;
  @Input() testsFromExternalSystemsConfigs: any[];
  @Input() personEmailAttributeTypeUuid: string;
  @Input() personPhoneAttributeTypeUuid: string;
  @Input() allRegistrationFields: any;
  @Input() LISConfigurations: any;
  @Input() barcodeSettings: any;
  @Input() identifierTypes:any;
  @Input() labTestRequestProgramStageId: string;
  @Input() sampleRegistrationCategories: any[];
  @Input() unifiedCodingReferenceConceptSourceUuid :any;

  @Input() departments: any[];
  @Input() specimenSources: any[];
  @Input() codedSampleRejectionReasons: any[];
  @Input() currentUser: any;
  // @Input() labSections: ConceptGetFull[];
  @Input() specimenSource: ConceptGetFull[];
  // @Input() LISConfigurations: iCareConnectConfigurationsModel;
  @Input() fromMaintenance: boolean;
  @Input() sampleRegistrationCategoriesConceptUuid: string;
  @Input() specimenSourceConceptUuid: string;
  @ViewChild("search") elementRef: ElementRef;

  currentUser$: Observable<any>;
  // mrnGeneratorSourceUuid$: Observable<string>;
  // preferredPersonIdentifier$: Observable<string>;
  // agencyConceptConfigs$: Observable<any>;
  // agencyConceptConfigs: any;
  // referFromFacilityVisitAttribute$: Observable<string>;
  samples$: Observable<any>;
  // referFromFacilityVisitAttribute: string;
  // labNumberCharactersCount$:Observable<string>;
  // referringDoctorAttributes$: Observable<any>;
  // testsFromExternalSystemsConfigs$: Observable<any[]>;
  // specimenSourceConceptUuid$: Observable<string>;
  // barcodeSettings$:Observable<any>;
  newClinicalFormFields: Field<any>[] = [];
  newPersonlFormFields: Field<any>[] = [];
  // labTestRequestProgramStageId$: Observable<string>;
  // identifierTypes$: Observable<any>;
  // sampleRegistrationCategories$: Observable<any>;

  page: number;
  pageSize: number;
  // referringDoctorAttributes:any;
  errors: any[] = [];
  pageCounts: any[] = [10, 20, 25, 50, 100, 200];
  searchText: string;
  subject = new Subject<string>();
  selectedSampleUuid: string = "";
  selectedEditSampleUuid:string ="";
  isOnEdit:boolean = false;
  startDate: Date;
  endDate: Date;
  currentLocation:any;
  // allRegistrationFields: any;
  parameters: any = {};
  personFieldsGroupThree: any;
  personFields: any;
  patientAgeFields: any;
  clinicalFormFields: any;
  manyObservables$: Observable<any>;
  batchRegistrationFields: any;
  batchsets$: Observable<any>;
  batches$: Observable<any>;
  testFields: any;
  specimenDetailsFields: any;
  get maximumDate() {
    let maxDate = new Date();
    let maxMonth =
      (maxDate.getMonth() + 1).toString().length > 1
        ? maxDate.getMonth() + 1
        : `0${maxDate.getMonth() + 1}`;
    let maxDay =
      maxDate.getDate().toString().length > 1
        ? maxDate.getDate()
        : `0${maxDate.getDate()}`;
    return `${maxDate.getFullYear()}-${maxMonth}-${maxDay}`;
  }

  constructor(
    private samplesService: SamplesService,
    private systemSettingsService: SystemSettingsService,
    private store: Store<AppState>,
    private registrationService: RegistrationService,
    private conceptService: ConceptsService
    ) {
    this.subject
      .pipe(debounceTime(2000), distinctUntilChanged())
      .subscribe(() => {
        this.getList();
      });
  }

  ngOnInit(): void {
    this.currentLocation = JSON.parse(localStorage.getItem("currentLocation"));
    let endDate = formatDateToYYMMDD(new Date());
    this.parameters = {
      ...this.parameters,
      startDate: formatDateToYYMMDD(
        new Date(
          Number(endDate?.split("-")[0]),
          Number(endDate?.split("-")[1]) - 1,
          Number(endDate?.split("-")[2]) - 2
        )
      ),
      endDate: formatDateToYYMMDD(
        new Date(
          Number(endDate?.split("-")[0]),
          Number(endDate?.split("-")[1]) - 1,
          Number(endDate?.split("-")[2])
        )
      ),
    };
    this.page = 1;
    this.pageSize = 10;
    this.getList();
    // console.log("provider data are ----------------------------->",this.provider);
    // console.log("sampleRegistrationCategories data are ----------------------------->",this.sampleRegistrationCategories);
    // this.mrnGeneratorSourceUuid$ =
    //   this.systemSettingsService.getSystemSettingsByKey(
    //     "iCare.generateMRN.source"
    //   );
    //   this.preferredPersonIdentifier$ =
    //   this.systemSettingsService.getSystemSettingsByKey(
    //     "iCare.preferredPersonIdentifier"
    //   );
    //   this.agencyConceptConfigs$ = this.store.select(getConceptById, {
    //     id: this.LISConfigurations?.agencyConceptUuid,
    //   });
    //   this.referFromFacilityVisitAttribute$ =
    //   this.systemSettingsService.getSystemSettingsByKey(
    //     "lis.attribute.referFromFacility"
    //   );
    //   this.labNumberCharactersCount$ =
    //   this.systemSettingsService.getSystemSettingsByKey(
    //     "lis.settings.labNumber.charactersCount"
    //   );
    //   this.referringDoctorAttributes$ =
    //   this.systemSettingsService.getSystemSettingsMatchingAKey(
    //     "lis.attributes.referringDoctor"
    //   );
    //   this.testsFromExternalSystemsConfigs$ =
    //   this.systemSettingsService.getSystemSettingsMatchingAKey(
    //     `iCare.externalSystems.integrated.tests`
    //   );
    //   this.specimenSourceConceptUuid$ = this.systemSettingsService
    //   .getSystemSettingsByKey(
    //     `lis.sampleRegistration.specimenSource.concept.uuid`
    //   )
    //   .pipe(
    //     map((response) => {
    //       if (response && response == "none") {
    //         this.errors = [
    //           ...this.errors,
    //           {
    //             error: {
    //               error: `Key: lis.sampleRegistration.specimenSource.concept.uuid is not set, contact IT`,
    //               message: `Key: lis.sampleRegistration.specimenSource.concept.uuid is not set, contact IT`,
    //             },
    //           },
    //         ];
    //       }
    //       return response;
    //     })
    //   );
    //   this.barcodeSettings$ = this.systemSettingsService
    //   .getSystemSettingsByKey("iCare.laboratory.settings.print.barcodeFormat")
    //   .pipe(
    //     tap((response) => {
    //       if (response === "none") {
    //         this.errors = [
    //           ...this.errors,
    //           {
    //             error: {
    //               message:
    //                 "iCare.laboratory.settings.print.barcodeFormat is not set. You won't be able to print barcode.",
    //             },
    //             type: "warning",
    //           },
    //         ];
    //       }
    //       if (response?.error) {
    //         this.errors = [...this.errors, response?.error];
    //       }
    //     })
    //   );
    //   this.labTestRequestProgramStageId$ =
    //   this.systemSettingsService.getSystemSettingsByKey(
    //     "iCare.externalSystems.integrated.pimaCovid.programStages.testRequestStage"
    //   );
    //   this.identifierTypes$ =
    //   this.registrationService.getPatientIdentifierTypes();
    //   this.sampleRegistrationCategories$ = this.conceptService
    //   .getConceptDetailsByUuid(
    //     this.sampleRegistrationCategoriesConceptUuid,
    //     "custom:(uuid,display,setMembers:(uuid,display))"
    //   )
    //   .pipe(
    //     map((response) =>
    //       response?.setMembers?.map((setMember: any) => {
    //         return {
    //           ...setMember,
    //           refKey: setMember?.display?.toLowerCase().split(" ").join(""),
    //         };
    //       })
    //     ),
    //     catchError((error) => of(error))
    //   );
      
    this.initializeRegistrationFields();

  }

  searchSamples(): void {
    // this.subject.next()
  }

  onDateChange(reload?: boolean): void {
    this.parameters = {
      ...this.parameters,
      startDate: `${this.startDate.getFullYear()}-${
        this.startDate.getMonth() + 1
      }-${this.startDate.getDate()}`,
      endDate: `${this.endDate.getFullYear()}-${
        this.endDate.getMonth() + 1
      }-${this.endDate.getDate()}`,
    };
    if (reload) {
      this.getList();
    }
  }

  onViewSampleDetails(sample: any): void {
    this.selectedEditSampleUuid ="";
    this.isOnEdit = false;
    this.selectedSampleUuid = sample?.uuid;
  }
  onEditSampleDetails(sample:any):void{
    console.log("edit button clicked opted ----------");
    this.selectedSampleUuid="";
    this.isOnEdit = true;
    this.selectedEditSampleUuid = sample?.uuid;
  }

  getList(): void {
    this.samples$ = this.samplesService
      .getSamplesByPaginationDetails(
        { page: this.page, pageSize: this.pageSize },
        this.parameters,
        this.searchText,
        this.departments,
        this.specimenSources,
        this.codedSampleRejectionReasons
      )
      .pipe(
        tap((response: any) => {
          if (response?.error || response.stackTrace) {
            this.errors =
              response?.error && !response?.stackTrace
                ? [...this.errors, response?.error]
                : response?.stackTrace
                ? [
                    ...this.errors,
                    {
                      error: {
                        message: response?.message,
                      },
                    },
                  ]
                : [
                    ...this.errors,
                    {
                      error: {
                        message: "Unknown error occurred!",
                      },
                    },
                  ];
          }
        })
      );
  }

  onGetSamples(event: Event, action: string, pager: any): void {
    event.stopPropagation();
    this.page = action === "prev" ? this.page - 1 : this.page + 1;
    this.getList();
  }

  onPageChange(event) {
    this.page = event.pageIndex + 1;
    this.pageSize = Number(event?.pageSize);
    this.getList();
  }

  initializeRegistrationFields() {
    this.specimenDetailsFields = {
      specimen: new Dropdown({
        id: "specimen",
        key: "specimen",
        label: "Specimen type",
        searchTerm: "SPECIMEN_SOURCE",
        options: [],
        conceptClass: "Specimen",
        searchControlType: "concept",
        shouldHaveLiveSearchForDropDownFields: true,
      }),
      condition: new Dropdown({
        id: "condition",
        key: "condition",
        label: "Condition",
        options: [],
        conceptClass: "condition",
        searchControlType: "concept",
        searchTerm: "SAMPLE_CONDITIONS",
        shouldHaveLiveSearchForDropDownFields: true,
      }),
      agency: new Dropdown({
        id: "agency",
        key: "agency",
        label: "Urgency/Priority",
        options: [],
        conceptClass: "priority",
        searchControlType: "concept",
        searchTerm: "SAMPLE_PRIORITIES",
        shouldHaveLiveSearchForDropDownFields: true,
      }),
      receivedBy: new Dropdown({
        id: "receivedBy",
        key: "receivedBy",
        label: "Received By",
        options: [],
        shouldHaveLiveSearchForDropDownFields: true,
        searchControlType: "user",
      }),
      receivedOn: new DateField({
        id: "receivedOn",
        key: "receivedOn",
        label: "Received On",
        allowCustomDateTime: true,
      }),
      transportCondition: new Dropdown({
        id: "transportCondition",
        key: "transportCondition",
        label: "Transport Condition",
        searchTerm: "SAMPLE_TRANSPORT_CONDITION",
        required: false,
        options: [],
        multiple: false,
        conceptClass: "Misc",
        searchControlType: "concept",
        shouldHaveLiveSearchForDropDownFields: true,
      }),
      transportationTemperature: new Dropdown({
        id: "transportationTemperature",
        key: "transportationTemperature",
        label: "Transportation Temperature",
        searchTerm: "SAMPLE_TRANSPORT_TEMPERATURE",
        required: false,
        options: [],
        multiple: false,
        conceptClass: "Misc",
        searchControlType: "concept",
        shouldHaveLiveSearchForDropDownFields: true,
      }),
      collectedOn: new DateField({
        id: "collectedOn",
        key: "collectedOn",
        label: "Collected On",
        allowCustomDateTime: true,
      }),
      collectedBy: new Textbox({
        id: "collectedBy",
        key: "collectedBy",
        label: "Collected By",
      }),
      broughtOn: new DateField({
        id: "broughtOn",
        key: "broughtOn",
        label: "Delivered On",
        allowCustomDateTime: true,
      }),
      broughtBy: new Textbox({
        id: "broughtBy",
        key: "broughtBy",
        label: "Delivered By",
      }),
    };

    this.newClinicalFormFields = [
      new Dropdown({
        id: "icd10",
        key: "icd10",
        label: "ICD 10",
        options: [],
        conceptClass: "Diagnosis",
        shouldHaveLiveSearchForDropDownFields: true,
      }),
      new TextArea({
        id: "notes",
        key: "notes",
        label: "Clinical Information / History",
        type: "text",
      }),
      new Textbox({
        id: "diagnosis",
        key: "diagnosis",
        label: "Diagnosis - Clinical",
        type: "text",
      }),
    ];
    this.clinicalFormFields = {
      icd10: new Dropdown({
        id: "icd10",
        key: "icd10",
        label: "ICD 10",
        options: [],
        conceptClass: "Diagnosis",
        shouldHaveLiveSearchForDropDownFields: true,
      }),
      notes: new TextArea({
        id: "notes",
        key: "notes",
        label: "Clinical Information / History",
        type: "text",
      }),
      diagnosis: new Textbox({
        id: "diagnosis",
        key: "diagnosis",
        label: "Diagnosis - Clinical",
        type: "text",
      }),
    };

    this.newPersonlFormFields = [
      new Textbox({
        id: "firstName",
        key: "firstName",
        label: "First name",
        required: true,
        type: "text",
      }),
      new Textbox({
        id: "middleName",
        key: "middleName",
        label: "Middle name",
        type: "text",
      }),
      new Textbox({
        id: "lastName",
        key: "lastName",
        label: "Last name",
        required: true,
        type: "text",
      }),
      new Dropdown({
        id: "gender",
        key: "gender",
        label: "Gender",
        required: false,
        type: "text",
        options: [
          {
            key: "Male",
            label: "Male",
            value: "M",
          },
          {
            key: "Female",
            label: "Female",
            value: "F",
          },
        ],
        shouldHaveLiveSearchForDropDownFields: false,
      }),
      new Dropdown({
        id: "attribute-" + "47da17a9-a910-4382-8149-736de57dab18", // Referred from: TODO softcode this visit attribute type
        key: "attribute-" + "47da17a9-a910-4382-8149-736de57dab18",
        options: [],
        label: "Facility Name",
        shouldHaveLiveSearchForDropDownFields: true,
        searchControlType: "healthFacility",
        searchTerm: "Health Facility",
        controlType: "location",
      }),
      new Textbox({
        id: "age",
        key: "age",
        label: "Age",
        required: false,
        type: "number",
        min: 0,
        max: 150,
      }),
      new DateField({
        id: "dob",
        key: "dob",
        label: "Date of birth",
        required: true,
        type: "date",
        max: this.maximumDate,
      }),
      new PhoneNumber({
        id: "mobileNumber",
        key: "mobileNumber",
        label: "Mobile number",
        required: false,
        type: "number",
        min: 0,
        placeholder: "Mobile number",
        category: "phoneNumber",
      }),
      new Textbox({
        id: "email",
        key: "email",
        label: "Email",
        required: false,
        type: "text",
        placeholder: "Email",
        category: "email",
      }),
      new TextArea({
        id: "address",
        key: "address",
        label: "Address",
        required: false,
        type: "text",
      }),
    ];
    this.personFields = {
      firstName: new Textbox({
        id: "firstName",
        key: "firstName",
        label: "First name",
        required: true,
        type: "text",
      }),
      middleName: new Textbox({
        id: "middleName",
        key: "middleName",
        label: "Middle name",
        type: "text",
      }),
      lastName: new Textbox({
        id: "lastName",
        key: "lastName",
        label: "Last name",
        required: true,
        type: "text",
      }),
      gender: new Dropdown({
        id: "gender",
        key: "gender",
        label: "Gender",
        required: false,
        type: "text",
        options: [
          {
            key: "Male",
            label: "Male",
            value: "M",
          },
          {
            key: "Female",
            label: "Female",
            value: "F",
          },
        ],
        shouldHaveLiveSearchForDropDownFields: false,
      }),
    };
    this.patientAgeFields = {
      age: new Textbox({
        id: "age",
        key: "age",
        label: "Age",
        required: false,
        type: "number",
        min: 0,
        max: 150,
      }),
      dob: new DateField({
        id: "dob",
        key: "dob",
        label: "Date of birth",
        required: true,
        type: "date",
        max: this.maximumDate,
      }),
    };
    this.personFieldsGroupThree = {
      mobileNumber: new PhoneNumber({
        id: "mobileNumber",
        key: "mobileNumber",
        label: "Mobile number",
        required: false,
        type: "number",
        min: 0,
        placeholder: "Mobile number",
        category: "phoneNumber",
      }),
      email: new Textbox({
        id: "email",
        key: "email",
        label: "Email",
        required: false,
        type: "text",
        placeholder: "Email",
        category: "email",
      }),
      address: new TextArea({
        id: "address",
        key: "address",
        label: "Address",
        required: false,
        type: "text",
      }),
    };

    this.batchRegistrationFields = {
      addFixedField: new Dropdown({
        id: "addFixedField",
        key: "addFixedField",
        label: "Select fixed field(s)",
        shouldHaveLiveSearchForDropDownFields: false,
        multiple: true,
      }),
      addStaticField: new Dropdown({
        id: "addStaticField",
        key: "addStaticField",
        label: "Select static field(s)",
        shouldHaveLiveSearchForDropDownFields: false,
        multiple: true,
      }),
      addDynamicField: new Dropdown({
        id: "addDynamicField",
        key: "addDynamicField",
        label: "Select dynamic field(s)",
        shouldHaveLiveSearchForDropDownFields: false,
        multiple: true,
      }),
      existingBatchField: new Dropdown({
        id: "existingBatch",
        key: "existingBatch",
        label: "Select exising batch",
        shouldHaveLiveSearchForDropDownFields: false,
      }),
      batchNameField: new Textbox({
        id: "batchName",
        key: "batchName",
        label: "Type Batch Name",
      }),
      batchDescriptionField: new TextArea({
        id: "batchDescription",
        key: "batchDescription",
        label: "Batch Description",
      }),
      existingBatchsetField: new Dropdown({
        id: "existingBatchset",
        key: "existingBatchset",
        label: "Select exising batch set",
        shouldHaveLiveSearchForDropDownFields: false,
      }),
      batchsetNameField: new Textbox({
        id: "batchsetName",
        key: "batchsetName",
        label: "Type Batchset Name",
      }),
      batchsetDescriptionField: new TextArea({
        id: "batchsetDescription",
        key: "batchsetDescription",
        label: "Batchset Description",
      }),
    };

    this.testFields = {
      testorders: new Dropdown({
        id: "testorders",
        key: "testorders",
        label: "Select Test Orders",
        required: true,
        options: [],
        searchControlType: "concept",
        searchTerm: "TEST_ORDERS",
        conceptClass: "Test",
        multiple: true,
        shouldHaveLiveSearchForDropDownFields: true,
      }),
    };

    this.allRegistrationFields = {
      batchRegistrationFields: this.batchRegistrationFields,
      specimenDetailFields: this.specimenDetailsFields,
      personFields: this.personFields,
      patientAgeFields: this.patientAgeFields,
      personFieldsGroupThree: this.personFieldsGroupThree,
      clinicalFormFields: this.clinicalFormFields,
      testFields: this.testFields,
    };
  }

}
