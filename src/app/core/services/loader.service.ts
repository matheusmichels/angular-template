import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  hide(): void {
    console.log('hide loader');
  }
  show() {
    console.log('show loader');
  }

  constructor() { }
}
