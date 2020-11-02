import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Deck } from '../deck';
import { Card } from '../card';

@Component({
  selector: 'app-cardpool',
  templateUrl: './cardpool.component.html',
  styleUrls: ['./cardpool.component.scss']
})
export class CardpoolComponent implements OnInit {
  @Input() cards: Card[];
  @Output() select_card: EventEmitter<Card> = new EventEmitter();
  @Output() add_card: EventEmitter<Card> = new EventEmitter();
  @Output() remove_card: EventEmitter<Card> = new EventEmitter();
  @Output() add_card_to_side: EventEmitter<Card> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
