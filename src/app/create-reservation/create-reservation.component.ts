import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Reservation } from '../models/Reservation';
import { Observable } from 'rxjs';
//import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})


export class CreateReservationComponent implements OnInit
 {

    isSuccessful = false;
    iscreateRegistrationFailed = false;
    errorMessage = '';

    reservation: Reservation = new Reservation();
    submitted = false;

    datePipe = new DatePipe('en_US');

    constructor(public formbuilder: FormBuilder,
    private reservationService: ReservationService)
    {

    }

    ngOnInit(): void {}

  newReservation(): void {
    this.submitted = false;
    this.reservation = new Reservation();
  }

  onSubmit()
  {
      this.createReservation();
  }

  createReservation()
  {
       console.log(this.reservation.reservationTime.year);
       console.log(this.reservation.reservationTime.month);
       console.log(this.reservation.reservationTime.day);

      this.reservationService.createReservation(this.reservation).subscribe(data => {
      console.log(data);
      this.isSuccessful = true;
      this.iscreateRegistrationFailed = false;
      },
      error =>console.log(error));
  }
}
