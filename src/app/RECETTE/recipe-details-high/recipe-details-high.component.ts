import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-high',
  templateUrl: './recipe-details-high.component.html',
  styleUrls: ['../recipe-details-came.component.css']
})
export class RecipeDetailsHighComponent implements OnInit {

  constructor() { }

  @Input()
  recipeDetails = null;

  ngOnInit(): void {
  }

}
