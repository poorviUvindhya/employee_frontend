import { Component } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  employeeId: number | null = null;
  employee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  onSearchSubmit(): void {
    if (this.employeeId !== null) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe(
        (data) => {
          this.employee = data;
        },
        (error) => {
          console.error('Error fetching employee data', error);
         
        }
      );
    }
  }
}
