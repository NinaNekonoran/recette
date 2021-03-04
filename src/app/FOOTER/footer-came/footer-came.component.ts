import {Component, HostListener, OnInit} from '@angular/core';
import {presentation} from '../../recipes';
@Component({
  selector: 'app-footer-came',
  templateUrl: './footer-came.component.html',
  styleUrls: ['./footer-came.component.css']
})
export class FooterCameComponent implements OnInit {

  presentation = presentation;

  constructor() { }

  mobile;

  ngOnInit(): void {
    this.isMoblie();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMoblie();
  }

  private isMoblie() {
    if (window.innerWidth < 600) { // 768px portrait
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

}
