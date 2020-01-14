import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/Model/employees';
import { EmployeesService } from 'src/app/service/employees.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class EmployeesComponent implements OnInit {
public employees: Employees[];
  constructor(private serviceEmployees:EmployeesService) { }

  ngOnInit() {
    this.serviceEmployees.getList().subscribe(
      data=>this.employees = data,
      error => alert(Error));
  }

}
