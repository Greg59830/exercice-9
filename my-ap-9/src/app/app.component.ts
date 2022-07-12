import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  myInterval:any = undefined;
  myIntervalIsPaused: boolean = true;
  

  onHandleStartCounting() {
    let i = 0;
    this.myIntervalIsPaused = false;
    if (!this.myInterval) {
      this.myInterval = setInterval(() => {
        if (!this.myIntervalIsPaused) {
          i++;
          if (i % 2 == 0) this.evenNumbers.push(i);
          else this.oddNumbers.push(i);
    
          console.log(this.evenNumbers);
          console.log(this.oddNumbers);
        }      
      }, 1000)
    }   
  }

  onHandlePauseCounting() {
    this.myIntervalIsPaused = !this.myIntervalIsPaused;
  }

  onHandleResetCounting() {
    this.myIntervalIsPaused = true;
    clearInterval(this.myInterval);
    this.myInterval = undefined;
    this.oddNumbers = [];
    this.evenNumbers = [];
  }

}
