import {Component, Input, OnInit} from '@angular/core';
import {difficultImage} from '../../../recipes';

@Component({
  selector: 'app-recipe-details-details-small',
  templateUrl: './recipe-details-s.component.html',
  styleUrls: ['./recipe-details-s.component.css']
})
export class RecipeDetailsSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  recipeDetails;

  difficultImage = difficultImage;
}
