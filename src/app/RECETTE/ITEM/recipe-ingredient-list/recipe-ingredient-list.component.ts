import {Component, Input, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-recipe-ingredient-list',
  templateUrl: './recipe-ingredient-list.component.html',
  styleUrls: ['./recipe-ingredient-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class RecipeIngredientListComponent implements OnInit {


  ngOnInit(): void {
  }

  @Input()
  ingredients;

  constructor() {}

  display: boolean = false;

  showDialog() {
    this.display = true;
  }


}
