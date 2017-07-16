import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth_service/auth.service';

import { getDateString } from '../../common'

declare var jQuery: any;

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.css']
})

export class AdminSidebarComponent implements OnInit {

    public username = 'Administrator';
    public searchKey = "First Name";
    public searchVal = "";
    public searchDate = new Date();
    public caseSensitive = false;

    public defaultData = [
        {
            text: 'Coupons',
            icon: 'fa fa-tags',
            href: 'javascript:void(0)',
            enableLinks: true,
            nodes: [
                {
                    text: 'Coupons',
                    href: '/#/admin/coupons',
                    enableLinks: true,
                    icon: 'fa fa-tags',
                },
                {
                    text: 'Campaigns',
                    href: '/#/admin/coupons-campaigns',
                    enableLinks: true,
                    icon: 'fa fa-tags',
                },
                {
                    text: 'Companies',
                    href: '/#/admin/coupons-companies',
                    enableLinks: true,
                    icon: 'fa fa-tags',
                },
                {
                    text: 'Types',
                    href: '/#/admin/coupons-types',
                    enableLinks: true,
                    icon: 'fa fa-tags',
                }
            ]
        }
    ];


    constructor(
        public _router: Router,
        public _authService: AuthService,
    ) { }

    ngOnInit() {
        this.username = this._authService.getCurrentUser().full_name;
        this.searchDate.setHours(0, 0, 0);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
    }

    search() {
        let searchVal = this.searchVal;

        if (this.searchKey == 'Date Made') {
            searchVal = getDateString(this.searchDate);
        }

        if (searchVal == '')
            return;
        
        let link = ['/admin/main/search_mode', this.searchKey, searchVal, this.caseSensitive ? 1 : 0];
        this._router.navigate(link);
    }

    isShowItem(path) {
        return this._authService.getPermission(path);
    }

    toggleSearchTreeview() {
        if (jQuery("#admin-sidebar-search-details").css("display") == 'none') {
            jQuery("#admin-sidebar-search-details").slideDown(400, function() {
                jQuery(this).css("overflow", ""); });
            jQuery(".fa-angle-left").css('display', 'none');
            jQuery(".fa-angle-down").css('display', 'inherit');

            // Update Sidebar Height.
            let plus_height = jQuery("#admin-sidebar-search-details-ul").height();
            jQuery("#admin_sidebar").height(jQuery("#admin_sidebar").height() + plus_height);
        }
        else {
            jQuery("#admin-sidebar-search-details").slideUp();
            jQuery(".fa-angle-left").css('display', 'inherit');
            jQuery(".fa-angle-down").css('display', 'none');

            // Update Sidebar Height.
            jQuery("#admin_sidebar").height(jQuery("#admin_sidebar").height() - jQuery("#admin-sidebar-search-details-ul").height());
        }
    }
}
