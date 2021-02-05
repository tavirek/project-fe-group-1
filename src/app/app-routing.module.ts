import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {OfertPageComponent} from "./pages/ofert-page/ofert-page.component";
import {ErrorComponent} from "./components/error/error.component";
import {OfferDetailsContentComponent} from "./components/offer-details-content/offer-details-content.component";
import {SummarySiteComponent} from "./components/summary-site/summary-site.component";


const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "offer", component: OfertPageComponent},
  {path: "offer-details", component: OfferDetailsContentComponent},
  {path: "summary", component: SummarySiteComponent},
  {path: "", component: HomePageComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
