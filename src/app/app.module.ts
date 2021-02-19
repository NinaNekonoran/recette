import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCameComponent } from './header-came/header-came.component';
import {CardModule} from 'primeng/card';

import {CommonModule} from '@angular/common';
import {TabMenuModule} from 'primeng/tabmenu';
import { RecipesCameComponent } from './recipes-came/recipes-came.component';
import {AppRoutingModule} from "./app-routing.module";
import {RecipeDetailsCameComponent} from "./recipe-details-came/recipe-details-came.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderCameComponent,
    RecipesCameComponent,
    RecipeDetailsCameComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TabMenuModule,
    CardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
