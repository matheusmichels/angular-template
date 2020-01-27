import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningEnglishComponent } from './learning-english.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LearningEnglishComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningEnglishRoutingModule { }
