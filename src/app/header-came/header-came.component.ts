import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header-came',
  templateUrl: './header-came.component.html',
  styleUrls: ['./header-came.component.css']
})
export class HeaderCameComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    
    this.items = [
      {label: 'Accueil', icon: 'pi pi-fw pi-home'}
    ];

    this.activeItem = this.items[0];
  }

}
