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
  public user: User;
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
    this.user = new User;
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

  initModalData() {
    this.user.init();
    this.confirmPassword = "";
  }

  showUserModal() {
    this.userModal.show();
  }

  hideUserModal() {
    this.userModal.hide();
  }

  showAddUserModal() {
    this.initModalData();
    this.showUserModal();
  }

  showEditUserModal(user) {
    this.user.copy(user);
    this.user.password = "";
    this.confirmPassword = "";
    this.showUserModal();
  }


  addUser() {
    console.log(this.user);

    let url = this._userService.URLS.add_user;

    if(!this.checkUser())
      return;

    this._httpService.sendPostJSON(url, { user: this.user })
      .subscribe(
      data => {
        let res = data.json();
        if (res.success) {
          let createdUser = res.data as User;
          if (!createdUser)
            return;

          this.users.push(createdUser);

          this.hideUserModal();

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

  checkUser() {
    let user = this.user;
    let errorMsg = '';

    if (user.username == '')
      errorMsg = 'Username is empty!';
    else if (user.email == '')
      errorMsg = 'Email is empty!';
    else if (user.password == '')
      errorMsg = 'Password is empty!';
    else if (user.password != this.confirmPassword)
      errorMsg = 'Password confirmation is failed!';
    else if (user.full_name == '')
      errorMsg = 'Fullname is empty!';

    if (errorMsg.length) {
      this.failedNotification(errorMsg);
    }
    
    return !errorMsg.length;
  }

  updateUser() {
    console.log(this.user);

    let url = this._userService.URLS.update_user;

    if(!this.checkUser())
      return;

    this._httpService.sendPostJSON(url, { user: this.user })
      .subscribe(
      data => {
        let res = data.json();
        if (res.success) {
          let resUser = res.data as User;
          if (!resUser)
            return;

          this.updateUserFromArray(resUser);

          this.hideUserModal();

          let successMessage = "User[" + resUser['username'] + "] successfully updated.";
          this.successNotification(successMessage);
        } else {
          if (res.error) {
            this.failedNotification(res.error);
          }
        }
      },
      error => {
        this.failedNotification(this._userService.updateErrorMessage);
      });
  }

  updateUserFromArray(user: User) {
    let oldUser = this.users.find(elemUser => (elemUser.id == user.id)) as User;
    oldUser ? this.copyUser(oldUser, user) : 0;
  }

  deleteUser() {
    console.log(this.user);

    let url = this._userService.URLS.delete_user;

    this._httpService.sendPostJSON(url, { userId: this.user.id })
      .subscribe(
      data => {
        let res = data.json();
        if (res.success) {
          let successMessage = "User[" + this.user['username'] + "] successfully deleted.";
          this.deleteUserFromArray(this.user);

          this.hideUserModal();
          this.successNotification(successMessage);
        } else {
          if (res.error) {
            this.failedNotification(res.error);
          }
        }
      },
      error => {
        this.failedNotification(this._userService.deleteErrorMessage);
      });
  }

  deleteUserFromArray(user: User) {
    let index = this.users.findIndex(elemUser => (elemUser.id == user.id));
    ~index ? this.users.splice(index, 1) : 0;
  }

  copyUser(dst: User, src: User) {
       Object.keys(src).forEach(key => {
           dst[key] = src[key];
       });
   }

  successNotification(notifyText: string) {
      this._notificationsService.success('Success', notifyText);
  }

  failedNotification(notifyText: string) {
      this._notificationsService.error('Failed', notifyText);
  }

}
