import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from  '@angular/forms'


@Directive({
  selector: '[appConfirmpassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmpasswordDirective,
    multi: true
  }]
})
export class ConfirmpasswordDirective implements Validator{
 validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
  const passwordField =passwordGroup.get('password');
  const ConfirmPasswordField =passwordGroup.get('confirmpassword');
  if (passwordField && ConfirmPasswordField && passwordField.value !== ConfirmPasswordField.value) {
      return { 'notEqual': true };
  }
  return null;
}
  constructor() { }
}
