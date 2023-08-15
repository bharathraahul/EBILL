import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  cust_id:number
  customer:Customer

  constructor(private route:ActivatedRoute, private customerService: CustomerService){
    
  }

  ngOnInit(): void{
    this.cust_id=this.route.snapshot.params['cust_id'];

    this.customer=new Customer();
    this.customerService.getCustomerbyId(this.cust_id).subscribe(data => {
      this.customer=data;
    });

    

  }

}
