import { Injectable } from '@angular/core';

import { BACKEND_SERVER_URL } from '../../config/config';

@Injectable()
export class ReportService {

  URLS: any = {
    get_reports: BACKEND_SERVER_URL + "api/admin/report/get_reports",
  };

  getErrorMessage = "Getting Reports Failed.";

  constructor() { }

}
