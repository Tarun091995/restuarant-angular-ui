import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

   private baseurl = "http://localhost:8080/rest/reservation";

  constructor(private httpClient: HttpClient) {}

  createReservation(reservation: Object): Observable<Object>
  {
     const headers = new Headers();
     headers.append('Access-Control-Allow-Headers', 'Content-Type');
     headers.append('Access-Control-Allow-Methods', 'POST');
     headers.append('Access-Control-Allow-Origin', '*');
     console.log("Creating Reservation")
     console.log(reservation);
     return this.httpClient.post(this.baseurl, reservation);
  }

  getAllReservations(): Observable<any>
  {
      const headers = new Headers();
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Methods', 'POST');
      headers.append('Access-Control-Allow-Origin', '*');
      console.log("Getting All Reservation");
      //console.log(reservation);
      return this.httpClient.get(this.baseurl);

      //return this.httpClient.get('./assets/data/alldata.json');
  }

    reservationDetails(id: number): Observable<any>
    {
//         if(id == 1)
//         {
//           return this.httpClient.get('./assets/data/reservationOne.json');
//         }
//         else
//         {
//           return this.httpClient.get('./assets/data/reservationTwo.json');
//         }
      const headers = new Headers();
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Methods', 'GET');
      headers.append('Access-Control-Allow-Origin', '*');
      console.log("Getting All Reservation");
       return this.httpClient.get(this.baseurl + "/id/" + id);
    }

    cancelReservation(reservation: any): Observable<any>
    {
          console.log(reservation);
           console.log('in cancelReservation', reservation);
           const headers = new Headers();
           headers.append('Access-Control-Allow-Headers', 'Content-Type');
           headers.append('Access-Control-Allow-Methods', 'DELETE');
           headers.append('Access-Control-Allow-Origin', '*');
           console.log(this.baseurl + "/id/" + reservation.id);
           return this.httpClient.delete(this.baseurl+"/id/" + reservation.id);
    }

    updateReservation(reservation: Object) : Observable<Object>
    {
       const headers = new Headers();
       headers.append('Access-Control-Allow-Headers', 'Content-Type');
       headers.append('Access-Control-Allow-Methods', 'PUT');
       headers.append('Access-Control-Allow-Origin', '*');
       console.log("Creating Reservation")
       console.log(reservation);
       return this.httpClient.post(this.baseurl, reservation);
    }

    assignTable(id: number, tableNumber: number)
    {
            const headers = new Headers();
            headers.append('Access-Control-Allow-Headers', 'Content-Type');
            headers.append('Access-Control-Allow-Methods', 'PUT');
            headers.append('Access-Control-Allow-Origin', '*');
            console.log("Creating Reservation")
            return this.httpClient.put(this.baseurl + "/assignTable/id/" + id + "/tableNumber/ "+ tableNumber,null);
    }

    checkCode(confirmationCode: string): Observable<any>
    {
       const headers = new Headers();
       headers.append('Access-Control-Allow-Headers', 'Content-Type');
       headers.append('Access-Control-Allow-Methods', 'GET');
       headers.append('Access-Control-Allow-Origin', '*');
       console.log("Creating Reservation");
//        console.log(confirmationCode);
//        console.log(this.baseurl + "/confirmationCode/" + confirmationCode);
       return this.httpClient.get(this.baseurl + "/confirmationCode/" + confirmationCode);
    }



    getGuestDetails()
    {
            const headers = new Headers();
            headers.append('Access-Control-Allow-Headers', 'Content-Type');
            headers.append('Access-Control-Allow-Methods', 'GET');
            headers.append('Access-Control-Allow-Origin', '*');
            console.log("Getting All Guest Details");
            //console.log(reservation);
            return this.httpClient.get(this.baseurl + "/customerDetails");

     //     return this.httpClient.get('./assets/data/customerDetails.json');
    }

//     registerUser()
//     {
//                     const headers = new Headers();
//                     headers.append('Access-Control-Allow-Headers', 'Content-Type');
//                     headers.append('Access-Control-Allow-Methods', 'GET');
//                     headers.append('Access-Control-Allow-Origin', '*');
//                     console.log("Getting All Guest Details");
//     }
}
