import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { IncidentService } from './incident';

describe('IncidentService', () => {
  let service: IncidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IncidentService,
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(IncidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of incidents', (done) => {
    service.getIncidents().subscribe(incidents => {
      expect(incidents.length).toBeGreaterThan(0);
      expect(incidents[0].title).toBeDefined();
      done();
    });
  });
});
