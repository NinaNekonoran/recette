import {Component, HostListener, OnInit} from '@angular/core';
@Component({
  selector: 'app-footer-came',
  templateUrl: './footer-came.component.html',
  styleUrls: ['../footer.component.css']
})
export class FooterCameComponent implements OnInit {
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
    if (window.innerWidth < 768) { // 768px portrait
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

}
