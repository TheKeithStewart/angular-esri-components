import { Injectable, ElementRef, EventEmitter } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import { environment } from '../../environments/environment';

@Injectable()
export class EsriModuleProvider {
  constructor(private esriLoader: EsriLoaderService) { }

  require(moduleNames: string[]): Promise<any[]> {
    return this.esriLoader.load({
        // the specific version of the API that is to be used
        url: environment.arcGisScriptUrl
      }).then( () => {
              return this.esriLoader.loadModules(moduleNames);
      });
  }
}
