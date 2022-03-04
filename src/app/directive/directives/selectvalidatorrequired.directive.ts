import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
@Directive({
  selector: '[appSelectvalidator]' ,
  providers:[{
     provide:NG_VALIDATORS,
     useExisting:SelectvalidatorrequiredDirective,
     multi:true,
  }]
})
export class SelectvalidatorrequiredDirective implements Validator {

  constructor() { }
 
  validate(control: AbstractControl): {[key:string]:any} | null {
  
  return control.value === '-1' ? {'defaultSelected': true} : null ;

    // throw new Error('Method not implemented.');
  }

}
