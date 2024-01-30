import { Component } from '@angular/core';
import { Education } from './education.model';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationData: Education[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadEducationData();
  }

  loadEducationData() {
    this.dataService.getEducationData().subscribe(
      (response) => {
        // response içindeki veriyi educationData dizisine atayın
        this.educationData = response.message.map((item: { title: string; subTitle: string; dateRange: string; description: string; }) => new Education(item.title, item.subTitle, item.dateRange, item.description));
      },
      (error) => {
        console.error('Education data load error:', error);
      }
    );
  }
}
