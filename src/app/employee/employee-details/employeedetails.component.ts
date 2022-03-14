import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from 'app/models/employee/employee.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employee:Employee;
  constructor(private _route:ActivatedRoute,private _employeeService:EmployeeService,private _router:Router) { }
  private _id:number;
  ngOnInit() {
   //const id = +this._route.snapshot.params['id'];
   //using snapshot when read only inthial route parameter and value parameter does not change
   //this._id = +this._route.snapshot.paramMap.get('id');
      this._route.paramMap.subscribe(params =>{
        this._id  =+params.get('id');
        this.employee=this._employeeService.getEmployeeId(this._id);
   });
       
  //      this._route.params.subscribe(params =>{
  //       this._id  =+params['id'];
  //       this.employee=this._employeeService.getEmployeeId(this._id);
  //  });
  }
  getNextEmployee(){
    if(this._id < this._employeeService.getEmployees().length){
      this._id=this._id+1;
    }else{
      this._id=1;
    }
    this._router.navigate(['/employee',this._id]);
  }
}
