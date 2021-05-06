import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employees: any;
  constructor(private service: EmployeeService) {
    this.getEmployees();
  }
  addEmployee(employee: any) {
    //debugger;
    this.service.addEmployeeData(employee).subscribe((response) => {
      console.log('printing response' + JSON.stringify(response));
      this.employees.push(employee);
      let employees = [...this.employees, employee];
      console.log(employees);
      this.employees = employees;
    });
  }

  ngOnInit(): void {
    this.getEmployees();
  }
  
  getEmployees() {
    this.service.getEmployeeData().subscribe((response) => {
      this.employees = response;
      console.log('printing employees' + this.employees);
    });
  }
}
