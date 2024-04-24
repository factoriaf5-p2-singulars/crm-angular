import { Injectable } from '@angular/core';
import { customers } from '../data/customers';
import { Customer } from '../shared/interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  getAllCustomers(){
    return customers
  }

  getCustomerById(id:number):any{
    return customers.find((customer:Customer)=>{
      customer.id === id;
    })
  }

}
