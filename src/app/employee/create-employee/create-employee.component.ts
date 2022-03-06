import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'app/models/employee/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from '../../services/employee.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
 
})
export class CreateEmployeeComponent implements OnInit {
  
  @ViewChild('formEmployee')
  public createEmployeeForm:NgForm;


  itemLanguageEn:string;
  itemLanguageAr:string;
  itemPhoneNumber:string;

  addNameEn(newItem: string) {
    this.itemLanguageEn=newItem;
  }
  addNameAr(newItem: string) {
    this.itemLanguageAr=newItem;
  }
  addPhoneNumber(newItem: string) {
    this.itemPhoneNumber=newItem;
  }

  dateOfBirth:Date;
  //select
  departments:any=[
    {id:1,name:"Help Disk"},
    {id:2,name:"HR"},
    {id:3,name:"IT"},
    {id:4,name:"Paroll"},
    {id:5,name:"Adminstration"},
  ];
  employee:Employee= {
    id: 0,
    name: '',
    contactPreference: '',
    dateOfBirth: new Date(),
    department: '',
    isActive: false,
    gender: '',
    photoPath:''
  }
  showPhotohere=false;

  showPhoto(){
   this.showPhotohere=!this.showPhotohere;
  }
  datePickerConfig: Partial<BsDatepickerConfig>;
  maxDate: Date;
 
  constructor(private _employeeService:EmployeeService,private _router:Router) { 
   this.datePickerConfig = { 
   containerClass:'theme-orange',
   dateInputFormat: 'DD-MM-YYYY',
   showWeekNumbers: false,
   isAnimated:true,
   minDate:new Date(1990,0,1),
  };
  this.maxDate = new Date();
  this.maxDate=new Date(this.maxDate.setDate(this.maxDate.getDate()+7))
  }
  
  // onChangeDate(_event: any,dateChange: string) {
  //   this.dateOfBirth = new Date(dateChange);
  // }
  
  saveEmployee(empform:NgForm):void{
    // click submit and not enter data yet
    debugger;
    if (empform.invalid) {
      for (let controlsKey in empform.controls) {
        empform.controls[controlsKey].markAsTouched();
      }
    
      
    }
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
  
  ngOnInit(): void {
    
  }

}

