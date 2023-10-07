import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AwardsComponent } from './awards/awards.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { MrComponent } from './mr/mr.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'education', component:EducationComponent},
  {path:'skills', component:SkillsComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'awards', component:AwardsComponent},
  {path:'communityservice', component:VolunteerComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'certifications', component:CertificationsComponent},
  {path:'medical&research', component:MrComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
