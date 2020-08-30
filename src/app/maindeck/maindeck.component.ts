import { Component, OnInit, Input } from '@angular/core';
import { Deck } from '../deck';

@Component({
  selector: 'app-maindeck',
  templateUrl: './maindeck.component.html',
  styleUrls: ['./maindeck.component.scss']
})
export class MaindeckComponent implements OnInit {
  @Input() deck: Deck;

  constructor() { }

  ngOnInit(): void {
  }

}
