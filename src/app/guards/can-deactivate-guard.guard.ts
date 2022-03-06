import { Injectable } from '@angular/core';
import {  CanDeactivate } from '@angular/router';
import {CreateEmployeeComponent} from '../employee/create-employee/create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent):boolean{
   if(component.createEmployeeForm.dirty){
     return confirm('Are You Sure Want To Discard your Changes?');
   } 
   return true;
  }
 
}
