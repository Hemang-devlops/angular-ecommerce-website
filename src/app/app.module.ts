import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { SellerComponent } from '../components/seller/seller.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerhomeComponent } from '../components/seller/sellerhome/sellerhome.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerComponent,
    SellerhomeComponent,
    PagenotfoundComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
