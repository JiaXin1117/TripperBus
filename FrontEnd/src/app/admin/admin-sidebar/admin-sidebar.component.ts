import { Component, OnInit, HostListener } from '@angular/core';
import { Router }   from '@angular/router';

declare var jQuery:any;

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

    constructor(
        public _router: Router,
    ) { }

    ngOnInit() {
        this.setTreeView();
    }
    
    @HostListener('window:resize', ['$event'])
    onResize(event) { 
    }

    public searchKey = "First Name";
    public searchVal = "";
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
    
    public setTreeView() {
        let me = this;
        jQuery("#treeview-coupons").click(function(){
            if (jQuery("#admin-sidebar-coupons-details").css("display") == 'none'){ 
                jQuery("#admin-sidebar-coupons-details").slideDown();
                jQuery(".fa-angle-left").css('display', 'none');
                jQuery(".fa-angle-down").css('display', 'inherit');
                
                // Update Sidebar Height.
                let plus_height = jQuery("#admin-sidebar-coupons-details-ul").height(); 
                jQuery("#admin_sidebar").height(jQuery("#admin_sidebar").height() + plus_height);
            }
            else {
                jQuery("#admin-sidebar-coupons-details").slideUp();
                jQuery(".fa-angle-left").css('display', 'inherit');
                jQuery(".fa-angle-down").css('display', 'none');
                
                // Update Sidebar Height.
                jQuery("#admin_sidebar").height(jQuery("#admin_sidebar").height() - jQuery("#admin-sidebar-coupons-details-ul").height());
            }
        });
        
        jQuery("#treeview-search").click(function(){
            if (jQuery("#admin-sidebar-search-details").css("display") == 'none'){ 
                jQuery("#admin-sidebar-search-details").slideDown();
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
        });
    }
    
    public search() {
        if (this.searchVal == '')
            return;
            
        let link = ['/admin/main/search_mode', this.searchKey, this.searchVal, this.caseSensitive ? 1 : 0];
        this._router.navigate(link);
    }
}
