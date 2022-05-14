 import { Injectable } from '@angular/core';
 import { Employee } from 'app/models/employee/employee.model';
 import { Observable,of } from 'rxjs';
 import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private listEmpoloyees:  Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'assets/images/john.png'
    },
  ];


  getEmployees(): Observable<Employee[]>{
    return of(this.listEmpoloyees).pipe(delay(2000));
  }
  getEmployeeId(id:number):Employee{
    return this.listEmpoloyees.find(e => e.id === id);
  }
  save(employee:Employee){
    if(employee.id === null){
      //reduce array to single value 
      const maxId = this.listEmpoloyees.reduce(function(e1,e2){
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      employee.id = maxId+1;
      this.listEmpoloyees.push(employee);
    }else{
      const foundIndex= this.listEmpoloyees.findIndex(e => e.id===employee.id );
      this.listEmpoloyees[foundIndex] = employee;
    }
    
  }
  deleteEmployee(id:number){
    const i = this.listEmpoloyees.findIndex(e => e. id===id);
    if(i !== -1){
      this.listEmpoloyees.splice(i,1);
    }
  }

  constructor() { }
}
