import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorouselComponent } from './components/corousel/corousel.component';
import { MaterialModule } from './material.module';
import { FontawesomeModule } from './fontawesome.module';



@NgModule({
  declarations: [
    CorouselComponent
  ],  
  imports: [
    CommonModule,
    MaterialModule,
    FontawesomeModule
  ],
  exports: [
    CorouselComponent,
    MaterialModule,
    FontawesomeModule
  ]
})
export class SharedModule { 

}
