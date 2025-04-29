import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee.model';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete',
  imports: [CommonModule,FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  employeeId: number | null = null;
  employee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          alert('Employee deleted successfully');
          this.employee = null;
          this.employeeId = null;
        },
        error: (err) => {
          console.error('Delete failed:', err);
          alert('Failed to delete employee');
        }
      });
    }
  }
}
