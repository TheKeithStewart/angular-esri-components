import { Injectable, ElementRef, EventEmitter } from '@angular/core';
import { loadModules, loadScript } from 'esri-loader';
import { environment } from '../../environments/environment';

@Injectable()
export class EsriModuleProvider {
  constructor() {}

  require(moduleNames: string[]): Promise<any[]> {
    return loadScript({
      // the specific version of the API that is to be used
      url: environment.arcGisScriptUrl
    }).then(() => {
      return loadModules(moduleNames);
    });
  }
}
