import { Component } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card';
import { Deck } from './deck';
import { CardWithIndex } from './card-with-index';

type View = 'main' | 'extra' | 'side' | 'pool';

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
  view_select: View = "main";

  constructor(private cardService: CardService ){ }

  ngOnInit() {
    this.get_carddata();
  }

  get_carddata() {
    this.cardService.get_card_and_deck()
    .subscribe( (data:any) => {
      console.log(data);
      this.cards = data.cards;
      this.decks = data.decks;
      this.current_deck = this.decks[0];
      this.selected_card = this.current_deck.main_cards[0];
    });
  }

  receive_card(card: Card) {
    this.selected_card = card;
  }

  click_main_select(){
    this.view_select = "main";
  }
  
  click_extra_select(){
    this.view_select = "extra";
  }
  
  click_side_select(){
    this.view_select = "side";
  }
  
  click_pool_select(){
    this.view_select = "pool";
  }

  change_deck(){
    const element = <HTMLSelectElement>document.getElementsByName("deck_select")[0];
    this.current_deck = this.decks[element.selectedIndex];
  }

  add_card(card: Card) {
    const ex:Boolean = /融合|シンクロ|エクシーズ|リンク/.test(card.card_var);
    if(ex) {
      this.current_deck.extra_cards.push(card);
    }else {
      this.current_deck.main_cards.push(card);
    }
    console.log(this.current_deck);
  }

  remove_card(senddata: CardWithIndex) {
    const card = senddata.card;
    const index = senddata.index;
    const ex:Boolean = /融合|シンクロ|エクシーズ|リンク/.test(card.card_var);
    if(ex){
      const cards:Card[] = this.current_deck.extra_cards;
      //this.current_deck.extra_cards = cards.filter( (v,i) => i!=index);
    }else{
      const cards:Card[] = this.current_deck.main_cards;
      //this.current_deck.main_cards = cards.filter( (v,i) => i!=index);
    }
    console.log(this.current_deck);
  }

  add_card_to_side(senddata: CardWithIndex){
    const card = senddata.card;
    const index = senddata.index;
    const ex:Boolean = /融合|シンクロ|エクシーズ|リンク/.test(card.card_var);
    if(ex){
      const cards:Card[] = this.current_deck.extra_cards;
      //this.current_deck.extra_cards = cards.filter( (v,i) => i!=index);
      this.current_deck.side_cards.push(card);
    }else{
      const cards:Card[] = this.current_deck.main_cards;
      //this.current_deck.main_cards = cards.filter( (v,i) => i!=index);
      this.current_deck.side_cards.push(card);
    }
    
  }
  
}
