import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('start') startButtonEvent = new EventEmitter<any>;
  @Output('pause') pauseButtonEvent = new EventEmitter<any>;
  @Output('reset') resetButtonEvent = new EventEmitter<any>;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.startButtonEvent.emit();
  }

  onPause() {
    this.pauseButtonEvent.emit();
  }

  onReset() {
    this.resetButtonEvent.emit();
  }


}
