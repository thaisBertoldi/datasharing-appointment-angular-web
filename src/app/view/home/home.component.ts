import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appointmentList: [];

  constructor(
    private service: AppointmentService
  ) { }

  ngOnInit(): void {
    this.service.getAllAppointments().subscribe(res =>
      console.log(res), err => console.log(err));
  }

}
