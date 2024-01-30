import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../search-pipe.pipe";
import { DataService } from '../data.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [CommonModule, FormsModule, SearchPipe]
})
export class ProjectsComponent {
userInput: any;
projects: any[] = [];

constructor(private dataService: DataService) {}

ngOnInit(): void {
  this.loadProjectsData();
}

loadProjectsData() {
  this.dataService.getProjectData().subscribe(
    (response) => {
      // API'den gelen veriyi projects dizisine atayın
      this.projects = response.message;
    },
    (error) => {
      console.error('Projects data load error:', error);
    }
  );
}

}
