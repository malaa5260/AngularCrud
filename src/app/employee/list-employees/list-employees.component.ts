import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  sequence,
} from '@angular/animations';
import { Employee } from 'app/models/employee/employee.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',

  animations: [
    trigger('enabledStateChange', [
      transition('* => *', [
        style({
          height: '*',
          opacity: '0',
          transform: 'translateX(-550px)',
          'box-shadow': 'none',
        }),
        sequence([
          animate(
            '1s ease',
            style({
              height: '*',
              opacity: '.4',
              transform: 'translateX(0)',
              'box-shadow': 'none',
            })
          ),
          animate(
            '1s ease',
            style({ height: '*', opacity: 1, transform: 'translateX(0)' })
          ),
        ]),
      ]),
    ]),
  ],
})
export class ListEmployeesComponent implements OnInit {
  private _searchTearm: string;
  public get searchTearm(): string {
    return this._searchTearm;
  }
  public set searchTearm(value: string) {
    this._searchTearm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }
  filteredEmployees: Employee[];
  empData: Employee;
  employees: Employee[];
  employeeToDisplay: Employee;
  private arrayIndex = 1;

  constructor(private _router: Router, private _route: ActivatedRoute) {
    this.employees = this._route.snapshot.data['employeeList'];

    if (this._route.snapshot.queryParamMap.has('searchTearm')) {
      this.searchTearm = this._route.snapshot.queryParamMap.get('searchTearm');
    } else {
      this.filteredEmployees = this.employees;
    }
  }
  handleNotify(event: Employee) {
    this.empData = event;
  }
  filterEmployees(searchString: string) {
    return this.employees.filter(
      emp => emp.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }
  changeName() {
    //cahnge by reference valiable
    // this.employees[0].name = 'jordan';
    // this.filteredEmployees = this.filterEmployees(this.searchTearm);
    // change by instance of valiable
    // const newEmployeeArray:Employee[]=Object.assign([],this.employees);
    // newEmployeeArray[0].name='jordan';
    // this.employees=newEmployeeArray;
  }
  // onClick(empId: number) {
  //   this._router.navigate(['/employees', empId], {
  //     queryParams: { searchTearm: this.searchTearm },
  //   });
  // }

  ngOnInit(): void {}
  nextEmployee(): void {
    if (this.arrayIndex < this.employees.length) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      //alert("disaplying employee finished ,if click displyaing from start")
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }

  onDeleteNotifcation(id:number){
    const i = this.filteredEmployees.findIndex(e => e. id===id);
    if(i !== -1){
      this.filteredEmployees.splice(i,1);
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
