import { NgMaterialModule } from './../../sheard/ng-material.module';
// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    NgMaterialModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent
  ]
})
export class ThemeModule { }
