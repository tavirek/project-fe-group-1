import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {OfertPageComponent} from "./pages/ofert-page/ofert-page.component";
import {ErrorComponent} from "./components/error/error.component";


const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "offer", component: OfertPageComponent},
  {path: "", component: HomePageComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
