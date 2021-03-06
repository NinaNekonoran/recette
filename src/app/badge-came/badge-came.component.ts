import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-badge-came',
  templateUrl: './badge-came.component.html',
  styleUrls: ['./badge-came.component.css']
})
export class BadgeCameComponent implements OnInit {

  constructor() { }

  @Input()
  type;
  ngOnInit(): void {
  }

}
