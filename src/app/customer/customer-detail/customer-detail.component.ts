import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss'
})
export class CustomerDetailComponent implements OnInit{
  @Input() id!:string;
  customer!: string;
  
  ngOnInit(): void {
    this.customer = this.id
  }
}
