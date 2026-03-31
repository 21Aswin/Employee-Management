import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerListComponent } from './worker-list/worker-list.component';
import * as path from 'path';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

const routes: Routes = [
  {path:'employee-list', component:WorkerListComponent},
  { path: '', redirectTo: 'employee-list', pathMatch: 'full' },
  {path:'create', component:CreateEmployeeComponent},
  {path:'update/:id', component:UpdateEmployeeComponent},
  {path:'delete', component:DeleteEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
