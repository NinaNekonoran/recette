import {Component, Input, OnInit} from '@angular/core';
import {difficultImage} from '../../recipes';

@Component({
  selector: 'app-difficultes',
  templateUrl: './difficultes.component.html',
  styleUrls: ['./difficultes.component.css']
})
export class DifficultesComponent implements OnInit {

  constructor() { }
  difficultImage = difficultImage;

  @Input()
  difficult: number;

  @Input()
  oneLine: boolean;

  ngOnInit(): void {
  }

}
