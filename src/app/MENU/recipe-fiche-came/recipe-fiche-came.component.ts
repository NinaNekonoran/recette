import {Component, HostListener, Input, OnInit, Output} from '@angular/core';
import {difficultImage} from '../../recipes';
@Component({
  selector: 'app-recipe-fiche-came',
  templateUrl: './recipe-fiche-came.component.html',
  styleUrls: ['./recipe-fiche-came.component.css']
})
export class RecipeFicheCameComponent implements OnInit {

  @Input()
  recipe;
  @Input()
  full: boolean;

  difficultImage = difficultImage;

  ngOnInit(): void {
  }
}
