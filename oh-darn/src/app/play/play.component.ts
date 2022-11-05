import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  players: Player[] = [];
  playerClass = 'single';
  setupClass = 'show';
  bidClass = 'hide';
  tricksClass = 'hide';
  scoreClass = 'hide';

  constructor() {}

  ngOnInit(): void {
    this.setPlayers();
  }

  setPlayers() {
    this.players = [
      { name: '', score: 0, bid: 0, tricks: 0 },
      { name: '', score: 0, bid: 0, tricks: 0 },
      { name: '', score: 0, bid: 0, tricks: 0 },
    ];
  }

  addPlayer() {
    if (this.players.length < 10) {
      this.players.push({
        name: '',
        score: 0,
        bid: 0,
        tricks: 0,
      });
    }
  }

  startGame() {
    let flag:boolean=true;
    this.players.forEach((p) => {
      if (!p.name) {
        flag=false;
      }
    });
    if(flag){
      this.setupClass = 'hide';
      this.playerClass = 'show';
      this.bidClass = 'show';
    }
  }

  startRound() {
    var sum = 0;
    this.players.forEach((p) => {
      sum += +p.bid;
    });
    if (sum <= 10) {
      this.bidClass = 'hide';
      this.tricksClass = 'show';
    }
  }

  endRound() {
    var sum = 0;
    this.players.forEach((p) => {
      sum += +p.tricks;
    });
    if (sum <= 10) {
      this.players.forEach((p) => {
        if (p.bid == p.tricks) {
          p.score += +(p.bid + 10);
        }
        else{
          p.score += +p.bid;
        }
        p.bid = 0;
        p.tricks = 0;
      });
      this.tricksClass = 'hide';
      this.scoreClass = 'show';
    }
  }

  nextRound() {
    this.scoreClass = 'hide';
    this.bidClass = 'show';
  }

  newGame() {
    this.setPlayers();
    this.scoreClass = 'hide';
    this.setupClass = 'show';
    this.playerClass = 'single';
  }
}
