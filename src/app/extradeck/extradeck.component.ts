import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deck } from '../deck';
import { Card } from '../card';
import { CardWithIndex } from '../card-with-index';

@Component({
  selector: 'app-extradeck',
  templateUrl: './extradeck.component.html',
  styleUrls: ['./extradeck.component.scss']
})
export class ExtradeckComponent implements OnInit {
  @Input() deck: Deck;
  @Output() select_card: EventEmitter<Card> = new EventEmitter();
  @Output() add_card: EventEmitter<Card> = new EventEmitter();
  @Output() remove_card: EventEmitter<CardWithIndex> = new EventEmitter();
  @Output() add_card_to_side: EventEmitter<CardWithIndex> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
