import {Component, Input, OnInit} from '@angular/core';
import {difficultImage} from '../../../recipes';

@Component({
  selector: 'app-recipe-details-details',
  templateUrl: './recipe-details-details.component.html',
  styleUrls: ['./recipe-details-details.component.css']
})
export class RecipeDetailsDetailsComponent implements OnInit {

  constructor() { }

  @Input()
  recipeDetails;

  difficultImage = difficultImage;

  ngOnInit(): void {
  }
}
