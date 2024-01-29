import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../search-pipe.pipe";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [CommonModule, FormsModule, SearchPipe]
})
export class ProjectsComponent {
userInput: any;
skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'SASS', percentage: 80 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'React', percentage: 75 },
  { name: 'Node', percentage: 70 },
  { name: 'Express', percentage: 65 },
  { name: 'MongoDB', percentage: 60 }
];

}
