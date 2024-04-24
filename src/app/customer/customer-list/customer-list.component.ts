import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from '../../shared/interfaces/customer';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  customers:Customer[]=[
    {
      id:1,
      name:"Ken"
    },
    {
      id:2,
      name:"Barbie"
    },
    {
      id:3,
      name:"Deadpool"
    }
  ]

  trackCustomer(index:number, customer:Customer){
    return customer.id;
  }
}
