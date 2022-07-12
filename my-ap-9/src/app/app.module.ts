import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { GameOddComponent } from './game-control/game-odd/game-odd.component';
import { GameEvenComponent } from './game-control/game-even/game-even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    GameOddComponent,
    GameEvenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
