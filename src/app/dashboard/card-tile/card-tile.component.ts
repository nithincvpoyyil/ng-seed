import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../core';

@Component({
  selector: 'emp-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.scss']
})
export class CardTileComponent implements OnInit {

  @Input() menuItem: MenuItem;
  constructor() {}

  ngOnInit() {
    console.log(this.menuItem);
  }

  getIconClass() {
    return this.menuItem.icon;
  }

}
