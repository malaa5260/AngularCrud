import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
//import bootstrap 
import { NgbModule ,NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
//import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// import components
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './models/employee/notfound/notfound.component';
import { DirectiveModule } from './directive/directive.module';
import { SelectvalidatorrequiredDirective } from './directive/directives/selectvalidatorrequired.directive';
import { ConfirmpasswordDirective } from './directive/directives/confirmpassword.directive';
import { DispalyEmployeeComponent } from './employee/dispaly-employee/dispaly-employee.component';
import { TestComponent } from './test/test.component';
//import guards
import { CanDeactivateGuard } from './guards/can-deactivate-guard.guard';
import { EmployeedetailsComponent } from './employee/employee-details/employeedetails.component';
import { EmployeeFilterPipe } from './pipe/employee-filter.pipe';


const appRoutes:Routes=[
  { path: 'list', component: ListEmployeesComponent },
  { path: 'test', component: TestComponent },
  { path: 'create', component: CreateEmployeeComponent, 
     canDeactivate:[CanDeactivateGuard]
  },
  { path: 'employee/:id', component: EmployeedetailsComponent },
  { path:'' , redirectTo:'/list', pathMatch:'full' },
  { path:'**' , component:NotfoundComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    NavbarComponent,
    NotfoundComponent,
    SelectvalidatorrequiredDirective,
    ConfirmpasswordDirective,
    DispalyEmployeeComponent,
    EmployeedetailsComponent,
    TestComponent,
    EmployeeFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    NgbDatepickerModule,
    BsDatepickerModule.forRoot(),
    DirectiveModule,
    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
