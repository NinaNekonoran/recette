import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-details',
  templateUrl: './recipe-details-details.component.html',
  styleUrls: ['./recipe-details-details.component.css']
})
export class RecipeDetailsDetailsComponent implements OnInit {

  constructor() { }

  @Input()
  recipeDetails;

  ngOnInit(): void {
  }
}
