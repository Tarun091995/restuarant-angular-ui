import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/Reservation';
import {Observable } from 'rxjs';
import { Router,ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-list-customer-reservation',
  templateUrl: './list-customer-reservation.component.html',
  styleUrls: ['./list-customer-reservation.component.css']
})
export class ListCustomerReservationComponent implements OnInit {

confirmationCode: any;
  reservations: Observable<Reservation[]>;
  constructor(private reservationService: ReservationService , private route: ActivatedRoute ,  private router: Router) { }

  ngOnInit(): void {
     this.confirmationCode = this.route.snapshot.params['id'];
     console.log(this.confirmationCode);
     this.getallReservationsForConfirmationCode(this.confirmationCode);
   }


  getallReservationsForConfirmationCode(confirmationCode: any)
  {
      this.reservations = this.reservationService.checkCode(confirmationCode);
  }

    cancelReservation(reservation: any)
    {
        console.log("Fetching the reservation details for " + reservation);
        this.reservationService.cancelReservation(reservation).subscribe(data => {
        console.log(data);
        },
         error =>console.log(error));
    }

      reservationDetails(id: number)
      {
           console.log("Fetching the reservation details for " + id);
           this.router.navigate(['updateReservation',id]);
      }

      assignTable(id: number)
      {

          this.router.navigate(['assignTable',id]);
      }
}


