/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Esri4MapService } from './esri4-map.service';

describe('Service: Esri4Map', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Esri4MapService]
    });
  });

  it('should ...', inject([Esri4MapService], (service: Esri4MapService) => {
    expect(service).toBeTruthy();
  }));
});
