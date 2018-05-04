import { TestBed, inject } from '@angular/core/testing';

import { AngularEsriComponentsService } from './angular-esri-components.service';

describe('AngularEsriComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularEsriComponentsService]
    });
  });

  it('should be created', inject([AngularEsriComponentsService], (service: AngularEsriComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
