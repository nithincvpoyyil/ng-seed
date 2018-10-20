import { Component, OnInit } from '@angular/core';
import menuList from './menu.config';
import { MenuItem } from '../../core';
@Component({
  selector: 'emp-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  menuList: MenuItem[];
  constructor() {
    this.menuList = menuList;
  }

  ngOnInit() {
  }

}
