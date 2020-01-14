import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { DetailEmployeesComponent } from './detail-employees/detail-employees.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'employess',
    component: ListEmployeesComponent
  },
  {
    path: 'employess-detail/:id',
    component: DetailEmployeesComponent
    // children: [
    //   {
    //     path: '',
    //     loadChildren: ''
    //   }]
  },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
