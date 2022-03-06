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
import {
  trigger,
  style,
  animate,
  transition,
  sequence,
} from '@angular/animations';

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

  @Input() employee: Employee;
  @Output() notify = new EventEmitter<Employee>();
  constructor() {}
  handelClick(){
    this.notify.emit(this.employee);
  }
  ngOnInit(): void {}
  
  getEmployeeNameAndGender():string{
    return this.employee.name +' -- ' +this.employee.gender+ ' -- ' + this.employee.contactPreference;
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
      const change=changes[proName];
      const from =JSON.stringify(change.previousValue);
      const to =JSON.stringify(change.currentValue);
      console.log(proName + ' changed from ' + from + ' to ' + to);
    }
  }
}
