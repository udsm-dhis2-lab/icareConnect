import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OpenmrsHttpClientService } from 'src/app/shared/modules/openmrs-http-client/services/openmrs-http-client.service';
import { LedgerType, LedgerTypeObject } from '../models/ledger-type.model';

@Injectable({
  providedIn: 'root',
})
export class LedgerTypeService {
  constructor(private httpClient: OpenmrsHttpClientService) {}

  getLedgerTypes(): Observable<LedgerTypeObject[]> {
    return this.httpClient
      .get(`store/ledgertypes`)
      .pipe(
        map((ledgerTypeResponse: any) =>
          (ledgerTypeResponse || []).map((ledgerType) =>
            new LedgerType(ledgerType).toJson()
          )
        )
      );
  }
}
