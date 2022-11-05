import { Component, OnInit } from '@angular/core';
import { PLAYERS } from '../players';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  players = PLAYERS;

  constructor() {}

  ngOnInit(): void {
    this.players.sort((p1, p2) => {
      if (p1.score > p2.score) {
        return -1;
      }
      if (p1.score < p2.score) {
        return 1;
      }
      return 0;
    });
  }
}
