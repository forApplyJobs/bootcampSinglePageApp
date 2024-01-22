import { Component } from '@angular/core';
import { NavbarToggleService } from '../navbar-toggle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent{
  isNavbarCollapsed: boolean = true;

  constructor(private navbarToggleService: NavbarToggleService) {}

  ngOnInit() {
    this.navbarToggleService.isNavbarCollapsed$.subscribe((collapsed) => {
      this.isNavbarCollapsed = collapsed;
      console.log(this.isNavbarCollapsed)
    });
  }
}