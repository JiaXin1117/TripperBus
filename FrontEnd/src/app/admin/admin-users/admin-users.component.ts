import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { UserService } from "../../services/user_service/user.service";
import { HttpService } from "../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';

import { User } from '../../model';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  @ViewChild('userModal') public userModal: ModalDirective;

  public users: User[];
  public newUser: User;
  public confirmPassword: string;

  public notifyOptions = {
      timeOut: 3000,
      position: ["bottom", "right"],
      showProgressBar: false,
      pauseOnHover: false,
      clickToClose: true,
  };

  constructor(
        public _userService: UserService,
        public _httpService: HttpService,
        public _notificationsService: NotificationsService,
  ) {
    this.users = null;
    this.newUser = new User;
  }

  ngOnInit() {
    this.init();
  }

  init () {
    let url = this._userService.URLS.get_users;

    this._httpService.sendGetRequestWithParams(url)
      .subscribe(
      data => {
        if (data.success) {
          this.users = data.users;
          console.log(data);
        }
      });
  }

  refreshData() {
    this.newUser.init();
    this.confirmPassword = "";
  }

  showUserModal() {
    this.userModal.show();
  }

  hideUserModal() {
    this.userModal.hide();
  }

  showAddUserModal() {
    this.showUserModal();
  }

  addUser() {
    console.log(this.newUser);

    let url = this._userService.URLS.add_user;

    let errorMsg = this.checkAdd();
    if (errorMsg != '') {
      return this.failedNotification(errorMsg);
    }

    this._httpService.sendPostJSON(url, { user: this.newUser })
      .subscribe(
      data => {
        let res = data.json();
        if (res.success) {
          let createdUser = res.data as User;
          if (!createdUser)
            return;

          this.users.push(createdUser);

          this.hideUserModal();
          this.refreshData();

          let successMessage = "User[" + createdUser['username'] + "] successfully added.";
          this.successNotification(successMessage);
        } else {
          if (res.error) {
            this.failedNotification(res.error);
          }
        }
      },
      error => {
        this.failedNotification(this._userService.addErrorMessage);
      });
  }

  public checkAdd() {
    let user = this.newUser;

    if (user.username == '')
      return 'Username is empty!';
    if (user.email == '')
      return 'Email is empty!';
    if (user.password == '')
      return 'Password is empty!';
    if (user.password != this.confirmPassword)
      return 'Password confirmation is failed!';
    if (user.full_name == '')
      return 'Fullname is empty!';

    return '';
  }


  public successNotification(notifyText: string) {
      this._notificationsService.success('Success', notifyText);
  }

  public failedNotification(notifyText: string) {
      this._notificationsService.error('Failed', notifyText);
  }

}
