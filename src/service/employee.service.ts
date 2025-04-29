import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../model/employee.model";

@Injectable({
    providedIn:'root'
})

export class EmployeeService{
   

    constructor(private http:HttpClient){}

    getAllEmployee():Observable<Employee[]>{
        return this.http.get<Employee[]>('http://localhost:8080/employee/get-all')
    }

    addEmpoyee(employee:Employee):Observable<Employee>{
        return this.http.post<Employee>('http://localhost:8080/employee/add',employee);
    }

    updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>('http://localhost:8080/employee/update-employee', employee);
      }      

      getEmployeeById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`http://localhost:8080/employee/search-by-id/${id}`);
      }

      deleteEmployee(id: number): Observable<void> {
        return this.http.delete<void>(`http://localhost:8080/employee/delete/${id}`);
      }
      
}