import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-small',
  templateUrl: './recipe-s.component.html',
  styleUrls: ['../../recipe.css']
})
export class RecipeSComponent implements OnInit {

  constructor() { }

  @Input()
  recipeDetails = null;

  @Input()
  ingredientsImg = [];

  ngOnInit(): void {
  }

}
