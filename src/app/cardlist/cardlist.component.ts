import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() select_card: EventEmitter<Card> = new EventEmitter();
  @Output() add_card: EventEmitter<Card> = new EventEmitter();
  @Output() remove_card: EventEmitter<Card> = new EventEmitter();
  @Output() add_card_to_side: EventEmitter<Card> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //setInterval(()=>console.log(this.cards),1000)
  }

  click_card(card){
    this.select_card.emit(card);
  }

  to_deck(card) {
    this.add_card.emit(card);
  }

  to_kaban(card) {
    this.remove_card.emit(card);
  }
  
  to_side(card) {
    this.add_card_to_side.emit(card);
  }

}
