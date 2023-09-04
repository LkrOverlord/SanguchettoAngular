import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from './pipes/discount.pipe';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    DiscountPipe,
    NavComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DiscountPipe,
    NavComponent,
    FooterComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
