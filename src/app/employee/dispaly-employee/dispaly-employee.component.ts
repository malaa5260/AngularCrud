import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Employee } from 'app/models/employee/employee.model';
import { EmployeeService } from '../../services/employee.service';
import {
  trigger,
  style,
  animate,
  transition,
  sequence,
} from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dispaly-employee',
  templateUrl: './dispaly-employee.component.html',
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
export class DispalyEmployeeComponent implements OnInit, OnChanges {
  // private _employee: Employee;
  // @Input()
  // set employee(value: Employee) {
  //   console.log( 'previousEmployee :'+ ( this._employee ? this._employee.name : 'Null' ));
  //   console.log('currentEmployee :' +value.name )

  //   this._employee=value;
  // }
  // get employee():Employee {
  //   return this._employee;
  // }

  selectedEmployeeId: number;
  @Input() employee: Employee;
  @Input() searchTearm : string;
  @Output() notify = new EventEmitter<Employee>();
  @Output() notifyDelete = new EventEmitter<number>();
  // confirmDelete:boolean=false;
  
  constructor(private _route: ActivatedRoute,private _router:Router,private _employeeService: EmployeeService ,
    private _toastrService:ToastrService) {}
  handelClick() {
    this.notify.emit(this.employee);
  }
 
  ngOnInit(): void {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }
  viewEmployee(){
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { searchTearm: this.searchTearm },
    });
  }
  editEmployee(){
    this._router.navigate(['/edit', this.employee.id])
  }
  getEmployeeNameAndGender(): string {
    return (
      this.employee.name +
      ' -- ' +
      this.employee.gender +
      ' -- ' +
      this.employee.contactPreference
    );
  }
  deleteEmployee(id:number){
    this._employeeService.deleteEmployee(id);
    this._toastrService.success(this.employee.name + ' Deleted Successfully');
    this.notifyDelete.emit(id);
  }
  // ngOnChanges life cycle hook
  ngOnChanges(changes: SimpleChanges) {
    // const previousEmployee = <Employee>changes.employee.previousValue;
    // const currentEmployee = <Employee>changes.employee.currentValue;
    // console.log(
    //   'previousEmployee :' + (previousEmployee ? previousEmployee.name : 'Null')
    // );
    // console.log('currentEmployee :' + currentEmployee.name);
    for (const proName of Object.keys(changes)) {
      const change = changes[proName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);
      console.log(proName + ' changed from ' + from + ' to ' + to);
    }
  }
}
