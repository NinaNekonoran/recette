import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-ingredient',
  templateUrl: './recipe-details-ingredient.component.html',
  styleUrls: ['./recipe-details-ingredient.component.css']
})
export class RecipeDetailsIngredientComponent implements OnInit {

  constructor() { }

  @Input()
  ingredientsImg;

  @Input()
  pCol;

  ngOnInit(): void {
  }

}
