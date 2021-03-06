import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/Reservation';
import {Observable } from 'rxjs';
import { Router,ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Observable<Reservation[]>;
  constructor(private reservationService: ReservationService , private route: ActivatedRoute ,  private router: Router) { }

  ngOnInit(): void {
  this.getallReservations();
   }


  getallReservations()
  {
      this.reservations = this.reservationService.getAllReservations();
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
