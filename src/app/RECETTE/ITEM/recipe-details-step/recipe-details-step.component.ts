import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-step',
  templateUrl: './recipe-details-step.component.html',
  styleUrls: ['./recipe-details-step.component.css']
})
export class RecipeDetailsStepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  recipe;

}
