import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberPipe } from './pipes/only-number.pipe';
import { PowerPipe } from './pipes/power-calculation.pipe';
import { SectionComponent } from './components/section/section.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { InputRefDirective } from './components/custom-input/input-ref.directive';
import { ErrorValidatorComponent } from './components/error-validator/error-validator.component';

const modules = [
  OnlyNumberPipe,
  PowerPipe,
  SectionComponent,
  CustomInputComponent,
  InputRefDirective,
  ErrorValidatorComponent
];

@NgModule({
  declarations: modules,
  imports: [CommonModule],
  exports: modules
})
export class SharedModule {}
