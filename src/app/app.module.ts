import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { SingleProductComponentComponent } from './components/single-product-component/single-product-component.component';
import { UsernameInputComponentComponent } from './routing/home/username-input-component/username-input-component.component';
import { AboutMeComponent } from './routing/about-me/about-me.component';
import { HomeComponent } from './routing/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './routing/contact/contact.component';
import { CartComponent } from './routing/cart/cart.component';

const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
  
    { path: "home", component: HomeComponent },
  
    { path: "about", component: AboutMeComponent },
  
    { path: "contact", component: ContactComponent },

    { path: "cart", component:CartComponent}
  
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    FooterComponent,
    ProductsComponentComponent,
    SingleProductComponentComponent,
    UsernameInputComponentComponent,
    AboutMeComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
