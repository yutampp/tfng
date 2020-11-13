import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';
import { CardWithIndex } from '../card-with-index';
import { ATTRIBUTE } from '../attribute_master';

type Locate = "main" | "extra" | "side" | "cardpool";

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


  @Input() cards: Card[];
  @Input() locate: Locate;
  @Output() select_card: EventEmitter<Card> = new EventEmitter();
  @Output() add_card: EventEmitter<Card> = new EventEmitter();
  @Output() remove_card: EventEmitter<CardWithIndex> = new EventEmitter();
  @Output() add_card_to_side: EventEmitter<CardWithIndex> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //setInterval(()=>console.log(this.cards),1000)
  }

  click_card(card){
    this.select_card.emit(card);
  }

  to_deck(card,i) {
    if(this.locate=="side"){
      this.cards.splice(i,1);
    }
    this.add_card.emit(card);
  }

  to_kaban(card,i) {
    if(this.locate!="cardpool"){
      this.cards.splice(i,1);
    }
    const senddata = new CardWithIndex();
    senddata.card = card;
    senddata.index = i;
    this.remove_card.emit(senddata);
  }
  
  to_side(card,i) {
    if(this.locate!="cardpool" && this.locate!="side"){
      this.cards.splice(i,1);
    }
    const senddata = new CardWithIndex();
    senddata.card = card;
    senddata.index = i;
    this.add_card_to_side.emit(senddata);
  }

}
