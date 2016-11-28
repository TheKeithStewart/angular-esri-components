# angular2-esri4-components
[![npm version](https://badge.fury.io/js/angular2-esri4-components.svg)](https://badge.fury.io/js/angular2-esri4-components)

A set of Angular 2 components to work with [ArcGIS API for JavaScript v4.1](https://developers.arcgis.com/javascript/)

## Install

```
npm install --save angular2-esri4-components
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