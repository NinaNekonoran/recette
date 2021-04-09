import { Component, OnInit } from '@angular/core';
import {mail} from '../../recipes';

@Component({
  selector: 'app-footer-contact-credits',
  templateUrl: './footer-contact-credits.component.html',
  styleUrls: ['../footer.component.css']
})
export class FooterContactCreditsComponent implements OnInit {

  mail = mail;

  constructor() { }

  ngOnInit(): void {
  }

}
