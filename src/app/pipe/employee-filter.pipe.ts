import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'app/models/employee/employee.model';
@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: Employee[],searchTearm:string):Employee[] {
    if(!employees || !searchTearm){
      return employees;
    }
    return employees.filter(emp =>
       emp.name.toLowerCase().indexOf(searchTearm.toLowerCase())!==-1);
  }

}
