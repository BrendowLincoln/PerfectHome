import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorouselComponent } from './corousel/corousel.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    CorouselComponent
  ],  
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CorouselComponent,
    MaterialModule
  ]
})
export class SharedModule { }
