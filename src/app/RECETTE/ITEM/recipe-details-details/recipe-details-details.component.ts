import {Component, Input, OnInit} from '@angular/core';
import {difficult_image} from '../../../recipes';

@Component({
  selector: 'app-recipe-details-details',
  templateUrl: './recipe-details-details.component.html',
  styleUrls: ['./recipe-details-details.component.css']
})
export class RecipeDetailsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  recipeDetails;

  difficult_image = difficult_image;
}
