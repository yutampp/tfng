import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maindeck',
  templateUrl: './maindeck.component.html',
  styleUrls: ['./maindeck.component.scss']
})
export class MaindeckComponent implements OnInit {
  @Input() deck;

  constructor() { }

  ngOnInit(): void {
  }

}
