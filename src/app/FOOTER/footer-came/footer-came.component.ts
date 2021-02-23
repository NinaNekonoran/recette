import { Component, OnInit } from '@angular/core';
import {presentation} from '../../recipes';
@Component({
  selector: 'app-footer-came',
  templateUrl: './footer-came.component.html',
  styleUrls: ['./footer-came.component.css']
})
export class FooterCameComponent implements OnInit {

  presentation = presentation;

  constructor() { }

  ngOnInit(): void {
  }

}
