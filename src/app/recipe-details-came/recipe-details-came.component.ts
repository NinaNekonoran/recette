import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { recipes } from '../recipes';

@Component({
  selector: 'app-recipe-details-came',
  templateUrl: './recipe-details-came.component.html',
  styleUrls: ['./recipe-details-came.component.css']
})
export class RecipeDetailsCameComponent implements OnInit {

  recipeDetails = null;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDetails(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private getDetails(id: string): void {
    this.recipeDetails = recipes.find( aux => aux.id.toString() == id);
  }

  public Search: string = 'lavez';

}
