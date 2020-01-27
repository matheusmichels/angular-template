import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Attempt } from '../models/attempt.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss']
})
export class AttemptsComponent implements OnInit, OnChanges {

  @Input()
  private totalAttempts = 3;

  public attempts: Attempt[] = [];

  constructor() {
  }

  ngOnInit() {
    this.attempts = Array.from(Array(this.totalAttempts).keys(), () => new Attempt(true));
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentTotalAttempts = changes.totalAttempts.currentValue;
    if (currentTotalAttempts < this.attempts.length) {
      const indice = this.attempts.length - currentTotalAttempts;
      this.attempts[indice - 1].isFull = false;
    }
  }

}
