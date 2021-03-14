import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment-facebook',
  templateUrl: './comment-facebook.component.html',
  styleUrls: ['./comment-facebook.component.css']
})
export class CommentFacebookComponent implements OnInit, AfterViewInit{

  constructor() { }

  @Input()
  recipe;

  url;

  ngOnInit(): void {
    this.url = 'https://mamie-cameroun.fr/recipe/' + this.recipe.id + '/' + this.recipe.title.replaceAll(' ', '%20');
    console.log("url : "+this.url);
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit(){
    // tslint:disable-next-line:only-arrow-functions typedef
    (function( d, s, id) {
      // tslint:disable-next-line:prefer-const one-variable-per-declaration
      let js, fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4';

      if (d.getElementById(id)){
        // if <script id="facebook-jssdk"> exists
        delete (<any>window).FB;
        fjs.parentNode.replaceChild(js, fjs);
      } else {
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));
  }
}
