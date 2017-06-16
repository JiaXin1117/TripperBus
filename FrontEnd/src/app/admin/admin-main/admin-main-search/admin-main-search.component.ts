import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd }   from '@angular/router';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { MainService} from "../../../services/main_service/main.service";
import { ScheduleService} from "../../../services/schedule_service/schedule.service";
import { HttpService} from "../../../services/http_service/http.service";
import { Bus, Reservation, Time } from '../../../model';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { PaymentMethod, Autorize_net_url } from '../../../common';

import * as moment from "moment";
declare var jQuery:any;

@Component({
    selector: 'app-admin-main-search',
    templateUrl: './admin-main-search.component.html',
    styleUrls: ['./admin-main-search.component.css']
})
export class AdminMainSearchComponent implements OnInit {
    @ViewChild('reservationModal') public reservationModal: ModalDirective;

    public inputParams: any = {
        searchKey: "",
        searchVal: ""
    };

    public reservations: Reservation[];

    public myReservation = new Reservation;

    public paymentMethod = PaymentMethod;
    public authorize_net_url = Autorize_net_url;

    public errorMessage: string = "";
    public successMessage: string = "";

    // Default selection
    showField: number[] = [];

    // Settings configuration
    fieldSettings: IMultiSelectSettings = {
        pullRight: true,
        enableSearch: false,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-default btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true,
        fixedTitle: true,
        showCheckAll: true,
        showUncheckAll: true,
        maxHeight: '50em'
    };

