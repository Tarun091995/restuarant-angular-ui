import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import { Router,ActivatedRoute  } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

 reservations: any;
  constructor(private reservationService: ReservationService , private route: ActivatedRoute ,  private router: Router) { }

  ngOnInit(): void {
    this.getGuestDetails();
  }

  getGuestDetails()
  {
      this.reservations = this.reservationService.getGuestDetails();
  }

}
