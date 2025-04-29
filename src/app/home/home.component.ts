import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  employees:Employee[]=[];

  constructor(private employeeservice:EmployeeService){}

  ngOnInit(): void {
    this.employeeservice.getAllEmployee().subscribe(data=>{
      this.employees=data;
    });
  }

}
