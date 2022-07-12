import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-odd',
  templateUrl: './game-odd.component.html',
  styleUrls: ['./game-odd.component.css']
})
export class GameOddComponent implements OnInit {
  @Input() number!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
