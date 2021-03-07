import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCameComponent } from './HEADER/header-came/header-came.component';

import {CommonModule} from '@angular/common';

import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {TabMenuModule} from 'primeng/tabmenu';
import {DataViewModule} from "primeng/dataview";
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from "primeng/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RecipesCameComponent } from './MENU/recipes-came/recipes-came.component';
import {AppRoutingModule} from "./app-routing.module";
import {RecipeDetailsCameComponent} from "./RECETTE/ITEM/recipe-details-came/recipe-details-came.component";
import { FooterCameComponent } from './FOOTER/footer-came/footer-came.component';
import { RecipeFicheCameComponent } from './MENU/recipe-fiche-came/recipe-fiche-came.component';
import { HighlightPipe } from './highlight.pipe';
import { RecipeDetailsHighComponent } from './RECETTE/BASE/recipe-details-high/recipe-details-high.component';
import { RecipeDetailsMediumComponent } from './RECETTE/BASE/recipe-details-medium/recipe-details-medium.component';
import { RecipeDetailsSmallComponent } from './RECETTE/BASE/recipe-details-small/recipe-details-small.component';
import { RecipeDetailsIngredientComponent } from './RECETTE/ITEM/recipe-details-ingredient/recipe-details-ingredient.component';
import {AccordionModule} from "primeng/accordion";
import {ToastModule} from "primeng/toast";
import { RecipeDetailsDetailsComponent } from './RECETTE/ITEM/recipe-details-details/recipe-details-details.component';
import {RecipeDetailsDetailsSmallComponent} from "./RECETTE/ITEM/recipe-details-details-small/recipe-details-details-small.component";
import { PluginLikeFacebookComponent } from './PLUGIN/plugin-like-facebook/plugin-like-facebook.component';
import { BadgeCameComponent } from './badge-came/badge-came.component';
import { RecipeDetailsStepComponent } from './RECETTE/ITEM/recipe-details-step/recipe-details-step.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCameComponent,
    RecipesCameComponent,
    RecipeDetailsCameComponent,
    FooterCameComponent,
    RecipeFicheCameComponent,
    HighlightPipe,
    RecipeDetailsHighComponent,
    RecipeDetailsMediumComponent,
    RecipeDetailsSmallComponent,
    RecipeDetailsIngredientComponent,
    RecipeDetailsDetailsComponent,
    RecipeDetailsDetailsSmallComponent,
    PluginLikeFacebookComponent,
    BadgeCameComponent,
    RecipeDetailsStepComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TabMenuModule,
    CardModule,
    AppRoutingModule,
    DataViewModule,
    DividerModule,
    ButtonModule,
    FieldsetModule,
    BrowserAnimationsModule,
    AccordionModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
