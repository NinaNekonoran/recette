import {Component, HostListener, Input, OnInit, Output} from '@angular/core';
import {difficult_image} from '../../recipes';
@Component({
  selector: 'app-recipe-fiche-came',
  templateUrl: './recipe-fiche-came.component.html',
  styleUrls: ['./recipe-fiche-came.component.css']
})
export class RecipeFicheCameComponent implements OnInit {

  @Input()
  recipe;
  @Input()
  full : boolean;

  difficult_image = difficult_image;

  ngOnInit(): void {
    console.log("full : ",this.full);
  }
}
