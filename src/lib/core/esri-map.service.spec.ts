/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EsriMapService } from './esri-map.service';

describe('Service: EsriMap', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsriMapService]
    });
  });

  it('should ...', inject([EsriMapService], (service: EsriMapService) => {
    expect(service).toBeTruthy();
  }));
});
