import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Api } from "src/app/shared/resources/openmrs";
import { OpenmrsHttpClientService } from "../../openmrs-http-client/services/openmrs-http-client.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProviderShedulingService {
  constructor(
    private api: Api,
    private openMRSService: OpenmrsHttpClientService
  ) {}

  getProviderSchedules(
    startIndex?: number,
    limit?: number,
    v?: string
  ): Observable<any[]> {
    let params = [];
    if (startIndex) {
      params = [...params, `startIndex=${startIndex}`];
    }
    if (limit) {
      params = [...params, `limit=${limit}`];
    }
    if (v) {
      params = [...params, `v=${v}`];
    }
    return this.openMRSService
      .get(`appointmentscheduling/providerschedule?${params.join("&")}`)
      .pipe(
        map((response) => {
          return {
            ...response,
            results: response?.results?.map((schedule) => {
              return {
                ...schedule,
                startTime:
                  new Date(schedule?.startTime).getHours() +
                  ":" +
                  new Date(schedule?.startTime).getMinutes(),
                endTime:
                  new Date(schedule?.endTime).getHours() +
                  ":" +
                  new Date(schedule?.endTime).getHours(),
              };
            }),
          };
        })
      );
  }
}
