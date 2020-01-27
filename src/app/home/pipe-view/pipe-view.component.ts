import { Component, OnInit } from '@angular/core';
import { OnlyNumberPipe } from 'src/app/shared/pipes/only-number.pipe';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-pipe-view',
  templateUrl: './pipe-view.component.html',
  styleUrls: ['./pipe-view.component.scss']
})
export class PipeViewComponent implements OnInit {
  public cpf = '123.123.123-21';
  public cpfTransformerd: number;
  public birthDay = new Date(1994, 10, 3);
  public upperCaseText = 'THIS IS UPPERCASE';
  public lowerCaseText = 'this is lowercase';
  public asyncObservable: Observable<string>;
  public currencyValue = '55.55';
  public decimalValue = 234.12351235123;
  public percentValue = 2.5;
  public object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  collection: string[] = ['a', 'b', 'c', 'd'];
  
  
  constructor() { }

  ngOnInit() {
    const onlyNumberPipe = new OnlyNumberPipe();
    this.cpfTransformerd = onlyNumberPipe.transform(this.cpf);
    this.asyncObservable = of('I am an observable').pipe(delay(3000));
  }

}
