import { Injectable } from '@angular/core';
import { BACKEND_SERVER_URL } from '../../config/config';

@Injectable()
export class UserService {

  URLS: any = {
    get_users: BACKEND_SERVER_URL + "api/admin/user/get_users",
    add_user: BACKEND_SERVER_URL + "api/admin/user/add_user",
  };

  addErrorMessage = "Adding Failed.";
  updateErrorMessage = "Updating Failed.";
  deleteErrorMessage = "Deleting failed.";

  constructor() { }

}
