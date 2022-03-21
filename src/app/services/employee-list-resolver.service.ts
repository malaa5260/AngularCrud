import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Employee } from 'app/models/employee/employee.model';
import { Observable } from 'rxjs';
import { EmployeeService }  from '../services/employee.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolverService implements Resolve<Employee[]> {

  constructor(private _employeeService:EmployeeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]>  {
    return this._employeeService.getEmployees();
  }
}
