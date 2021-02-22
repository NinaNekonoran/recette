import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeDetailsCameComponent} from "./RECETTE/recipe-details-came/recipe-details-came.component";
import {RecipesCameComponent} from "./MENU/recipes-came/recipes-came.component";

const appRouter: Routes = [
    { path: '',  component : RecipesCameComponent},
    { path: 'recipe/:id/:title', component : RecipeDetailsCameComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRouter)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
