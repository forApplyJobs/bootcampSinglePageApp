import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-projects.component.html',
  styleUrl: './social-projects.component.css'
})
export class SocialProjectsComponent {

sProjects = [
  { name: 'Wings For Life',role:"Staff",imgpath:"https://seeklogo.com/images/W/wings-for-life-logo-CDA5486708-seeklogo.com.png"},
  { name: 'IEEE',role:"Üye", imgpath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png"},
  { name: 'Kızılay',role:"Gönüllü", imgpath: "https://seeklogo.com/images/K/kizilay-logo-8396A6F867-seeklogo.com.png" },

];
}
 