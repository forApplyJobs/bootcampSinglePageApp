import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SocialProjectsComponent } from './social-projects/social-projects.component';
import { AwardsCertificatesComponent } from './awards-certificates/awards-certificates.component';

export const routes: Routes = [
    { path: 'info', component: InfoComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'experiences', component: ExperiencesComponent },
    { path: 'social-projects', component: SocialProjectsComponent },
    { path: 'awards-certificates', component: AwardsCertificatesComponent },
    // Diğer route'lar buraya eklenir
  ];
