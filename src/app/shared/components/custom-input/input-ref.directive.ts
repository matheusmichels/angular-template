import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputRef]'
})
export class InputRefDirective {

  constructor(private formControl: NgControl) {
    console.log(this.formControl.validator);
  }

  get isRequired() {

    return !!this.formControl.control.validator;
  }

  get hasError() {
    return this.formControl.dirty && this.formControl.invalid;
  }

  get errors() {
    if (this.hasError && this.formControl.errors) {
      return this.formControl.errors;
    }
    return '';
  }
}
