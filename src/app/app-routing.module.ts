import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { EmpleadoformComponent } from './components/empleadoform/empleadoform.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'listuser'
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'listuser',
    component: UserlistComponent
  },
  {
    path:'empleado',
    component: EmpleadoformComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
