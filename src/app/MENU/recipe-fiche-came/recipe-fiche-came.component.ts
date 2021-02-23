import {Component, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-fiche-came',
  templateUrl: './recipe-fiche-came.component.html',
  styleUrls: ['./recipe-fiche-came.component.css']
})
export class RecipeFicheCameComponent implements OnInit {

  @Input()
  recipe;
  mobile : boolean;

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
