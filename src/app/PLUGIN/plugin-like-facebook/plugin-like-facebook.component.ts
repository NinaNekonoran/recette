import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-plugin-like-facebook',
  templateUrl: './plugin-like-facebook.component.html'
})
export class PluginLikeFacebookComponent implements OnInit {
  private sanitizer: DomSanitizer;
  @Input()
  url: string;
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getUrlPluginLike(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
