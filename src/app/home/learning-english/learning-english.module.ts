import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { PanelComponent } from './panel/panel.component';
import { LearningEnglishComponent } from './learning-english.component';
import { LearningEnglishRoutingModule } from './learning-english-routing.module';



@NgModule({
  declarations: [
    PanelComponent,
    AttemptsComponent,
    LearningEnglishComponent,
    ProgressBarComponent
  ],
  imports: [
    LearningEnglishRoutingModule,
    CommonModule
  ]
})
export class LearningEnglishModule { }
