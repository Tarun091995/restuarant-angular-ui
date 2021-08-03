import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Reservation } from '../models/Reservation';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

   isSuccessful = false;
   iscreateRegistrationFailed = false;
   errorMessage = '';

  reservation: Reservation = new Reservation();
  submitted:boolean = false;
  id: number

  constructor(private route: ActivatedRoute ,private reservationService: ReservationService, private router: Router) {
   }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.reservationService.reservationDetails(this.id).subscribe(data =>{
    console.log(data)
    this.reservation = data;
    },error => console.log(error));
  }

    onSubmit()
    {
        this.updateReservation();
    }

    updateReservation()
    {
      this.reservation.reservationTime = new Date(this.reservation.reservationTime.year,
      this.reservation.reservationTime.month,this.reservation.reservationTime.day)

            this.reservationService.updateReservation(this.reservation).subscribe(data => {
            console.log(data);
                  this.isSuccessful = true;
                  this.iscreateRegistrationFailed = false;
    },
    error =>console.log(error));
}
}
