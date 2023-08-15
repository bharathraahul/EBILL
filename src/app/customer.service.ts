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

  private deleteURL = "http://localhost:8084/ebilling/admin/deleteCustomer";

  private getByIdURL = "http://localhost:8084/ebilling/viewCustomerById";

  constructor(private httpClient:HttpClient) { }

  getCustomersList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);

  }

  createCustomer(customer:Customer): Observable<Object>{
    return this.httpClient.post(`${this.postURL}`,customer);

  }

  getCustomerbyId(cust_id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.getByIdURL}/${cust_id}`);
  }

  deleteCustomer(cust_id:number): Observable<Object>{
    console.log(cust_id);
    return this.httpClient.delete(`${this.deleteURL}/${cust_id}`);
    
  }

}
