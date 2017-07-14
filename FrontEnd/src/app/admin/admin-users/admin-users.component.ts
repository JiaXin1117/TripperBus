import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { AuthService } from "../../services/auth_service/auth.service";
import { HttpService } from "../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';

import { User } from '../../model';
import { UserPermission } from '../../common';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsersComponent implements OnInit {

  @ViewChild('userModal') public userModal: ModalDirective;
  @ViewChild('permissionModal') public permissionModal: ModalDirective;

  public users: User[];
  public permissions: any[][];
  public user: User;
  public confirmPassword: string;
  public userPermissionEnum = UserPermission;
  public selectedPermission: any[];

  public notifyOptions = {
//    timeOut: 3000,
    position: ["bottom", "right"],
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: true,
    maxStack: 1,
  };

  public notifyOptionsForSuccess = {
    timeOut: 3000,
    position: ["bottom", "right"],
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: true,
    maxStack: 1,
  };

  constructor(
        public _authService: AuthService,
        public _httpService: HttpService,
        public _notificationsService: NotificationsService,
  ) {
    this.users = null;
    this.permissions = null;
    this.user = new User;
    this.selectedPermission = [];
  }

  ngOnInit() {
    this.init();
  }

  init () {
    let url = this._authService.URLS.get_users;

    this._httpService.sendGetRequestWithParams(url)
      .subscribe(
        data => {
          if (data.success) {
            this.users = data.users;
            this.permissions = data.permissions;
          }
        },
        error => {
            this.failedNotification(error);
        }
    );
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
    this.user.init();
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

  showPermissionModal(user) {
    this.user.copy(user);
    this.selectedPermission = [];
    
    if (this.permissions[user['id']]) {
      this.permissions[user['id']].forEach(permission => {
        this.selectedPermission[permission] = 1;
      });
    }

    this.permissionModal.show();
  }

  hidePermissionModal() {
    this.permissionModal.hide();
    this.user.init();
  }

  savePermission() {
    let userId = this.user['id'];

    this.permissions[userId] = [];
    
    this.selectedPermission.forEach ((permission, index) => {
      if (permission == 1) {
        this.permissions[userId].push(index);
      }
    });
    
    let url = this._authService.URLS.set_permission;

    this._httpService.sendPostJSON(url, {userId: userId, permission: this.permissions[userId]})
      .subscribe(
        data => {
          if (data.success) {
            this.successNotification("Permission successfully updated!");
            
            if (userId == this._authService.getCurrentUser()['id']) {
              this._authService.setCurrentUserPermission(this.permissions[userId]);
            }
          } else if (data.error) {
            this.failedNotification(data.error);
          }
        },
        error => {
          this.failedNotification(error);
          this.init();
        },
        () => {
          this.hidePermissionModal();
        }
      )
  }

  addUser() {
    let url = this._authService.URLS.add_user;

    if(!this.checkUser())
      return;

    this._httpService.sendPostJSON(url, { user: this.user })
      .subscribe(
      data => {
        if (data.success) {
          let createdUser = data.data as User;
          if (!createdUser) {
            this.hideUserModal();
            return;
          }

          this.users.push(createdUser);
          this.permissions[createdUser['id']] = data.data2;

          this.hideUserModal();

          let successMessage = "User[" + createdUser['name'] + "] successfully added.";
          this.successNotification(successMessage);
        } else {
          if (data.error) {
            this.failedNotification(data.error);
          }
        }
      },
      error => {
        this.failedNotification(error);
      });
  }

  checkUser() {
    let user = this.user;
    let errorMsg = '';

    if (user.name == '')
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
    let url = this._authService.URLS.update_user;

    if(!this.checkUser())
      return;

    this._httpService.sendPostJSON(url, { user: this.user })
      .subscribe(
      data => {
        if (data.success) {
          let resUser = data.data as User;
          if (!resUser) {
            this.hideUserModal();
            return;
          }

          this.updateUserFromArray(resUser);
          this.hideUserModal();

          let successMessage = "User[" + resUser['name'] + "] successfully updated.";
          this.successNotification(successMessage);
        } else {
          if (data.error) {
            this.failedNotification(data.error);
          }
        }
      },
      error => {
        this.failedNotification(error);
      });
  }

  updateUserFromArray(user: User) {
    let oldUser = this.users.find(elemUser => (elemUser.id == user.id)) as User;
    oldUser ? this.copyUser(oldUser, user) : 0;
  }

  deleteUser() {
    let url = this._authService.URLS.delete_user;

    this._httpService.sendPostJSON(url, { userId: this.user.id })
      .subscribe(
      data => {
        if (data.success) {
          let successMessage = "User[" + this.user['name'] + "] successfully deleted.";
          this.deleteUserFromArray(this.user);

          this.hideUserModal();
          this.successNotification(successMessage);
        } else {
          if (data.error) {
            this.failedNotification(data.error);
          }
        }
      },
      error => {
        this.failedNotification(error);
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

  editPermission(user) {
    alert(user['name']);
  }
  
  successNotification(notifyText: string) {
    this._notificationsService.success('Success', notifyText, this.notifyOptionsForSuccess);
  }

  failedNotification(notifyText: string) {
    this._notificationsService.error('Failed', notifyText);
  }

}
