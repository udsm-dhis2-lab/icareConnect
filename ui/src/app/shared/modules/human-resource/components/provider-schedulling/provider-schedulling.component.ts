import { Component, OnInit } from "@angular/core";
import { ProviderShedulingService } from "../../services/provider-sheduling.service";
import { Observable } from "rxjs";

@Component({
  selector: "hr-provider-schedulling",
  templateUrl: "./provider-schedulling.component.html",
  styleUrls: ["./provider-schedulling.component.scss"],
})
export class ProviderSchedullingComponent implements OnInit {
  v: string = `custom:(uuid,provider:(uuid,display),startTime,endTime,startDate,endDate,location:(uuid,display))`;
  providerShedulesResponse$: Observable<any>;
  constructor(private providerSchedullingService: ProviderShedulingService) {}

  ngOnInit(): void {
    this.getProviderSchedules();
  }

  getProviderSchedules(): void {
    this.providerShedulesResponse$ =
      this.providerSchedullingService.getProviderSchedules(0, 10, this.v);
  }
}
