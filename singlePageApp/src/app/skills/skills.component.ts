
import { Component } from '@angular/core';

import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SearchPipe,  } from '../search-pipe.pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchPipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '0%'
      })),
      state('closed', style({
        width: '{{width}}',
        
      }),{params: {width: '5%'}}),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class SkillsComponent {
valueChange($event: any) {
  console.log(event)
}
  skills = [
    { name: 'HTML',icon:"fa-html5", percentage: 90 },
    { name: 'CSS',icon:"fa-html5", percentage: 85 },
    { name: 'SASS',icon:"fa-html5", percentage: 80 },
    { name: 'JavaScript',icon:"fa-html5", percentage: 80 },
    { name: 'React',icon:"fa-html5", percentage: 75 },
    { name: 'Node',icon:"fa-html5", percentage: 70 },
    { name: 'Express',icon:"fa-html5", percentage: 65 },
    { name: 'MongoDB', icon:"fa-html5",percentage: 60 },{ name: 'HTML',icon:"fa-html5", percentage: 90 },
    { name: 'CSS',icon:"fa-html5", percentage: 85 },
    { name: 'SASS',icon:"fa-html5", percentage: 80 },
    { name: 'JavaScript',icon:"fa-html5", percentage: 80 },
    { name: 'React',icon:"fa-html5", percentage: 75 },
    { name: 'Node',icon:"fa-html5", percentage: 70 },
    { name: 'Express',icon:"fa-html5", percentage: 65 },
    { name: 'MongoDB', icon:"fa-html5",percentage: 60 },
  ];
  isOpen = true;
  var :string="100%"
textInputValue: any;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  ngAfterViewInit() {
    setTimeout( () => {
      this.isOpen = false;
    }, 200);
  }
  userInput:string=''
}
