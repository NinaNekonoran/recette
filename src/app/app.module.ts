import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCameComponent } from './HEADER/header-came/header-came.component';
import {CardModule} from 'primeng/card';

import {CommonModule} from '@angular/common';
import {TabMenuModule} from 'primeng/tabmenu';
import { RecipesCameComponent } from './MENU/recipes-came/recipes-came.component';
import {AppRoutingModule} from "./app-routing.module";
import {RecipeDetailsCameComponent} from "./RECETTE/recipe-details-came/recipe-details-came.component";
import {DataViewModule} from "primeng/dataview";
import {DividerModule} from 'primeng/divider';
import { FooterCameComponent } from './FOOTER/footer-came/footer-came.component';
import { RecipeFicheCameComponent } from './MENU/recipe-fiche-came/recipe-fiche-came.component';
import { HighlightPipe } from './highlight.pipe';
import {ButtonModule} from "primeng/button";

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
    DividerModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
