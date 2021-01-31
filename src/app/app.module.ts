import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {PageContentComponent} from './components/page-content/page-content.component';
import {NavBarMenuItemComponent} from './components/nav-bar-menu-item/nav-bar-menu-item.component';
import {NavBarLogoComponent} from './components/nav-bar-logo/nav-bar-logo.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {OfertPageComponent} from './pages/ofert-page/ofert-page.component';
import { ErrorComponent } from './components/error/error.component';
import { OfferItemComponent } from './components/offer-item/offer-item.component';
import {HttpClientModule} from "@angular/common/http";
import { OfferDetailsContentComponent } from './components/offer-details-content/offer-details-content.component';
import { OfferDetailsContentBoxComponent } from './components/offer-details-content-box/offer-details-content-box.component';
import { OfferItemFooterComponent } from './components/offer-item-footer/offer-item-footer.component';
import { OfferSubcategoryBoxComponent } from './components/offer-subcategory-box/offer-subcategory-box.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageContentComponent,
    NavBarMenuItemComponent,
    NavBarLogoComponent,
    HomePageComponent,
    OfertPageComponent,
    ErrorComponent,
    OfferItemComponent,
    OfferDetailsContentComponent,
    OfferDetailsContentBoxComponent,
    OfferItemFooterComponent,
    OfferSubcategoryBoxComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
