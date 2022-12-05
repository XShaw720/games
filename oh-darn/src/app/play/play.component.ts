import { Component, OnInit } from '@angular/core';
import { PLAYERS } from '../players';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  players = PLAYERS;

  constructor() {}

  ngOnInit(): void {}

  endRound() {
    var sum = 0;
    this.players.forEach((p) => {
      sum += +p.tricks;
    });
    if (sum <= 10) {
      this.players.forEach((p) => {
        if (p.bid == p.tricks) {
          p.score += +p.bid + 10;
        }
        else{
          p.score += +p.tricks;
        }
        p.bid = 0;
        p.tricks = 0;
      });
    }
    PLAYERS.push(this.players[0]);
    this.players.splice(0, 1);
  }

  changeBid(index:number, increment:number){
    let bid:number=this.players[index].bid+increment;
    if(!(bid<0)){
      this.players[index].bid=bid;
    }
  }
  changeTrick(index:number, increment:number){
    let tricks:number=this.players[index].tricks+increment;
    if(!(tricks<0)){
      this.players[index].tricks=tricks;
    }
  }
}
