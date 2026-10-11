import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncidentService } from '../../../../core/services/incident';
import { Incident } from '../../../../core/models/incident.model';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss'
})
export class DashboardPageComponent implements OnInit {
  private incidentService = inject(IncidentService);

  // Declaramos el signal para las incidencias
  incidents = signal<Incident[]>([]);

  // Signal para el buscador
  searchTerm = signal('');

  // Computed para el filtrado reactivo
  filteredIncidents = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.incidents().filter(inc =>
      inc.title.toLowerCase().includes(term)
    );
  });

  ngOnInit(): void {
    // Nos suscribimos al servicio para poblar el signal de forma segura
    this.incidentService.getIncidents().subscribe({
      next: (data) => this.incidents.set(data),
      error: (err) => console.error('Error al cargar incidencias', err)
    });
  }
}
