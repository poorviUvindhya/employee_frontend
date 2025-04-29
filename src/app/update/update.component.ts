import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-update',
  imports: [NgModel,FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  
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
          Swal.fire({
            icon: 'error',
            title: 'Employee Not Found',
            text: 'No employee found with the provided ID.',
          });
        }
      );
    }
  }

  onUpdateSubmit(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee).subscribe(
        (updatedEmployee) => {
          this.employee = updatedEmployee;
          Swal.fire({
            icon: 'success',
            title: 'Employee Updated',
            text: 'Employee details have been successfully updated.',
          });
        },
        (error) => {
          console.error('Error updating employee data', error);
          Swal.fire({
            icon: 'error',
            title: 'Update Failed',
            text: 'There was an error while updating employee details.',
          });
        }
      );
    }
  }
}
