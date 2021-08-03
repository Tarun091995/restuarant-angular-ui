import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Reservation } from '../models/Reservation';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-assign-table',
  templateUrl: './assign-table.component.html',
  styleUrls: ['./assign-table.component.css']
})
export class AssignTableComponent implements OnInit {

   isSuccessful = false;
   iscreateRegistrationFailed = false;
   errorMessage = '';

  reservation: Reservation = new Reservation();
  submitted:boolean = false;
  id: number;
  tableNumber: number;

 public readonly  tablenumbers: number[] = [1,2,3,4];

  constructor( private reservationService: ReservationService ,private route: ActivatedRoute , private router: Router ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.reservationService.reservationDetails(this.id).subscribe(data =>{
      console.log(data)
      this.reservation = data;
      },error => console.log(error));
  }

      onSubmit()
      {
          this.assignTable();
      }

      assignTable()
       {
//           this.tableNumber
           this.reservationService.assignTable(this.reservation.id,this.tableNumber).subscribe(data => {
           console.log("Table number ",this.tableNumber);
           console.log("reservation id",this.reservation.id);

                             this.isSuccessful = true;
                             this.iscreateRegistrationFailed = false;
           //this.reservation = data;
      },error =>console.log(error));
      }



}
