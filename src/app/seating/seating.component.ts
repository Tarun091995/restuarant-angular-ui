import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/Reservation';
import {Observable } from 'rxjs';
import { Router,ActivatedRoute  } from '@angular/router';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit {

   reservations: Observable<Reservation[]>;
   constructor(private reservationService: ReservationService , private route: ActivatedRoute ,  private router: Router) { }

   ngOnInit(): void {
   this.getallReservations();
    }

      getallReservations()
      {
          this.reservations = this.reservationService.getAllReservationsForSeating();
      }
        assignTable(id: number)
        {
            this.router.navigate(['assignTable',id]);
        }
}
