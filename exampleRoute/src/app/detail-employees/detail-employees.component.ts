import { Component, OnInit } from '@angular/core';
import { Employees } from '../Model/employees';
import { EmployeesService } from '../service/employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-employees',
  templateUrl: './detail-employees.component.html',
  styleUrls: ['./detail-employees.component.css']
})
export class DetailEmployeesComponent implements OnInit {
public employees:Employees;
  constructor(private serviceEmployees:EmployeesService, private router:ActivatedRoute) { }

  ngOnInit() {
    const id = +this.router.snapshot.paramMap.get('id')
    this.serviceEmployees.getDetailId(id).subscribe(data=>this.employees = data)
  }

}
