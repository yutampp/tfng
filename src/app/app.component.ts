import { Component } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tfng';
  cards: Card[] = [];
  decks: any = [];

  constructor(private cardService: CardService ){ }

  ngOnInit() {
    this.get_carddata();
    this.get_deckdata();
  }

  get_carddata() {
    this.cardService.get_carddata().subscribe( data => {
      console.log(data);
      this.cards = data;
    });
  }

  get_deckdata() {
    this.cardService.get_deckdata().subscribe( data => {
      console.log(data);
      this.decks = data;
    });
  }
}
