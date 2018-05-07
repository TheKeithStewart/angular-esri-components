import { Injectable, ElementRef, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import { environment } from '../../environments/environment';

@Injectable()
export class EsriModuleProvider {
  constructor() {}

  require(moduleNames: string[]): Promise<any[]> {
    return loadModules(moduleNames, {
      // the specific version of the API that is to be used
      url: environment.arcGisScriptUrl
    });
  }
}
