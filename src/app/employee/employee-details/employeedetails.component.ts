import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from 'app/models/employee/employee.model';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employee:Employee;
  constructor(private _route:ActivatedRoute,private _employeeService:EmployeeService) { }

  ngOnInit() {
   //const id = +this._route.snapshot.params['id'];
   const id  = +this._route.snapshot.paramMap.get('id');
   this.employee=this._employeeService.getEmployeeId(id);
  }

}
