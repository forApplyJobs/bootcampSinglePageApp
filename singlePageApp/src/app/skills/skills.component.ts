
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
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'SASS', percentage: 80 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 75 },
    { name: 'Node', percentage: 70 },
    { name: 'Express', percentage: 65 },
    { name: 'MongoDB', percentage: 60 }
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
