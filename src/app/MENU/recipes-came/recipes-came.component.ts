import { Component, OnInit } from '@angular/core';
import { recipes } from '../../recipes';

@Component({
  selector: 'app-recipes-came',
  templateUrl: './recipes-came.component.html',
  styleUrls: ['./recipes-came.component.css']
})
export class RecipesCameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recipes = recipes;
}
