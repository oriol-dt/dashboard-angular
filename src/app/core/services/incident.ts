import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Incident } from '../models/incident.model';


@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private http = inject(HttpClient);

  getIncidents(): Observable<Incident[]> {
    const mockIncidents: Incident[] = [
      { id: 1, title: 'Error en pasarela de pago', priority: 'HIGH', status: 'PENDING' },
      { id: 2, title: 'Actualización de certificados SSL', priority: 'MEDIUM', status: 'PENDING' },
      { id: 3, title: 'Lentitud en consulta SQL de usuarios', priority: 'HIGH', status: 'RESOLVED' },
      { id: 4, title: 'Caída total del cluster de Kubernetes', priority: 'URGENT', status: 'PENDING' },
    ];
    return of(mockIncidents);
  }
}
