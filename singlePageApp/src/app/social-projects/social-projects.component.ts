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
  { name: 'Wings For Life',imgpath:"https://w7.pngwing.com/pngs/264/506/png-transparent-2017-wings-for-life-world-run-wings-for-life-world-run-2018-red-bull-red-bull-blue-text-public-relations.png"},
  { name: 'IEEE', imgpath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png"},
  { name: 'Kızılay', imgpath: "https://logowik.com/content/uploads/images/turk-kizilay-yeni6291.jpg" },

];
}
 