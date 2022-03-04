import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from 'app/models/employee/employee.model';
import { trigger, style, animate, transition, sequence } from '@angular/animations';

@Component({
  selector: 'app-dispaly-employee',
  templateUrl: './dispaly-employee.component.html',
  animations: [
    trigger('enabledStateChange', [
        transition('* => *', [style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }), sequence([
            animate("1s ease", style({ height: '*', opacity: '.4', transform: 'translateX(0)', 'box-shadow': 'none' })),
            animate("1s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
        ])])
    ])
],
})
export class DispalyEmployeeComponent implements OnInit,OnChanges {
  @Input() employee:Employee;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){
      const previousEmployee = <Employee>changes.employee.previousValue ;
      const currentEmployee = <Employee>changes.employee.currentValue ;
      console.log( 'previousEmployee :'+ (previousEmployee?previousEmployee.name:'Null'));
      console.log('currentEmployee :' + currentEmployee.name)

  }
}
