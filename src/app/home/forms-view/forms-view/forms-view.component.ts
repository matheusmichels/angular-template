import { Component, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl
} from '@angular/forms';
import { TypePeopleEnum } from './output-form.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ValidationService } from 'src/app/shared/components/error-validator/validation.service';

@Component({
  selector: 'app-forms-view',
  templateUrl: './forms-view.component.html',
  styleUrls: ['./forms-view.component.scss']
})
// tslint:disable-next-line: component-class-suffix
export class FormsView implements OnInit {
  typePeopleEnum = TypePeopleEnum;
  peopleForm: FormGroup;

  people = {
    name: 'adrian'
  };
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.peopleForm = this.initForm();

    // If we need save a temporary form
    this.peopleForm.valueChanges
      .pipe(debounceTime(5000), distinctUntilChanged())
      .subscribe(values => {
        console.log('Values changed: ', values);
        // Here we call a function to save our form temporary
      });

    // If we need to perform an action when the status form change
    this.peopleForm.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        alert('Form is Valid');
      }
    });

    // We can perform an action when a specif value is valid:
    this.peopleForm.get('isAPerson').statusChanges.subscribe(value => {
      console.log('isAPerson Status', value);
    });
  }

  initForm() {
    return this.formBuilder.group({
      // start with a value
      name: [this.people.name, Validators.required],
      type: [''],
      cpf: [''],
      cnpj: [''],
      observation: [''],
      birthDate: [''],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      isAPerson: [false, Validators.requiredTrue],
      passwords: this.formBuilder.group(
        {
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required]
        },
        { validator: this.passwordConfirming }
      ),
      address: this.formBuilder.group({
        zipCode: [''],
        street: '',
        number: [''],
        city: [''],
        state: ['']
      })
      // @todo
      // array
      // children: ,
      // @TODO
      // phones: this.getPhones()
    });
  }

  setDefaultValuesForm() {
    // Set value only work if you pass the entire form value
    this.peopleForm.setValue({
      name: 'Khal Drogo',
      type: TypePeopleEnum.FISICA,
      cpf: '12312312321',
      cnpj: '',
      observation: 'A great warrior',
      birthDate: '',
      email: 'khal.drogo@sunstarts.com',
      isAPerson: true,
      passwords: {
        password: '',
        confirmPassword: ''
      },
      address: {
        zipCode: '',
        street: '',
        number: '',
        city: '',
        state: ''
      }
    });
  }

  resetForm() {
    this.peopleForm.reset();
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }

  // @TODO let cpf or cnpj required when type is selected
  addValidator() {}

  isValid() {
    return this.peopleForm.valid;
  }

  addFieldDynamic() {}

  getPhones() {}
}
