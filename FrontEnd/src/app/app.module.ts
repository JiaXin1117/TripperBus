import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }   from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { AdminSchedulesComponent } from './admin/admin-schedules/admin-schedules.component';
import { AdminStopsComponent } from './admin/admin-stops/admin-stops.component';
import { AdminRatesComponent } from './admin/admin-rates/admin-rates.component';
import { AdminAreasComponent } from './admin/admin-areas/admin-areas.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminCustomersComponent } from './admin/admin-customers/admin-customers.component';
import { AdminPagesComponent } from './admin/admin-pages/admin-pages.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { AdminCouponsComponent } from './admin/admin-coupons/admin-coupons.component';
import { AdminCouponsCampaignsComponent } from './admin/admin-coupons-campaigns/admin-coupons-campaigns.component';
import { AdminCouponsCompaniesComponent } from './admin/admin-coupons-companies/admin-coupons-companies.component';
import { AdminCouponsTypesComponent } from './admin/admin-coupons-types/admin-coupons-types.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { LoginComponent } from './main/login/login.component';

// Services Imports
import {HttpService} from "./services/http_service/http.service";
import {AuthService} from "./services/auth_service/auth.service";
import {ScheduleService} from "./services/schedule_service/schedule.service";
import {MainService} from "./services/main_service/main.service";

import { MainHeaderComponent } from './main/main-header/main-header.component';
import { MainIndexComponent } from './main/main-index.component';
import { MainFooterComponent } from './main/main-footer/main-footer.component';

import { AdminSchedulesEditexistingComponent } from './admin/admin-schedules/admin-schedules-editexisting/admin-schedules-editexisting.component';
import { AdminSchedulesGennewComponent } from './admin/admin-schedules/admin-schedules-gennew/admin-schedules-gennew.component';
import { AdminSchedulesGenspecialComponent } from './admin/admin-schedules/admin-schedules-genspecial/admin-schedules-genspecial.component';
import { AdminScheduleEditBusComponent } from './admin/admin-schedules/admin-schedules-editexisting/admin-schedule-edit-bus/admin-schedule-edit-bus.component';

import { LogoutComponent } from './main/logout/logout.component';

import { AdminMainRegularModeComponent } from './admin/admin-main/admin-main-regular-mode/admin-main-regular-mode.component';
import { AdminMainBusEditModeComponent } from './admin/admin-main/admin-main-bus-edit-mode/admin-main-bus-edit-mode.component';
import { AdminMainMovePeopleModeComponent } from './admin/admin-main/admin-main-move-people-mode/admin-main-move-people-mode.component';
import { AdminMainBusComponent } from './admin/admin-main/admin-main-regular-mode/admin-main-bus/admin-main-bus.component';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        AdminComponent,
        AdminHeaderComponent,
        AdminSidebarComponent,
        AdminMainComponent,
        AdminSchedulesComponent,
        AdminStopsComponent,
        AdminRatesComponent,
        AdminAreasComponent,
        AdminUsersComponent,
        AdminCustomersComponent,
        AdminPagesComponent,
        AdminSettingsComponent,
        AdminCouponsComponent,
        AdminCouponsCampaignsComponent,
        AdminCouponsCompaniesComponent,
        AdminCouponsTypesComponent,
        AdminFooterComponent,
        LoginComponent,
        MainHeaderComponent,
        MainIndexComponent,
        MainFooterComponent,
        AdminSchedulesEditexistingComponent,
        AdminSchedulesGennewComponent,
        AdminSchedulesGenspecialComponent,
        LogoutComponent,
        AdminScheduleEditBusComponent,
        AdminMainRegularModeComponent,
        AdminMainBusEditModeComponent,
        AdminMainMovePeopleModeComponent,
        AdminMainBusComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        HttpService,
        AuthService,
        ScheduleService,
        MainService
    ],
    exports: [
        AdminHeaderComponent,
        AdminSidebarComponent,
        AdminMainComponent,
        AdminSchedulesComponent,
        AdminStopsComponent,
        AdminRatesComponent,
        AdminAreasComponent,
        AdminUsersComponent,
        AdminCustomersComponent,
        AdminPagesComponent,
        AdminSettingsComponent,
        AdminCouponsComponent,
        AdminCouponsCampaignsComponent,
        AdminCouponsCompaniesComponent,
        AdminCouponsTypesComponent,
        AdminFooterComponent,
        LoginComponent,
        MainHeaderComponent,
        MainIndexComponent,
        MainFooterComponent,
        AdminSchedulesEditexistingComponent,
        AdminSchedulesGennewComponent,
        AdminSchedulesGenspecialComponent,
        LogoutComponent,
        AdminScheduleEditBusComponent,
        AdminMainRegularModeComponent,
        AdminMainBusEditModeComponent,
        AdminMainMovePeopleModeComponent,
        AdminMainBusComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
