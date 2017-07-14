import { Component, OnInit } from '@angular/core';

import { MainService } from "../../services/main_service/main.service";
import { HttpService } from "../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})

export class AdminSettingsComponent implements OnInit {

  public settings: any[];

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
    public _mainService: MainService,
    public _httpService: HttpService,
    public _notificationsService: NotificationsService,
  ) {
    this.settings = Array();
  }

  ngOnInit() {
    this.getSettings();
  }

  getSettings() {
    let url = this._mainService.URLS.get_Settings;

    this._httpService.sendGetRequestWithParams(url)
      .subscribe(
      data => {
        if (data.state == "success") {
          console.log(data);
          this._mainService.settings = data.settings;
          this.settings = data.settings;
        }
      },
      error => {
        this.failedNotification(error);
      }
      );
  }

  setSettings() {
    let url = this._mainService.URLS.set_Settings;

    this._httpService.sendPostJSON(url, { settings: this.settings })
      .subscribe(
      data => {
        this.settings = data['settings'];
        this._mainService.settings = this.settings;

        this.successNotification('Successfully updated.');

      },
      error => {
        let errorMessage = "Settings updated failed.";
        console.log(errorMessage);

        this.failedNotification(error);
      });
  }

  successNotification(notifyText: string) {
    this._notificationsService.success('Success', notifyText, this.notifyOptionsForSuccess);
  }

  failedNotification(notifyText: string) {
    this._notificationsService.error('Failed', notifyText);
  }

}
