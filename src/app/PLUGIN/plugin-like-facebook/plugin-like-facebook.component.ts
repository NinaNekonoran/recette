import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-plugin-like-facebook',
  templateUrl: './plugin-like-facebook.component.html',
  styleUrls: ['./plugin-like-facebook.component.css']
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

  getUrlPluginLike(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
