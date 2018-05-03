import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EsriMapComponent,
  EsriMapService,
  CustomWidgetDirective,
  LayersToggleComponent,
  SubLayersToggleComponent,
  EsriModuleProvider
} from './lib/index';
import { EsriLoaderModule } from 'angular-esri-loader';

export * from './lib/esri-map/esri-map.component';
export * from './lib/core/esri-module-provider';

@NgModule({
  imports: [
    CommonModule,
    EsriLoaderModule
  ],
  declarations: [
    EsriMapComponent,
    CustomWidgetDirective,
    LayersToggleComponent,
    SubLayersToggleComponent
  ],
  exports: [
    EsriMapComponent,
    CustomWidgetDirective,
    LayersToggleComponent
  ],
  providers: [
    EsriMapService,
    EsriModuleProvider
  ]
})
export class AngularEsriModule { }
