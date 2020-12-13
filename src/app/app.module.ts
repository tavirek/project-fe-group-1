import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './modules/nav-bar/nav-bar.component';
import {PageContentComponent} from './modules/page-content/page-content.component';
import {NavBarMenuItemComponent} from './modules/nav-bar-menu-item/nav-bar-menu-item.component';
import {NavBarLogoComponent} from './modules/nav-bar-logo/nav-bar-logo.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {OfertPageComponent} from './pages/ofert-page/ofert-page.component';
import { ErrorComponent } from './modules/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageContentComponent,
    NavBarMenuItemComponent,
    NavBarLogoComponent,
    HomePageComponent,
    OfertPageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
