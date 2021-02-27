import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-small',
  templateUrl: './recipe-details-small.component.html',
  styleUrls: ['../recipe-details-came.component.css']
})
export class RecipeDetailsSmallComponent implements OnInit {

  constructor() { }

  @Input()
  recipeDetails = null;

  @Input()
  ingredientsImg = [];

  ngOnInit(): void {
  }

}
