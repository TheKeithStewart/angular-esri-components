# angular-esri-components
[![npm version](https://badge.fury.io/js/angular-esri-components.svg)](https://badge.fury.io/js/angular-esri-components)

A set of Angular components to work with [ArcGIS API for JavaScript v4.3](https://developers.arcgis.com/javascript/)

## Setup

```
npm install --save angular-esri-components
```

## Component status:

| Component          | Status                              | Docs         | Issue          |
|--------------------|-------------------------------------|--------------|----------------|
| esri-map           |                           Available | [README][1]  |              - |
| esri-legend        |                         Not Started |              |              - |
| esri-layerList     |                         Not Started |              |              - |
| esri-customWidget  |                           Available | [README][2]  |      [#4][004] |
| esri-layersToggle  |                           Available | [README][3]  |      [#6][006] |
| (more coming)      |                                     |              |              - |

 [1]: https://github.com/kgs916/angular-esri-components/blob/master/src/lib/esri-map/README.md
 [2]: https://github.com/kgs916/angular-esri-components/blob/master/src/lib/widgets/custom-widget/README.md
 [3]: https://github.com/kgs916/angular-esri-components/blob/master/src/lib/widgets/layers-toggle/README.md

 [004]: https://github.com/kgs916/angular-esri-components/issues/4
 [006]: https://github.com/kgs916/angular-esri-components/issues/6
 
## Setup

**Note:** It is no longer necessary to add an import statement into your `index.html` file for the ESRI CSS.  This has been included in the styles for the map component.  If you have an existing import of the ESRI CSS in your application you should remove it.

Include `AngularEsriModule` in your main module:

```ts
// ...

import { AngularEsriModule } from 'angular-esri-components';

@NgModule({
  // ...
  imports: [
    AngularEsriModule
  ],
  // ...
})
export class AppModule { }

```
