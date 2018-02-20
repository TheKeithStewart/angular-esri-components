# angularx-esri-components
[![npm version](https://badge.fury.io/js/angularx-esri-components.svg)](https://badge.fury.io/js/angularx-esri-components)

This is a beta version!
Examples coming soon...

A set of Angular components to work with  angular5 and [ArcGIS API for JavaScript v4.6](https://developers.arcgis.com/javascript/)

## Setup

```
npm install --save angularx-esri-components
```

## Component status:

| Component          | Status                              | Docs         | Issue          |
|--------------------|-------------------------------------|--------------|----------------|
| esri-map           |                           Available | [README][1]  |              - |
| EsriModuleProvider |                           Available | see below    |              - |
| esri-legend        |                         Not Started |              |              - |
| esri-layerList     |                         Not Started |              |              - |
| esri-customWidget  |                           Available | [README][2]  |      [#4][004] |
| esri-layersToggle  |                           Available | [README][3]  |      [#6][006] |
| (more coming)      |                                     |              |              - |

 [1]: https://github.com/JordeyWijnbergen/angularx-esri-components/blob/master/src/lib/esri-map/README.md
 [2]: https://github.com/JordeyWijnbergen/angularx-esri-components/blob/master/src/lib/widgets/custom-widget/README.md
 [3]: https://github.com/JordeyWijnbergen/angularx-esri-components/blob/master/src/lib/widgets/layers-toggle/README.md

 [004]: https://github.com/JordeyWijnbergen/angularx-esri-components/issues/4
 [006]: https://github.com/JordeyWijnbergen/angularx-esri-components/issues/6
 
## Setup

**Note:** It is no longer necessary to add an import statement into your `index.html` file for the ESRI CSS.  This has been included in the styles for the map component.  If you have an existing import of the ESRI CSS in your application you should remove it.

Include `AngularEsriModule` in your main module:

```ts
// ...

import { AngularEsriModule } from 'angularx-esri-components';

@NgModule({
  // ...
  imports: [
    AngularEsriModule
  ],
  // ...
})
export class AppModule { }

```


Module provider Example:

Prerequisite for this example is a map available see example 

file: esri-map.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { promise } from 'selenium-webdriver';
import { EsriMapService } from 'angularx-esri-components/src/lib/core';
import { EsriModuleProvider } from 'angularx-esri-components/src/lib/core';


@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html', //see html section below
  styleUrls: ['./esri-map.component.css'] // see css section below
})

export class EsriMapComponent implements OnInit {
  webMapProperties: __esri.WebMapProperties = {
  //  basemap: 'dark-gray'
  portalItem: {
    id: 'ad5759bf407c4554b748356ebe1886e5'
  }
  };
  mapViewProperties: __esri.MapViewProperties = {
    zoom: 4,
  };
  map: __esri.Map;
  mapView: __esri.MapView;
  testInfo: string;
  prop: __esri.Collection<__esri.FeatureLayerSource> ;

  constructor(private mapService: EsriMapService, private moduleProvider: EsriModuleProvider) {
    this.testInfo = 'No Info yet';
    console.log('constructor esri-ap-cop');
  }

  ngOnInit() {
   }

   buttonClick(event) {
    this.testInfo = String(this.getLayerCount(this.map));
  }

  getLayerCount(map: __esri.Map): Number {
    return map.allLayers.length;
  }

  loadMapLayerCount(watchUtils: __esri.watchUtils) {
    const orig = this;
    watchUtils.whenOnce(this.map, 'allLayers.length', function(newValue, oldValue, property, object) {
    console.log('New value: ', newValue,      // The new value of the property
                '<br>Old value: ', oldValue,  // The previous value of the changed property
                '<br>Watched property: ', property,  // In this example this value will always be "basemap.title"
                '<br>Watched object: ', object);     // In this example this value will always be the map object
                orig.testInfo = String(orig.getLayerCount(orig.map));
              });
  }

  onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView}) {
    this.map = mapInfo.map;
    this.mapView = mapInfo.mapView;

    this.moduleProvider.require(['esri/core/watchUtils'])
      .then(([watchUtils]) => {
          this.loadMapLayerCount(watchUtils);
      });


      this.moduleProvider.require(['esri/widgets/Search'])
      .then(([Search]: [__esri.SearchConstructor]) => {
            const lyrs = [{
              locator: { url: 'https://services.arcgisonline.nl/arcgis/rest/services/Geocoder_BAG_RD/GeocodeServer' },
              singleLineFieldName: 'SingleLine',
              outFields: ['Adres', 'Postcode'],
              name: 'test',
              placeholder: 'test placeholder',
    }];
    this.ComposeSearch(Search, lyrs);

      });

      console.log('Finished map init');
   }

  private ComposeSearch(Search: __esri.SearchConstructor, prop: Array<any>) {

    const search = new Search( {
        view: this.mapView,
        sources: prop
       }
    );

    this.mapView.ui.add(search, {
      position: 'top-left',
      index: 2
    });
  }
}

```

file: ./esri-map.component.html
```html
<button class="btn btn-outline-secondary" (click)="buttonClick($event)">Test</button>
<div class="map">
    <esri-map [webMapProperties]="webMapProperties" [mapViewProperties]="mapViewProperties" (mapInit)="onMapInit($event)"></esri-map>
</div>

<esri-layersToggle position="top-right"></esri-layersToggle>

<div style="color:red" esri-customWidget position="bottom-left" width="100">test info: {{testInfo}}</div>
```
file: ./esri-map.component.css
```css
.map {
    height: calc(100% - 35px);
}
```