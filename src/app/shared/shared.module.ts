import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from './pipes/discount.pipe';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LogoComponent } from './components/logo/logo.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    DiscountPipe,
    NavComponent,
    FooterComponent,
    CarouselComponent,
    LogoComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DiscountPipe,
    NavComponent,
    FooterComponent,
    CarouselComponent,
    LogoComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
