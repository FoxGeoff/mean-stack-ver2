import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../ui/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class CoreModule { }
