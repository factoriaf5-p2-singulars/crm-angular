import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from '../../shared/interfaces/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
  customers!:Customer[];
  
  constructor(private customerService: CustomerService){}

  ngOnInit(): void {
    this.customers = this.customerService.getAllCustomers();
  }

  trackCustomer(index:number, customer:Customer){
    return customer.id;
  }
}
