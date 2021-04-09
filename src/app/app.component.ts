import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  redirection: string = null;
  public constructor(private titleService: Title, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.titleService.setTitle('Mamie Cameroun');
    this.route.queryParams.subscribe(params => {
      this.redirection = params.redirection;
      if (this.redirection) {
        this.router.navigate([
            'recipe/' + this.redirection + '/'
        ]);
      }
    });
  }
}
