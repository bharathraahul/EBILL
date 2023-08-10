import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  private baseURL ="http://localhost:8084/ebilling/admin/viewAllCustomers";

  private postURL ="http://localhost:8084/ebilling/signup";
  constructor(private httpClient:HttpClient) { }

  getCustomersList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);

  }

  saveCustomer(customer:Customer): Observable<Object>{
    return this.httpClient.post(`${this.postURL}`,customer);

  }
}
