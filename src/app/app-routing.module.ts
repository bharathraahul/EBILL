import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {path: 'customers',component: CustomerListComponent},
  {path:'create-customer',component:CreateCustomerComponent},
  {path:'',redirectTo: 'customers', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
