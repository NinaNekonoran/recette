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
  mobile : boolean;
  difficult_image = difficult_image;

  ngOnInit(): void {
    this.isMoblie();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMoblie();
  }

  private isMoblie() {
    if (window.innerWidth < 700) { // 768px portrait
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }
}
