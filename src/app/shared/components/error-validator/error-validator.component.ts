import { Component, OnInit, Input } from '@angular/core';
import { ValidationService } from './validation.service';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-error-validator',
  templateUrl: './error-validator.component.html',
  styleUrls: ['./error-validator.component.scss']
})
export class ErrorValidatorComponent implements OnInit {
  errorMessage: string;

  @Input() control: FormControl;
  constructor() {}

  ngOnInit() {
    combineLatest(
      this.control.statusChanges,
      this.control.valueChanges
    ).subscribe(values => {
      console.log(values);
    });
  }

  get hasError() {
    return this.control.dirty && this.control.invalid;
  }

  // Transform this to be an array of errors
  get ErrorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        const value = ValidationService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
        console.log(value);

        return value;
      }
    }

    return null;
  }
}
