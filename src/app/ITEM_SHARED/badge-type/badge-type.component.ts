import {Component, Input, OnInit} from '@angular/core';
import {TYPE_RECIPE} from '../../recipes';
@Component({
  selector: 'app-badge-came',
  templateUrl: './badge-type.component.html',
  styleUrls: ['./badge-type.component.css']
})
export class BadgeTypeComponent implements OnInit {

  constructor() { }

  @Input()
  type: TYPE_RECIPE;

  @Input()
  isFullWidth: boolean;

  ngOnInit(): void {
  }

  isTRADITIONNEL(){
    return this.type === TYPE_RECIPE.TRADITIONNEL;
  }

  isACCOMPAGNEMENT(){
    return this.type === TYPE_RECIPE.ACCOMPAGNEMENT;
  }

  isCLASSIQUE(){
    return this.type === TYPE_RECIPE.CLASSIQUE;
  }

  isNO(){
    return this.type === TYPE_RECIPE.NO;
  }
}
