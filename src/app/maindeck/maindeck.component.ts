import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deck } from '../deck';
import { Card } from '../card';

@Component({
  selector: 'app-maindeck',
  templateUrl: './maindeck.component.html',
  styleUrls: ['./maindeck.component.scss']
})
export class MaindeckComponent implements OnInit {
  @Input() deck: Deck;
  @Output() select_card: EventEmitter<Card> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
