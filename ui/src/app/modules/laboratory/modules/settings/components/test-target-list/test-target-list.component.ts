import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { TestTimeConfigService } from "src/app/modules/laboratory/resources/services/test-time-config.service";
import { Dropdown } from "src/app/shared/modules/form/models/dropdown.model";
import { FormValue } from "src/app/shared/modules/form/models/form-value.model";
import { Textbox } from "src/app/shared/modules/form/models/text-box.model";
import { ConceptsService } from "src/app/shared/resources/concepts/services/concepts.service";
import { ConceptGetFull } from "src/app/shared/resources/openmrs";


@Component({
  selector: "app-test-target-list",
  templateUrl: "./test-target-list.component.html",
  styleUrls: ["./test-target-list.component.scss"],
})
export class TestTargetListComponent implements OnInit {

  @Input() standardSearchTerm: string;
  @Input() selectedConceptUuid: string;
  @Input() conceptClass: string;
  conceptsList$: Observable<ConceptGetFull[]>;
  testTimeConfigList: any [];
  saving: boolean = false;

  page: number = 1;
  pageSize: number = 10;

  pageCounts: any[] = [10, 20, 25, 50, 100, 200];
  searchingText: string;


  constructor(
    private conceptService: ConceptsService,
    private testTimeConfigService: TestTimeConfigService
  ) {}

  ngOnInit(): void {
    this.getTestTimeConfig(null)
  }


  searchTestConfig(event : KeyboardEvent){
    this.searchingText = (event.target as HTMLInputElement).value;
    if(this.searchingText){
      this.getTestTimeConfig({q : this.searchingText})
    }
  }


  getTestTimeConfig(parameters : any){
    this.testTimeConfigService.getTestTimeConfig(parameters)
    .subscribe((response) =>{
      this.testTimeConfigList = response;
    });

  }

  
}
