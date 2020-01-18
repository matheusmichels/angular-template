import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable({ providedIn: 'root' })
export class ErrorRetryInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            // You can use retryWhen to retry only to specif requests
            retry(2),
            catchError((error: HttpErrorResponse) => {
                if (error.status !== 401) {
                    // 401 handled in auth.interceptor
                    // this.toastr.error(error.message);
                }
                return throwError(error);
            })
        );

    }
}