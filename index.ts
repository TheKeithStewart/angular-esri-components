import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Esri4MapComponent } from './src/lib/esri4-map/esri4-map.component';

import { EsriLoaderService } from 'angular2-esri-loader';

export * from './src/lib/esri4-map/esri4-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Esri4MapComponent],
  exports: [Esri4MapComponent],
  providers: [EsriLoaderService]
})
export class Angular2Esri4Module { }