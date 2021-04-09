import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-high',
  templateUrl: './recipe-l.component.html',
  styleUrls: ['../../recipe.css']
})
export class RecipeLComponent implements OnInit {

  constructor() { }

  @Input()
  recipeDetails = null;

  @Input()
  ingredientsImg = [];

  ngOnInit(): void {
  }

}
