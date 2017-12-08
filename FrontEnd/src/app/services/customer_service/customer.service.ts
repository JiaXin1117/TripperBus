import { Injectable } from '@angular/core';

import { BACKEND_SERVER_URL } from '../../config/config';

@Injectable()
export class CustomerService {

  URLS: any = {
    get_customers: BACKEND_SERVER_URL + "api/admin/customer/get_customers",
    add_customer: BACKEND_SERVER_URL + "api/admin/customer/add_customer",
    update_customer: BACKEND_SERVER_URL + "api/admin/customer/update_customer",
    delete_customer: BACKEND_SERVER_URL + "api/admin/customer/delete_customer",
  };

  constructor() { }

}
