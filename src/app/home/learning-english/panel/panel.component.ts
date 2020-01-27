import { Component, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SENTENCES_MOCK } from '../models/sentences.mock';
import { Sentence as Sentence } from '../models/sentence.model';
import { TypeFinished } from '../models/type-finished.enum';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Output()
  private finishTheGame = new EventEmitter<TypeFinished>();

  public command: string;
  public round: number;
  public sentences: Sentence[];
  public currentSentence: Sentence;
  public currentAnswer: string;
  public progress: number;
  public attemptsRemaign: number;

  constructor() {
    this.command = 'Traduza a frase:';
    this.round = 0;
    this.sentences = SENTENCES_MOCK;
    this.currentSentence = this.sentences[this.round];
    this.currentAnswer = '';
    this.progress = 0;
    this.attemptsRemaign = 6;
  }

  ngOnInit() {
    console.log('Sentences', SENTENCES_MOCK);
  }

  onUpdateAnswer(answer: string) {
    this.currentAnswer = answer;
  }

  validateAnswer() {
    if (this.currentAnswer.includes(this.currentSentence.portuguese)) {
      this.round++;
      this.updateCurrentSentence();
      this.currentAnswer = '';
      this.progress = (this.round * 100) / this.sentences.length;
      if (this.round === this.sentences.length) {
        this.finishTheGame.emit(TypeFinished.WIN);
      }
    } else {
      this.attemptsRemaign--;
      if (this.attemptsRemaign === -1) {
        this.finishTheGame.emit(TypeFinished.DEFEAT);
      }
    }
  }

  updateCurrentSentence(): void {
    this.currentSentence = this.sentences[this.round];
  }
}
