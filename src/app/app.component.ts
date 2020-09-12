import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public startTime = 900;
  counter: number;
  timerSubs: Subscription;
  minutes: number;
  seconds: number;

  ngOnInit(): void {
    this.timerfunction();
    this.counter = 10;
  }
 



  public timer = Observable.timer(1000, 1000);


  public timerfunction(): void {
    if (this.counter < 10) {
      this.timerSubs = this.timer.subscribe((tt) => {
        // console.log("inside timer" + this.counter);
        this.timerfunc(tt);
      });
      this.unsubscribeTimer();
    }
    this.counter = this.counter + 1;
  }
  unsubscribeTimer() {
    throw new Error("Method not implemented.");
  }
  public timerfunc(tt: number) {
    {
      console.log("Timer ticks" + " : " + tt);
      if (tt < this.startTime && tt !== 0) {
        if (tt % 60 === 0 && tt !== 0 && this.minutes !== 0) {
          // console.log("t" + tt + this.minutes + ":" + this.seconds );
          this.minutes = this.minutes - 1;
          this.seconds = 59;
          // console.log(this.startTime + "start time");
        } else {
          // console.log( "this.seconds ----- fucTTT" + this.seconds );
          if (this.seconds !== 0) {
            this.seconds = this.seconds - 1;
          } else if (this.seconds === 0 && this.minutes !== 0) {
            this.seconds = 59;
            this.minutes = this.minutes - 1;
            // console.log("inside this loop");
          }
          // console.log("minutes" + this.minutes + "seconds" + this.seconds);
        }
      }
    }


  }
}
