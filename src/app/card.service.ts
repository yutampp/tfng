import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card';
import { Deck } from './deck';
import { Observable, throwError, forkJoin, concat } from 'rxjs';
import { catchError, retry ,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private carddata_url = (i) => `http://yutamptech.com/carddata/${i}.json`;
  private carddata_length_url = 'http://yutamptech.com/carddata/length';
  private deckdata_summary_url = 'http://yutamptech.com/deck/htmls';
  private imageurl = "http://yutamptech.com/images/";
  private l_imageurl = "http://yutamptech.com/l_images/";
  private image_ext = ".png";
 
  constructor(private http: HttpClient) { }

  get_card_and_deck():Observable<Object> {
    return Observable.create(observer=>
      this.get_carddata().subscribe(cards=>
        this.get_deckdata().subscribe(decks=>
          observer.next({cards:cards,decks:decks})
        )
      )
    ).pipe(
      map((data:any)=>{
        let bind_cid_to_card = (cids,cards)=>cids.map(cid=>cards.find(card=>card.cid==cid));
        console.log(data);
        data.decks.map(deck=>deck.cards = bind_cid_to_card(deck.cids,data.cards));
        data.decks.map(deck=>deck.main_cards = bind_cid_to_card(deck.main_cids,data.cards));
        data.decks.map(deck=>deck.extra_cards = bind_cid_to_card(deck.extra_cids,data.cards));
        data.decks.map(deck=>deck.side_cards = bind_cid_to_card(deck.side_cids,data.cards));
        return data;
      })
    );
  }

  get_carddata():Observable<Card[]> {
    return Observable.create(observer=>
      this.get_carddata_length().subscribe(length=>
        this.get_carddata_forkJoin(length).subscribe(data=>
          observer.next(data)
        )
      )
    ).pipe(
      map((data:any[][])=>[].concat(...data)),
      map((data:Card[])=>
        data.map(card=>{
          card.imageurl = this.imageurl + card.cid + this.image_ext;
          card.l_imageurl = this.l_imageurl + card.cid + this.image_ext;
          return card;
          }
        )
      )
    );
  }

  get_carddata_forkJoin(length) {
    const i = Array.from(new Array(length) ).map((v,i) => i); 
    return forkJoin(...i.map(i => this.http.get(this.carddata_url(i) ) ) );
  }

  get_carddata_length(){
    return this.http.get(this.carddata_length_url);
  }

  get_deckdata(): Observable<any[]> {
    return this.http.get(this.deckdata_summary_url).pipe(
      map((data:any[])=>data.map((data:any[])=>Object({
        name: data[2],
        source_url: data[1],
        cards: [],
        main_cards: [],
        extra_cards: [],
        side_cards: [],
        cids: data[3],
        main_cids: data[4],
        extra_cids: data[5],
        side_cids: data[6],
      })))
    );
  }
}
