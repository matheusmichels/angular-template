import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

/** Pass untouched request through to the next request handler. */
@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();

    // You can specify with an if wich methods and URLs will call the loader
    return next.handle(req).pipe(
      delay(5000),
      finalize(() => this.loaderService.hide())
    );
  }
}