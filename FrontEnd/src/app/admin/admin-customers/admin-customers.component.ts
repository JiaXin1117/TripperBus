import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { HttpService } from "../../services/http_service/http.service";
import { CustomerService } from "../../services/customer_service/customer.service";
import { NotificationsService } from 'angular2-notifications';

import { Customer } from '../../model';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})

export class AdminCustomersComponent implements OnInit {

  @ViewChild('customerModal') public customerModal: ModalDirective;

  public customers: Customer[];
  public customer: Customer;
  public confirmPassword: string;

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
        public _httpService: HttpService,
        public _customerService: CustomerService,
        public _notificationsService: NotificationsService,
  ) {
    this.customers = null;
    this.customer = new Customer;
  }

  ngOnInit() {
    this.init();
  }

  init () {
    let url = this._customerService.URLS.get_customers;

    this._httpService.sendGetRequestWithParams(url)
      .subscribe(
        data => {
          if (data.success) {
            this.customers = data.customers;
          }
        },
        error => {
            this.failedNotification(error);
        }
    );
  }

  initModalData() {
    this.customer.init();
    this.confirmPassword = "";
  }

  showCustomerModal() {
    this.customerModal.show();
  }

  hideCustomerModal() {
    this.customerModal.hide();
    this.customer.init();
  }

  showAddCustomerModal() {
    this.initModalData();
    this.showCustomerModal();
  }

  showEditCustomerModal(customer) {
    this.customer.copy(customer);
    this.customer.password = "";
    this.confirmPassword = "";
    this.showCustomerModal();
  }

  addCustomer() {
    let url = this._customerService.URLS.add_customer;

    if(!this.checkCustomer())
      return;

    this._httpService.sendPostJSON(url, { customer: this.customer })
      .subscribe(
      data => {
        if (data.success) {
          let createdCustomer = data.data as Customer;
          if (!createdCustomer) {
            this.hideCustomerModal();
            return;
          }

          this.customers.push(createdCustomer);

          this.hideCustomerModal();

          let successMessage = "Customer[" + (createdCustomer['fname'] + " " + createdCustomer['lname']).trim() + "] successfully added.";
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

  checkCustomer() {
    let customer = this.customer;
    let errorMsg = '';

    if (customer.fname == '' && customer.lname == '' )
      errorMsg = 'Name is empty!';
    else if (customer.email == '')
      errorMsg = 'Email is empty!';
    else if (customer.password == '')
      errorMsg = 'Password is empty!';
    else if (customer.password != this.confirmPassword)
      errorMsg = 'Password confirmation is failed!';

    if (errorMsg.length) {
      this.failedNotification(errorMsg);
    }
    
    return !errorMsg.length;
  }

  updateCustomer() {
    let url = this._customerService.URLS.update_customer;

    if(!this.checkCustomer())
      return;

    this._httpService.sendPostJSON(url, { customer: this.customer })
      .subscribe(
      data => {
        if (data.success) {
          let resCustomer = data.data as Customer;
          if (!resCustomer) {
            this.hideCustomerModal();
            return;
          }

          this.updateCustomerFromArray(resCustomer);
          this.hideCustomerModal();

          let successMessage = "Customer[" + (resCustomer['fname'] + " " + resCustomer['lname']).trim() + "] successfully updated.";
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

  updateCustomerFromArray(customer: Customer) {
    let oldCustomer = this.customers.find(elemCustomer => (elemCustomer.id == customer.id)) as Customer;
    oldCustomer ? this.copyCustomer(oldCustomer, customer) : 0;
  }

  deleteCustomer() {
    let url = this._customerService.URLS.delete_customer;

    this._httpService.sendPostJSON(url, { customerId: this.customer.id })
      .subscribe(
      data => {
        if (data.success) {
          let successMessage = "Customer[" + (this.customer['fname'] + " " + this.customer['lname']).trim() + "] successfully deleted.";
          this.deleteCustomerFromArray(this.customer);

          this.hideCustomerModal();
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

  deleteCustomerFromArray(customer: Customer) {
    let index = this.customers.findIndex(elemCustomer => (elemCustomer.id == customer.id));
    ~index ? this.customers.splice(index, 1) : 0;
  }

  copyCustomer(dst: Customer, src: Customer) {
    Object.keys(src).forEach(key => {
      dst[key] = src[key];
    });
  }

  successNotification(notifyText: string) {
    this._notificationsService.success('Success', notifyText, this.notifyOptionsForSuccess);
  }

  failedNotification(notifyText: string) {
    this._notificationsService.error('Failed', notifyText);
  }

}
