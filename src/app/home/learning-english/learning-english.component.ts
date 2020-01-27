import { Component } from '@angular/core';
import { TypeFinished } from './models/type-finished.enum';

@Component({
  selector: 'app-learning-english',
  templateUrl: './learning-english.component.html',
  styleUrls: ['./learning-english.component.scss']
})
export class LearningEnglishComponent {
  title: string;
  gameInProgress: boolean;
  typeFinished: TypeFinished;

  constructor() {
    this.title = 'learning-english';
    this.gameInProgress = true;
  }
  onFinishTheGame(result: TypeFinished) {
    this.gameInProgress = false;
    this.typeFinished = result;
  }

  resetGame() {
    this.gameInProgress = true;
    this.typeFinished = null;
  }

  get isWin(): boolean {
    return this.typeFinished === TypeFinished.WIN;
  }
}
