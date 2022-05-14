import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'app/models/employee/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',

})
export class CreateEmployeeComponent implements OnInit {
  // when want to reset form
  @ViewChild('formEmployee')
  public createEmployeeForm: NgForm;

  cardTitle:string ;
  itemLanguageEn: string;
  itemLanguageAr: string;
  itemPhoneNumber: string;

  addNameEn(newItem: string) {
    this.itemLanguageEn = newItem;
  }
  addNameAr(newItem: string) {
    this.itemLanguageAr = newItem;
  }
  addPhoneNumber(newItem: string) {
    this.itemPhoneNumber = newItem;
  }

  // dateOfBirth: Date;
  //select
  departments: any = [
    { id: 1, name: "Help Disk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Paroll" },
    { id: 5, name: "Adminstration" },
  ];
  employee: Employee;
  showPhotohere = false;

  showPhoto() {
    this.showPhotohere = !this.showPhotohere;
  }
  datePickerConfig: Partial<BsDatepickerConfig>;
  maxDate: Date;

  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
    this.datePickerConfig = {
      containerClass: 'theme-orange',
      dateInputFormat: 'DD-MM-YYYY',
      showWeekNumbers: false,
      isAnimated: true,
      minDate: new Date(1990, 0, 1),
    };
    this.maxDate = new Date();
    this.maxDate = new Date(this.maxDate.setDate(this.maxDate.getDate() + 7))
  }

  // onChangeDate(_event: any,dateChange: string) {
  //   this.dateOfBirth = new Date(dateChange);
  // }
  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    })
  }
  // shown value of employee  الفينكشن فايدتها تعبي ال employe  only
  private getEmployee(id: number) {
    //create
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        contactPreference: null,
        dateOfBirth: null,
        department: 'select',
        isActive:null,
        gender: '',
        photoPath: null
      };
      this.cardTitle="Create Employee";
      this.createEmployeeForm.reset();
     
      // update
    }else{
      this.cardTitle="Update Employee";
      this.employee=Object.assign({}, this._employeeService.getEmployeeId(id));
    }

  }
  saveEmployee(empform: NgForm): void {
    // click submit and not enter data yet
    debugger;
    if (empform.invalid) {
      for (let controlsKey in empform.controls) {
        empform.controls[controlsKey].markAsTouched();
      }
    }
    //using object not refernce to object by copy from object
    const newEmployee: Employee = Object.assign({}, this.employee);
    this._employeeService.save(newEmployee);
    this.createEmployeeForm.reset({
      // name:'test name',
      // contactPreference: 'Phone'
    });
    this._router.navigate(['list']);
  }



}

