import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deck } from '../deck';
import { Card } from '../card';

@Component({
  selector: 'app-sidedeck',
  templateUrl: './sidedeck.component.html',
  styleUrls: ['./sidedeck.component.scss']
})
export class SidedeckComponent implements OnInit {
  @Input() deck: Deck;
  @Output() select_card: EventEmitter<Card> = new EventEmitter();
  @Output() add_card: EventEmitter<Card> = new EventEmitter();
  @Output() remove_card: EventEmitter<Card> = new EventEmitter();
  @Output() add_card_to_side: EventEmitter<Card> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
