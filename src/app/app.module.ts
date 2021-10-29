import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardComponent } from './job-card/job-card.component';
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { OtherToolsBarComponent } from './other-tools-bar/other-tools-bar.component';
import { EducationBarComponent } from './education-bar/education-bar.component';
import { AwardsComponent } from './awards/awards.component';

@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    SkillBarComponent,
    OtherToolsBarComponent,
    EducationBarComponent,
    AwardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
