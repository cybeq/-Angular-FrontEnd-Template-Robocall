import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './pages/hello/hello.component';
import { SettingsComponent } from './system/settings/settings.component';
import { DataComponent } from './system/data/data.component';
import { ProfileComponent } from './system/profile/profile.component';
import { MessagesComponent } from './system/messages/messages.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './system/auth/login/login.component';
import { OrderComponent } from './system/auth/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SettingsComponent,
    DataComponent,
    ProfileComponent,
    MessagesComponent,
    LoginComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