    // Text configuration
    fieldTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find',
        defaultTitle: ' Show Fields ',
        allSelected: 'All selected',
    };

    // Labels / Parents
    fieldOptions: IMultiSelectOption[] = [
        { id: 1, name: 'Groupon Code' },
        { id: 2, name: 'Campaign Name' },
        { id: 3, name: 'Payment Method' },
        { id: 4, name: 'Authorize net Link' },
        { id: 5, name: 'IP Address' },
        { id: 6, name: 'Date Made' },
        { id: 7, name: 'Made By' },
        { id: 8, name: 'Note' },
        { id: 9, name: 'App Scanned' },
        { id: 10, name: 'Leg Price' },
        { id: 11, name: 'Transaction Amount' },
        { id: 12, name: 'Under Account' },
        { id: 13, name: 'Points Used' },
        { id: 14, name: 'Points Earned' },
        { id: 15, name: 'Action Record' },
        { id: 16, name: 'Other Leg' }
    ];

    // array of currently selected entities in the data table
    selectedEntities: any[];


    constructor(public _route: ActivatedRoute, 
                public _router: Router,
                public _mainService: MainService,
                public _scheduleService: ScheduleService,
                public _httpService: HttpService,
                public _location: Location,
                )
    {
        this.reservations = Array();
        _router.events.subscribe(evt => {
            let event = evt instanceof NavigationEnd;
            if (!event)
                return;
            
            let url = (evt as NavigationEnd).url;
            let params = url.split('/');
            let searchVal = params.pop();
            let searchKey = params.pop();
            let mode = params.pop();

            if (mode != 'search_mode' || searchKey == '' || searchVal == '')
                return;

            this.inputParams.searchKey = searchKey;
            this.inputParams.searchVal = searchVal;
            this.init();
        });
    }

    ngOnInit() {
    }

    init() {
        this.reservations = [];
        
        this.refreshData();
    }

    public refreshData() {
        let url = this._mainService.URLS.search_reservation + "?searchKey=" + this.inputParams.searchKey + "&searchVal=" + this.inputParams.searchVal;
        
        this._httpService.sendGetRequestWithParams(url).subscribe(
          data => {
            if (data.state == "success") {
              this.reservations = data.data;
              
              console.log (data);
            }
        });
    }
    
    public receiveInputParams() {
      this.inputParams.searchKey = this._route.snapshot.params['searchKey']; 
      this.inputParams.searchVal = this._route.snapshot.params['searchVal']; 
    }

    public showReservationModal(): void {
        this.reservationModal.show();
    }

    public hideReservationModal(): void {
        this.reservationModal.hide();
    }

    onShowFieldChange($event) {
        this.showField.sort((a, b) => (a-b));
        console.log(this.showField);
    }

    // function to handle data/entities selected/deselected in the table 
    public setSelectedEntities($event: any) {
        this.selectedEntities = $event;
    }

    public editReservation(reservation: Reservation) {
        this.myReservation.copy(reservation);

        this.showReservationModal();
    }
    
    public copyReservation(dst: Reservation, src: Reservation) {
        Object.keys(src).forEach(key => {
            dst[key] = src[key];
        });
    }

    public updateReservationFromArray(reservations: Reservation[], reservation: Reservation) {
        if (!reservations) {
            return -1;
        }

        let index = reservations.findIndex(item => (item['id'] == reservation['id']));
        if (~index) {
            this.copyReservation(reservations[index], reservation);
        }

        return index;
    }
    
    public updateReservation() {
        let url = this._mainService.URLS.update_reservation;
        let updateId = this.myReservation['id'];

        console.log (this.myReservation);

        this._httpService.sendPostJSON(url, {reservation: this.myReservation})
        .subscribe(
            data => {
                this.successMessage = "Reservation#" + this.myReservation['id'] + " is successfully updated.";
                this.errorMessage = "";
                console.log(this.successMessage);
                let updatedReservation = data.json() as Reservation;
                if (!updatedReservation)
                    return;

                this.updateReservationFromArray(this.reservations, updatedReservation);

                this.hideReservationModal();
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.addReservationErrorMessage;
                console.log(this.errorMessage);
                alert(this.errorMessage);
            });
    }

    public removeReservationFromArray(reservations: Reservation[], reservation: Reservation) {
        if (!reservations) {
            return -1;
        }

        let index = reservations.findIndex(item => (item['id'] == reservation['id']));
        if (index > -1) {
            reservations.splice(index, 1);
        }
        return index;
    }

    public deleteSoftReservation() {
        let url = this._mainService.URLS.delete_soft_reservation;
        let deleteId = this.myReservation['id'];

        console.log (this.myReservation);

        this._httpService.sendPostJSON(url, {reservation: this.myReservation})
        .subscribe(
            data => {
                this.successMessage = "Reservation#" + this.myReservation['id'] + " is deleted.";
                this.errorMessage = "";
                console.log(this.successMessage);
                let updatedReservation = data.json() as Reservation;
                if (!updatedReservation)
                    return;

                this.updateReservationFromArray(this.reservations, updatedReservation);

                this.hideReservationModal();
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                console.log(this.errorMessage);
                alert(this.errorMessage);
            });
    }

    public deleteReservation() {
        let url = this._mainService.URLS.delete_reservation;
        let deleteId = this.myReservation['id'];

        console.log (this.myReservation);

        this._httpService.sendPostJSON(url, {id: deleteId})
        .subscribe(
            data => {
                this.successMessage = "Reservation#" + deleteId + " is permanently deleted.";
                this.errorMessage = "";
                console.log(this.successMessage);

                this.removeReservationFromArray(this.reservations, this.myReservation);

                this.hideReservationModal();
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                console.log(this.errorMessage);
                alert(this.errorMessage);
            });
    }

    public onSeatsChange(evt) {
        this.autoTransactionAmount();
    }

    public autoTransactionAmount() {
        if (this.myReservation['Payment Method'] == PaymentMethod[0] && this.myReservation['Seats'] > 0) {
            this.myReservation['Transaction Amount'] = this.myReservation['Seats'] * this.inputParams['outbound_price'] + this._mainService.settings['reservation_initial_fee'];
        }
        else {
            this.myReservation['Transaction Amount'] = 0;
        }
        this.myReservation['Transaction Amount'] = this.myReservation['Transaction Amount'].toFixed(2);
    }
}
