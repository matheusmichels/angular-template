import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnsureHttpsInterceptor } from './ensure-http.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { MockInterceptor } from './mock-interceptor';
import { ErrorRetryInterceptor } from './error-retry.interceptor';
import { LoaderInterceptor } from './loader.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    // #docregion noop-provider
    // #enddocregion noop-provider, interceptor-providers

    // Wont work with json-server because json-server it's HTTP and not HTTPS
    // { provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorRetryInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    // Wont work with json-server because intercept /users route
    // { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
    // #docregion interceptor-providers
];