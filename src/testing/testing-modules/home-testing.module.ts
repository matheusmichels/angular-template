import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
    ],
    exports: [
        HttpClientTestingModule,
        RouterTestingModule
    ],
    // Tells the compiler not to error on unknown elements and attributes
    schemas: [NO_ERRORS_SCHEMA],
    providers: []
})
export class HomeTestingModule {}
