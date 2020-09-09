import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { ATTRIBUTE } from '../attribute_master';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {
  attr = ATTRIBUTE;
  level_icon = "/assets/icon_level.png";
  rank_icon = "/assets/icon_rank.png";
  pendulum_icon = "/assets/icon_pendulam.png";
  link_icon = "/assets/link";

  @Input() cards:Card[];

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>console.log(this.cards),1000)
  }

}
