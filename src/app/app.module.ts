import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appHighlight, DemoDirective, Directive1Component, inputHighlight } from './directive1/directive1.component';
import { Directive2Component } from './directive2/directive2.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Directive1Component,
    Directive2Component,
    HomeComponent,
    DemoDirective,
    appHighlight,
    inputHighlight
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
