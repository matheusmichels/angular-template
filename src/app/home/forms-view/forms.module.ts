import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsView } from './forms-view/forms-view.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    FormsView
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forRoot({
      validation: true
    }),
  ]
})
export class FormsViewModule { }
