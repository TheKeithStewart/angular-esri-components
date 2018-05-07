import { Injectable, ElementRef, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';

@Injectable()
export class EsriModuleProvider {
  constructor() {}

  require(moduleNames: string[]): Promise<any[]> {
    return loadModules(moduleNames);
  }
}
