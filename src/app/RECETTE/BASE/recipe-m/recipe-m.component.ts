import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-medium',
  templateUrl: './recipe-m.component.html',
  styleUrls: ['../../recipe.css']
})
export class RecipeMComponent implements OnInit {

  constructor() { }

  @Input()
  recipeDetails = null;

  @Input()
  ingredientsImg = [];

  ngOnInit(): void {
  }
}
