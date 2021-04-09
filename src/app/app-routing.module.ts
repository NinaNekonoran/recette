import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeBase} from './RECETTE/BASE/recipe-base/recipe-base';
import {RecipesCameComponent} from './MENU/recipes-came/recipes-came.component';

const appRouter: Routes = [
    { path: '',  component : RecipesCameComponent},
    { path: 'recipe/:id/:title', component : RecipeBase},
    { path: 'recipe/:id/recipe', component : RecipeBase},
    { path: 'recipe/:id', redirectTo : 'recipe/:id/recipe'},
    { path: 'recipe/:id/', redirectTo : 'recipe/:id/recipe'},
    { path: ':id/', redirectTo : 'recipe/:id/recipe'},
    { path: ':id', redirectTo : 'recipe/:id/recipe'}
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
