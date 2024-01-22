import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarToggleService {
  private isNavbarCollapsedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public isNavbarCollapsed$: Observable<boolean> = this.isNavbarCollapsedSubject.asObservable();

  toggleNavbar() {
    const currentStatus = this.isNavbarCollapsedSubject.value;
    this.isNavbarCollapsedSubject.next(!currentStatus);
    console.log("çalıştı")
  }
}
