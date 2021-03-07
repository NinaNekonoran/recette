import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { recipes } from '../../../recipes';

@Component({
  selector: 'app-recipe-details-came',
  templateUrl: './recipe-details-came.component.html',
  styleUrls: ['../../recipe-details-came.component.css']
})
export class RecipeDetailsCameComponent implements OnInit {

  recipeDetails = null;
  mobile : string;
  ingredientsImg;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDetails(this.activatedRoute.snapshot.paramMap.get('id'));
    this.isMobile();
    this.ingredientsImg = this.recipeDetails.ingredients.filter(ing => ing.img != null);
  }

  private getDetails(id: string): void {
    this.recipeDetails = recipes.find( aux => aux.id.toString() == id);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile();
  }

  private isMobile() {
    if (window.innerWidth > 1500) { // 768px portrait
      this.mobile = 'HIGH';
    }
    else if(window.innerWidth < 1100){
      this.mobile = 'SMALL';
    }
    else{
        this.mobile = 'MEDIUM';
    }
  }

}
