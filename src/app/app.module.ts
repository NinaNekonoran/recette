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
import {DataViewModule} from "primeng/dataview";
import {DividerModule} from 'primeng/divider';
import { FooterCameComponent } from './footer-came/footer-came.component';
import { RecipeFicheCameComponent } from './recipe-fiche-came/recipe-fiche-came.component';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCameComponent,
    RecipesCameComponent,
    RecipeDetailsCameComponent,
    FooterCameComponent,
    RecipeFicheCameComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TabMenuModule,
    CardModule,
    AppRoutingModule,
    DataViewModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
