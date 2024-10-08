import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import  { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGuardService implements CanActivate {
    constructor(private _employeeService: EmployeeService,
        private _router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       const employeeExists = !!this._employeeService.getEmployeeId(+route.paramMap.get('id'));
       if(employeeExists){
           return true;
       }
       else{
            this._router.navigate(['notfound']);
            return false;
       }
    }
}
