# angular2-esri4-components
[![npm version](https://badge.fury.io/js/angular2-esri4-components.svg)](https://badge.fury.io/js/angular2-esri4-components)

A set of Angular 2 components to work with [ArcGIS API for JavaScript v4.1](https://developers.arcgis.com/javascript/)

## Setup

```
npm install --save angular2-esri4-components
```

Currently their is a dependency where users of this package to have to install the arcgis-js-api typings library.  There is an open issue to correct this [here](https://github.com/kgs916/angular2-esri4-components/issues/3).  In the mean time to install the library follow the below steps:

```
npm install typings -g
typings init
typings install github:Esri/jsapi-resources/4.x/typescript/arcgis-js-api.d.ts --global --save
``` 

## Component status:

| Component        | Status                              | Docs         | Issue          |
|------------------|-------------------------------------|--------------|----------------|
| esri4-map        |                           Available | [README][1]  |              - |
| esri4-legend     |                         Not Started |              |              - |
| esri4-layerList  |                         Not Started |              |              - |
| (more coming)    |                                     |              |              - |

 [1]: https://github.com/kgs916/angular2-esri4-components/blob/master/src/lib/esri4-map/README.md

## Setup

Include `Angular2Esri4Module` in your main module:

```
// ...

import { Angular2Esri4Module } from 'angular2-esri4-components';

@NgModule({
  // ...
  imports: [
    Angular2Esri4Module
  ],
  // ...
})
export class AppModule { }

```