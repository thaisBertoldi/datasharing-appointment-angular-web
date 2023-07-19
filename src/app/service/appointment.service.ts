import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
  ) { }

  getAllAppointments(): Observable<any> {
    const url = `${this.baseUrl}/appointments/`;
    return this.http.get<any>(url);
  }
}
