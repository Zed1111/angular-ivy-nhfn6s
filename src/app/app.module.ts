import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { NaviModule } from './navi/navi.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NaviModule  ],
  declarations: [ AppComponent, HelloComponent, Tab1Component, Tab2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
