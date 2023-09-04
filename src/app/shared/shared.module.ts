import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from './pipes/discount.pipe';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    DiscountPipe,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DiscountPipe
  ]
})
export class SharedModule { }
