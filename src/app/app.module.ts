import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './component/header/header.component';
import { QuantityTypeComponent } from './component/quantity-type/quantity-type.component';
import { MatCardModule } from '@angular/material/card';
import { QuantityConversionComponent } from './component/quantity-conversion/quantity-conversion.component';
import { HttpService } from './services/httpService/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    QuantityTypeComponent,
    QuantityConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
