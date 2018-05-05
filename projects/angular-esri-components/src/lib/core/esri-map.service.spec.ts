import { TestBed, inject } from '@angular/core/testing';

import { EsriMapService } from './esri-map.service';
import { EsriModuleProvider } from '../core/esri-module-provider';
import { MockEsriModuleProvider } from './../../testing';

describe('EsriMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EsriMapService,
        { provide: EsriModuleProvider, useClass: MockEsriModuleProvider }
      ]
    });
  });

  it('should be created', inject([EsriMapService], (service: EsriMapService) => {
    expect(service).toBeTruthy();
  }));
});
