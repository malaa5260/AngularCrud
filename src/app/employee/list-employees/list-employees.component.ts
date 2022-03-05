import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, sequence } from '@angular/animations';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from 'app/models/employee/employee.model';



@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',

   animations: [
        trigger('enabledStateChange', [
            transition('* => *', [style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }), sequence([
                animate("1s ease", style({ height: '*', opacity: '.4', transform: 'translateX(0)', 'box-shadow': 'none' })),
                animate("1s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
            ])])
        ])
    ],
})
export class ListEmployeesComponent implements OnInit {
  empData:Employee;
  employees:Employee[];
  employeeToDisplay:Employee;
  private arrayIndex=1;
  constructor(private _employeeService:EmployeeService) { }
  handleNotify(event:Employee){
    this.empData=event;
  }
  ngOnInit(): void {
   this.employees= this._employeeService.getEmployees();
   this.employeeToDisplay=this.employees[0];
  }
  nextEmployee():void{
  if(this.arrayIndex < this.employees.length){
    this.employeeToDisplay=this.employees[this.arrayIndex];
    this.arrayIndex++;
  }else{
    //alert("disaplying employee finished ,if click displyaing from start")
    this.employeeToDisplay=this.employees[0];
    this.arrayIndex=1;
  }
  }
  
// @HostListener('click', ['$event'])

// onClick() {
//     let element = document.querySelector('.btns')  as HTMLElement;
//     if (element.classList.contains('navbar-inverse')) {
//       element.classList.remove('navbar-inverse');  
//     }
//     else{
//       element.classList.add('navbar-inverse');
//     }
//   }
}
