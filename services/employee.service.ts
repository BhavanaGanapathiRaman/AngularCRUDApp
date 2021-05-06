import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  endpointUrl = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) {}
  getEmployeeData() {
    return this.http.get(this.endpointUrl);
  }
  addEmployeeData(employee: any) {
    let headers = new HttpHeaders();
    headers = headers.append('content-type', 'application/json');
    return this.http.post(this.endpointUrl, JSON.stringify(employee), {
      headers: headers,
    });
  }
}
