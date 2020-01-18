import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View403Component } from './view403/view403.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    View403Component,
    FooterComponent,
    HeaderComponent,
    AsideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    View403Component,
    FooterComponent,
    HeaderComponent,
    AsideMenuComponent
  ]
})
export class LayoutModule { }
