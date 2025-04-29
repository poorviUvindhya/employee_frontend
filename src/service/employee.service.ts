import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../model/employee.model";

@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    private apiurl='http://localhost:8080/employee/get-all';

    constructor(private http:HttpClient){}

    getAllEmployee():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.apiurl)
    }

}