import { Component, OnInit } from '@angular/core';
import {presentation} from '../../recipes';

@Component({
  selector: 'app-footer-presentation',
  templateUrl: './footer-presentation.component.html',
  styleUrls: ['../footer.component.css']
})
export class FooterPresentationComponent implements OnInit {

  presentation = presentation;

  constructor() { }

  ngOnInit(): void {
  }

}
