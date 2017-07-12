import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ReportService } from "../../services/report_service/report.service";
import { HttpService } from "../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';

import * as moment from "moment";

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})

export class AdminReportsComponent implements OnInit {

  public dateType = "Booking";
  public datePeriod = "Monthly";

  public date1: Date = new Date();
  public date2: Date = new Date();

  public dateMode = "month";
  public reports: any[];

  public notifyOptions = {
    timeOut: 3000,
    position: ["bottom", "right"],
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: true,
  };


  public constructor(
    public _httpService: HttpService,
    public _reportService: ReportService,
    public _notificationsService: NotificationsService,
  ) {
    this.reports = Array();
  }

  ngOnInit() {

  }

  public getDate1(): number {
    return this.date1 && this.date1.getTime() || new Date().getTime();
  }

  public getDate2(): number {
    return this.date2 && this.date2.getTime() || new Date().getTime();
  }

  onChangeDatePeriod() {
    this.dateMode = this.datePeriod == "Monthly" ? "month" : "day";
  }

  show() {
    let date1 = this.date1;
    let date2 = this.date2;

    if (this.datePeriod == 'Monthly') {
      date1.setDate(1);
      date2 = new Date(date1);
      date2.setMonth(date1.getMonth() + 1);
    } else {
      date2.setDate(date2.getDate() + 1);
    }

    if (date2 < date1) {
      this.failedNotification("Please select To after than From.");
      return;
    }

    let dateStr1 = date1.toLocaleDateString();
    let dateStr2 = date2.toLocaleDateString();

    let url = this._reportService.URLS.get_reports + "?dateType=" + this.dateType
      + "&date1=" + dateStr1
      + "&date2=" + dateStr2;

    console.log(dateStr1 + ":" + dateStr2);

    this._httpService.sendGetRequestWithParams(url)
      .subscribe(
      data => {
        if (data.success) {
          this.reports = data.reports;
          this.reports['totalCount'] = data.totalCount;
          this.reports['totalAmount'] = data.totalAmount;

          console.log(this.reports);
        } else {
          this.failedNotification(data.error);
        }
      },
      error => {
        this.failedNotification(error);
      },
      () => {
        this.failedNotification(this._reportService.getErrorMessage);
      });
  }

  public successNotification(notifyText: string) {
    this._notificationsService.success('Success', notifyText);
  }

  public failedNotification(notifyText: string) {
    this._notificationsService.error('Failed', notifyText);
  }

}
