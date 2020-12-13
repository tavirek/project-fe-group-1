import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageContentComponent } from './page-content/page-content.component';
import { NavBarMenuItemComponent } from './nav-bar-menu-item/nav-bar-menu-item.component';
import { NavBarLogoComponent } from './nav-bar-logo/nav-bar-logo.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { OfertPageComponent } from './ofert-page/ofert-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageContentComponent,
    NavBarMenuItemComponent,
    NavBarLogoComponent,
    HomePageComponent,
    OfertPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
