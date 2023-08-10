import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {}
//   registerForm!:FormGroup
//   submitted = false;
  
  
//   customer: Customer = new Customer();

//   constructor(private customerService: CustomerService,
//     private router: Router,
//     private formbilder:FormBuilder) {}

//     ngOnInit()  {
//       this.registerForm = this.formbilder.group({
//         cust_id:['',[Validators.required,Validators.minLength(4)]],
//         :['',[Validators.required,Validators.minLength(4)]],
//         mobile:['',Validators.required],
//         email:['',[Validators.required,Validators.email]],
//         address:['',Validators.required],
//         userName:['',Validators.required],
//         password:['',[Validators.required,Validators.minLength(4)]]

//       })
      
//     }
//   saveConsumer(){
//     this.consumerService.addConsumer(this.consumer).subscribe(data => {
//       //console.log(data);
//       this.gotoConsumerList();
//     },
//     error => console.log(error));
//   }

//   gotoConsumerList(){
//     this.router.navigate(['/consumers']);
//   }
//   onSubmit(){
//     this.saveConsumer();
//     //console.log(this.consumer);
//     this.router.navigate(['login']);

//   }

//   cancel(){
//     this.router.navigate(['home']);
//   }
  

// }
