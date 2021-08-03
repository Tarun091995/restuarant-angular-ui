import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/AuthInterceptor';
import { FormControl,FormGroup , FormArray , ReactiveFormsModule , FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { ViewReservationComponent } from './view-reservation/view-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AssignTableComponent } from './assign-table/assign-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule , NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    CustomerDetailsComponent,
    CreateReservationComponent,
    UpdateReservationComponent,
    ViewReservationComponent,
    ReservationListComponent,
    AssignTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbDatepickerModule,
    NgbDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
