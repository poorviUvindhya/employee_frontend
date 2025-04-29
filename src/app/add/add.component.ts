import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { CommonModule } from '@angular/common';
import { department } from '../../util/departmenttype';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  imports: [CommonModule,FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  selectedDepartment: string = '';
  departments: string[] = ['HR', 'IT', 'FINANCE', 'OPERATION'];

  constructor(private employeeService: EmployeeService) {}

  selectDepartment(dept: string) {
    this.selectedDepartment = dept;
  }

  submitForm(event: Event) {
    event.preventDefault();

    const id = null;
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();

    if (!name || !email || !this.selectedDepartment) {
      Swal.fire('Error', 'All fields are required', 'error');
      return;
    }

    const employeeData: Employee = {
      id, name, email, department: this.selectedDepartment,
      createdAt: '',
      updatedAt: ''
    };

    this.employeeService.addEmpoyee(employeeData).subscribe({
      next: () => {
        Swal.fire('Success', 'Employee registered successfully!', 'success');
      },
      error: (err) => {
        let errorMessage = 'An unexpected error occurred';
        if (err.status === 400 && err.error) {
          try {
            const errorObj = typeof err.error === 'string' ? JSON.parse(err.error) : err.error;
            errorMessage = Object.values(errorObj).join('<br>');
          } catch (e) {
            console.error('JSON parsing error:', e);
          }
        }
        Swal.fire('Error', errorMessage, 'error');
      },
    });
  }
}
