import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-medium',
  templateUrl: './recipe-details-medium.component.html',
  styleUrls: ['../recipe-details-came.component.css']
})
export class RecipeDetailsMediumComponent implements OnInit {

  constructor() { }

  @Input()
  recipeDetails = null;

  ngOnInit(): void {
  }
}
