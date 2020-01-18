import { HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpRequest, HttpResponse } from '@angular/common/http';

const usersData = {
    users: [
        {
            name: 'chidume nnamdi',
            age: 26
        },
        {
            name: 'chisom',
            age: 46
        },
        {
            name: 'elvis',
            age: 21
        },
        {
            name: 'osy mattew',
            age: 21
        },
        {
            name: 'valentine',
            age: 21
        },
    ]
}

@Injectable()
export class MockInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === 'GET' && request.url.endsWith('/users')) {
            return of(new HttpResponse({ status: 200, body: usersData }));
        }
        next.handle(request);
    }
}
