import { NgModule } from '@angular/core';
import { EsriLoaderModule } from 'angular-esri-loader';

import { AngularEsriComponentsComponent } from './angular-esri-components.component';
import { MapComponent } from './map/map.component';
import { EsriModuleProvider, EsriMapService } from './core';
import { CustomWidgetDirective } from './widgets/custom-widget/custom-widget.directive';
import { LayersToggleComponent } from './widgets/layers-toggle/layers-toggle.component';
import { SubLayersToggleComponent } from './widgets/layers-toggle/sub-layers-toggle/sub-layers-toggle.component';

@NgModule({
  imports: [
    EsriLoaderModule
  ],
  declarations: [AngularEsriComponentsComponent, MapComponent, CustomWidgetDirective, LayersToggleComponent, SubLayersToggleComponent],
  exports: [
    AngularEsriComponentsComponent,
    MapComponent,
    CustomWidgetDirective
  ],
  providers: [
    EsriModuleProvider,
    EsriMapService
  ]
})
export class AngularEsriModule { }
