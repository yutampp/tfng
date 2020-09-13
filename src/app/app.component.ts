import { Component } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card';
import { Deck } from './deck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tfng';
  cards: Card[] = [];
  decks: Deck[] = [];
  current_deck: Deck;
  selected_card: Card;

  constructor(private cardService: CardService ){ }
    view_select = "main";

  ngOnInit() {
    this.get_carddata();
  }

  get_carddata() {
    this.cardService.get_card_and_deck()
    .subscribe( (data:any) => {
      console.log(data);
      this.cards = data.cards;
      this.decks = data.decks;
      this.current_deck = this.decks[7];
      this.selected_card = this.current_deck.main_cards[1];
    });
  }

  receive_card(card: Card) {
    this.selected_card = card;
  }
}
