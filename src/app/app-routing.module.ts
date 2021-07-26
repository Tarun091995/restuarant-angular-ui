import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { RegisterComponent } from './register/register.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ReservationListComponent } from  './reservation-list/reservation-list.component';
import { UpdateReservationComponent } from  './update-reservation/update-reservation.component';
import { AssignTableComponent } from  './assign-table/assign-table.component';
import { ProfileComponent } from  './profile/profile.component';


const routes: Routes = [
{ path: "login" , component: LoginComponent },
{ path: "create-reservation" , component: CreateReservationComponent },
{ path: "register" , component: RegisterComponent },
{ path: "customerDetails" , component: CustomerDetailsComponent },
{ path: "AllReservations" , component: ReservationListComponent },
{ path: "updateReservation/:id" , component: UpdateReservationComponent },
{ path: "assignTable/:id" , component: AssignTableComponent },
{ path: "profile" , component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
