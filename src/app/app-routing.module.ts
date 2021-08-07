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
import { HomeComponent } from './home/home.component';
import { SeatingComponent } from './seating/seating.component';
import { UpdateOnCodeComponent } from './update-on-code/update-on-code.component'
import { ListCustomerReservationComponent } from './list-customer-reservation/list-customer-reservation.component';

const routes: Routes = [
{ path: "", component: HomeComponent },
{ path: "login" , component: LoginComponent },
{ path: "create-reservation" , component: CreateReservationComponent },
{ path: "register" , component: RegisterComponent },
{ path: "customerDetails" , component: CustomerDetailsComponent },
{ path: "AllReservations" , component: ReservationListComponent },
{ path: "updateReservation/:id" , component: UpdateReservationComponent },
{ path: "assignTable/:id" , component: AssignTableComponent },
{ path: "profile" , component: ProfileComponent },
{ path: "seating" , component: SeatingComponent },
{ path: "updateOnCode" , component: UpdateOnCodeComponent },
{ path: "confirmationCode/:id" , component: ListCustomerReservationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
