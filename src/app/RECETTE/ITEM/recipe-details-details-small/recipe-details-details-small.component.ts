import {Component, Input, OnInit} from '@angular/core';
import {difficultImage} from '../../../recipes';

@Component({
  selector: 'app-recipe-details-details-small',
  templateUrl: './recipe-details-details-small.component.html',
  styleUrls: ['./recipe-details-details-small.component.css']
})
export class RecipeDetailsDetailsSmallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  recipeDetails;

  difficultImage = difficultImage;
}
