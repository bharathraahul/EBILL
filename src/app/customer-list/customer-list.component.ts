import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers:Customer[];
  
  constructor(private customerService: CustomerService){}

  ngOnInit(): void{

    this.getCustomers();

  }

  private getCustomers(){
    this.customerService.getCustomersList().subscribe(data =>{
      this.customers = data;
    })
  }
  //   this.customers=[
  //     {
  //       "cust_id":123,
  //       "user_id":101,
  //       "name":"Raahul",
  //       "address":"BLR",
  //       "phone":89080803,
  //       "meter_id":2020,
  //       "email":"bharath@gmail.com",
  //       "password":"Bharath"
  //   },

  //   {
  //     "cust_id":124,
  //     "user_id":103,
  //     "name":"John",
  //     "address":"BLR",
  //     "phone":890777703,
  //     "meter_id":2021,
  //     "email":"John@gmail.com",
  //     "password":"John WIck"
  // }
  // ];


}
