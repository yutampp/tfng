import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  private _card:Card;

  animation: boolean = true;

  @Input() set card(_card: Card) {
    console.log(_card);
    this._card = _card;
    setTimeout(()=>this.animation = false,0);
    setTimeout(()=>this.animation = true,100);
  };

  constructor() { }

  ngOnInit(): void {
  }

  get card(): Card{
    return this._card;
  }

}
