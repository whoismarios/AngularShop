import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { SingleProductComponentComponent } from './components/single-product-component/single-product-component.component';
import { UsernameInputComponentComponent } from './components/username-input-component/username-input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    FooterComponent,
    ProductsComponentComponent,
    SingleProductComponentComponent,
    UsernameInputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
