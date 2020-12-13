import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {OfertPageComponent} from "./ofert-page/ofert-page.component";


const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "offer", component: OfertPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
