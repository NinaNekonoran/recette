import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeDetailsCameComponent} from "./RECETTE/ITEM/recipe-details-came/recipe-details-came.component";
import {RecipesCameComponent} from "./MENU/recipes-came/recipes-came.component";

const appRouter: Routes = [
    { path: '',  component : RecipesCameComponent},
    { path: 'recipe/:id/:title', component : RecipeDetailsCameComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRouter, {
            initialNavigation: 'enabled',
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
