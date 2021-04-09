import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.css']
})
export class RecipeStepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  recipe;

}
