import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreditCardValidatorDirective } from 'src/app/directives/credit-card-validator.directive';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: "",
      street: "",
      zip: ["", [Validators.required, Validators.pattern("[0-9]{5}")]],
      city: "",
      cc: [
        "",
        [Validators.required, CreditCardValidatorDirective.validateCcNumber]
      ]
    });
  }

  logForm() {
    console.log(this.registerForm.value);
  }

}
