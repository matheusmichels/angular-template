import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberPipe } from './pipes/only-number.pipe';
import { PowerPipe } from './pipes/power-calculation.pipe';
import { SectionComponent } from './components/section/section.component';



@NgModule({
  declarations: [
    OnlyNumberPipe,
    PowerPipe,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OnlyNumberPipe,
    PowerPipe,
    SectionComponent
  ]
})
export class SharedModule { }
