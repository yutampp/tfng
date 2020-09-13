import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
