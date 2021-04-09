import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-details-details',
  templateUrl: './recipe-details-m-l.component.html',
  styleUrls: ['./recipe-details-m-l.component.css']
})
export class RecipeDetailsMLComponent implements OnInit {

  constructor() { }

  @Input()
  recipe;

  ngOnInit(): void {
  }
}
