import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'app/models/employee/employee.model';
@Pipe({
  name: 'employeeFilter',
  pure:true
})
export class EmployeeFilterPipe implements PipeTransform {
  private counter=0;
  transform(employees: Employee[],searchTearm:string):Employee[] {
    this.counter++;
    console.log('filter : ' + this.counter);
    if(!employees || !searchTearm){
      return employees;
    }
    return employees.filter(emp =>
       emp.name.toLowerCase().indexOf(searchTearm.toLowerCase())!==-1);
  }

}
