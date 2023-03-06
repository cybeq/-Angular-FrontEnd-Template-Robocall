import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloComponent} from "./pages/hello/hello.component";
import {SettingsComponent} from "./system/settings/settings.component";
import {DataComponent} from "./system/data/data.component";
import {ProfileComponent} from "./system/profile/profile.component";
import {MessagesComponent} from "./system/messages/messages.component";
import {IsLoggedInService} from "./services/auth/is-logged-in.service";
import {LoginComponent} from "./system/auth/login/login.component";
import {OrderComponent} from "./system/auth/order/order.component";
import {IsGuestService} from "./services/auth/is-guest.service";

const authRoutes = [
  {path:'login', component:LoginComponent },
  {path:'order', component: OrderComponent}
]
const systemRoutes = [
  {path:'settings', component:SettingsComponent},
  {path:'data', component: DataComponent},
  {path:'profile', component: ProfileComponent},
  {path:'messages', component: MessagesComponent}
]
const routes: Routes = [
  {path:'', component:HelloComponent},
  {path:'system', children:systemRoutes, canActivate:[IsLoggedInService]},
  {path:'auth', children:authRoutes, canActivate:[IsGuestService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
