import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AdminComponent } from '../admin';
import { AdminMainComponent } from '../admin/admin-main/admin-main.component';
import { AdminSchedulesComponent } from '../admin/admin-schedules/admin-schedules.component';
import { AdminStopsComponent } from '../admin/admin-stops/admin-stops.component';
import { AdminRatesComponent } from '../admin/admin-rates/admin-rates.component';
import { AdminAreasComponent } from '../admin/admin-areas/admin-areas.component';
import { AdminUsersComponent } from '../admin/admin-users/admin-users.component';
import { AdminCustomersComponent } from '../admin/admin-customers/admin-customers.component';
import { AdminPagesComponent } from '../admin/admin-pages/admin-pages.component';
import { AdminSettingsComponent } from '../admin/admin-settings/admin-settings.component';
import { AdminReportsComponent } from '../admin/admin-reports/admin-reports.component';
import { AdminCouponsComponent } from '../admin/admin-coupons/admin-coupons.component';
import { AdminCouponsCampaignsComponent } from '../admin/admin-coupons-campaigns/admin-coupons-campaigns.component';
import { AdminCouponsCompaniesComponent } from '../admin/admin-coupons-companies/admin-coupons-companies.component';
import { AdminCouponsTypesComponent } from '../admin/admin-coupons-types/admin-coupons-types.component';
import { LoginComponent } from '../main/login/login.component';
import { MainHeaderComponent } from '../main/main-header/main-header.component';
import { MainIndexComponent } from '../main/main-index.component';
import { MainFooterComponent } from '../main/main-footer/main-footer.component';
import { LogoutComponent } from '../main/logout/logout.component';

import { AdminSchedulesEditexistingComponent } from '../admin/admin-schedules/admin-schedules-editexisting/admin-schedules-editexisting.component';
import { AdminSchedulesGennewComponent } from '../admin/admin-schedules/admin-schedules-gennew/admin-schedules-gennew.component';
import { AdminSchedulesGenspecialComponent } from '../admin/admin-schedules/admin-schedules-genspecial/admin-schedules-genspecial.component';

import { AdminMainRegularModeComponent } from '../admin/admin-main/admin-main-regular-mode/admin-main-regular-mode.component';
import { AdminMainBusEditModeComponent } from '../admin/admin-main/admin-main-bus-edit-mode/admin-main-bus-edit-mode.component';
import { AdminMainMovePeopleModeComponent } from '../admin/admin-main/admin-main-move-people-mode/admin-main-move-people-mode.component';
import { AdminMainReservationComponent } from '../admin/admin-main/admin-main-reservation/admin-main-reservation.component';
import { AdminMainSearchComponent } from '../admin/admin-main/admin-main-search/admin-main-search.component';

//import service.
import {AuthService} from "../services/auth_service/auth.service";

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthService],
        children: [
            { path: 'main', component: AdminMainComponent },
            { path: 'main/regular_mode/:outbound_date/:leaving_from/:return_date', component: AdminMainRegularModeComponent},
            { path: 'main/bus_edit_mode/:outbound_date/:leaving_from/:return_date', component: AdminMainBusEditModeComponent},
            { path: 'main/move_people_mode/:outbound_date/:leaving_from/:return_date', component: AdminMainMovePeopleModeComponent},
            { path: 'main/reservation_mode/:outbound_date/:leaving_from/:return_date/:outbound_bus_groupId/:outbound_timeId/:outbound_price/:returning_bus_groupId/:returning_timeId/:returning_price', component: AdminMainReservationComponent},
            { path: 'main/search_mode/:searchKey/:searchVal/:caseSensitive', component: AdminMainSearchComponent},
            
            { path: 'schedules',      component: AdminSchedulesComponent },
            { path: 'schedules_edit/:sel_date/:button_type/:area_id/:schedule_type', component: AdminSchedulesEditexistingComponent },
            /*{ path: 'schedules_gennew/:sel_date',      component: AdminSchedulesGennewComponent },
            { path: 'schedules_genspecial/:sel_date',      component: AdminSchedulesGenspecialComponent },*/
            
/*            { path: 'stops',      component: AdminStopsComponent },
            { path: 'rates',      component: AdminRatesComponent },
            { path: 'areas',      component: AdminAreasComponent },*/
            { path: 'users',      component: AdminUsersComponent },
            { path: 'customers',  component: AdminCustomersComponent },
/*            { path: 'pages',      component: AdminPagesComponent },*/
            { path: 'settings',   component: AdminSettingsComponent },
            { path: 'reports',    component: AdminReportsComponent },
/*            { path: 'coupons',    component: AdminCouponsComponent },
            { path: 'coupons-campaigns',      component: AdminCouponsCampaignsComponent },
            { path: 'coupons-companies',      component: AdminCouponsCompaniesComponent },
            { path: 'coupons-types',      component: AdminCouponsTypesComponent },*/
            { path: '**', redirectTo: 'login' }
        ]
    },
    {
        path: '',
        component: MainIndexComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent },
            { path: '**', redirectTo: 'login' }
        ]
    },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
