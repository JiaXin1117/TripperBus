import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth_service/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})

export class AdminHeaderComponent implements OnInit {

  public username = 'Administrator';

  constructor(
    public _authService: AuthService,
  ) { }

  ngOnInit() {
    this.username = this._authService.getCurrentUser().full_name;
  }

}
