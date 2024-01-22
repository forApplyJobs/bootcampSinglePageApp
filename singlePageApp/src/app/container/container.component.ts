import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { InfoComponent } from "../info/info.component";
import { FooterComponent } from "../footer/footer.component";
import { EducationComponent } from "../education/education.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperiencesComponent } from "../experiences/experiences.component";
import { SocialProjectsComponent } from "../social-projects/social-projects.component";
import { AwardsCertificatesComponent } from "../awards-certificates/awards-certificates.component";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'info', component: InfoComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'experiences', component: ExperiencesComponent },
    { path: 'social-projects', component: SocialProjectsComponent },
    { path: 'awards-certificates', component: AwardsCertificatesComponent },
    // Diğer route'lar buraya eklenir
  ];
@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [NavbarComponent, InfoComponent, FooterComponent, EducationComponent, SkillsComponent, ProjectsComponent, ExperiencesComponent, SocialProjectsComponent, AwardsCertificatesComponent,RouterModule]
})
export class ContainerComponent {
    appRoutes : Routes =[{ path: 'info', component: InfoComponent },

    // Login Page
    { path: 'education', component: EducationComponent },]

}
