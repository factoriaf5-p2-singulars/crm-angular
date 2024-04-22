import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'',
                component:DashboardComponent
            },
            {
                path:'dashboard',
                redirectTo:''
            },
            {
                path:'customer',
                component:CustomerListComponent
            },
            {
                path:'order',
                component:OrderListComponent
            },
            {
                path:'product',
                component:ProductListComponent
            },

        ]
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'**',
        component:NotfoundpageComponent
    }
];
