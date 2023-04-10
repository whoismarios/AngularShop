import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { UsernameInputComponentComponent } from './routing/home/username-input-component/username-input-component.component';
import { HomeComponent } from './routing/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './routing/contact/contact.component';
import { CartComponent } from './routing/cart/cart.component';
import { ProductsComponent } from './routing/products/products.component';
import { ProductsServiceService } from './backend/products-service.service';

const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
  
    { path: "home", component: HomeComponent },
  
    { path: "products", component: ProductsComponent },
  
    { path: "contact", component: ContactComponent },

    { path: "cart", component:CartComponent}
  
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    FooterComponent,
    ProductsComponentComponent,
    UsernameInputComponentComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ProductsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
