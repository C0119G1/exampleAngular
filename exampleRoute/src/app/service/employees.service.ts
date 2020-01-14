import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employees } from "../Model/employees";
@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  private apiUrl = "http://5e1c33e9db8a52001414cb50.mockapi.io/employees";
  constructor(private http: HttpClient) {}

  getList(): Observable<any[]> {
    return this.http.get<Employees[]>(`${this.apiUrl}`);
  }
  getDetailId(id: number) {
    return this.http.get<Employees>(`${this.apiUrl}/${id}`);
  }
}
