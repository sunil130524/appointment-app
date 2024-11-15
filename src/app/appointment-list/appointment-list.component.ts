import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  appointmentTitle = ''
  appointmentDate = new Date()
  appointments: Appointment[] = []

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem('appointments');
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }

  addAppointment() {
    if(this.appointmentTitle.trim().length && this.appointmentDate) {
      this.appointments.push({
        id: Date.now(),
        title: this.appointmentTitle,
        date: this.appointmentDate
      })

      localStorage.setItem('appointments', JSON.stringify(this.appointments));

      this.appointmentTitle = ''
      this.appointmentDate = new Date()
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
