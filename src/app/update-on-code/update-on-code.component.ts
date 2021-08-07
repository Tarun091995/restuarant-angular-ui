import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/Reservation';
import { Router,ActivatedRoute  } from '@angular/router';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-update-on-code',
  templateUrl: './update-on-code.component.html',
  styleUrls: ['./update-on-code.component.css']
})
export class UpdateOnCodeComponent implements OnInit {

  isnull = false;
  isnotnull = false;

  reservation : Reservation = new Reservation();

  constructor(private route: ActivatedRoute ,private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
  console.log();
  }

  onSubmit()
  {
      this.checkcode();
  }

  checkcode()
  {
      this.router.navigate(['confirmationCode',this.reservation.confirmationCode]);
//     this.reservationService.checkCode(this.reservation.confirmationCode).subscribe(data => {
//
//
//
//
// if(data == null)
// {
//   this.isnull = true;
// }
//     },
//     error =>console.log(error));
   }
}
