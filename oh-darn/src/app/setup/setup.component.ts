import { Component, OnInit } from '@angular/core';
import { PLAYERS } from '../players';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
})
export class SetupComponent implements OnInit {
  players = PLAYERS;

  constructor() {}

  ngOnInit(): void {}

  addPlayer() {
    if (PLAYERS.length < 10) {
      PLAYERS.push({
        name: '',
        score: 0,
        bid: 0,
        tricks: 0,
      });
    }
  }

  deletePlayer(index: number){
    this.players.splice(index, 1);
  }

  setPlayers() {
    this.players = [
      { name: '', score: 0, bid: 0, tricks: 0 },
      { name: '', score: 0, bid: 0, tricks: 0 },
      { name: '', score: 0, bid: 0, tricks: 0 },
    ];
  }
}
