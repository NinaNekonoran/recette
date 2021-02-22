import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-fiche-came',
  templateUrl: './recipe-fiche-came.component.html',
  styleUrls: ['./recipe-fiche-came.component.css']
})
export class RecipeFicheCameComponent implements OnInit {

  @Input()
  recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
