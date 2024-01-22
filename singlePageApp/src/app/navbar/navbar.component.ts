import { Component } from '@angular/core';
import { NavbarToggleService } from '../navbar-toggle.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private navbarToggleService: NavbarToggleService) {}
  
  toggleNavbar() {
    this.navbarToggleService.toggleNavbar();
  }
  
}