import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { InfoComponent } from "../info/info.component";

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [NavbarComponent, InfoComponent]
})
export class ContainerComponent {

}
