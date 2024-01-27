import { Component } from '@angular/core';
import { Education } from './education.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationData: Education[] = [
    new Education('Backend Developer', 'at Creative Agency', 'May, 2015 - Present', 'Leverage agile frameworks...'),
    new Education('Graphic Designer', 'at Design Studio', 'June, 2013 - May, 2015', 'Override the digital divide...'),
    new Education('Junior Web Developer', 'at Indie Studio', 'Jan, 2011 - May, 2013', 'User generated content in real-time...'),
  ];
}
