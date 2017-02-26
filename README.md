# angular2-esri4-components
[![npm version](https://badge.fury.io/js/angular2-esri4-components.svg)](https://badge.fury.io/js/angular2-esri4-components)

A set of Angular 2 components to work with [ArcGIS API for JavaScript v4.2](https://developers.arcgis.com/javascript/)

## Setup

```
npm install --save angular2-esri4-components
```

## Component status:

| Component          | Status                              | Docs         | Issue          |
|--------------------|-------------------------------------|--------------|----------------|
| esri4-map          |                           Available | [README][1]  |              - |
| esri4-legend       |                         Not Started |              |              - |
| esri4-layerList    |                         Not Started |              |              - |
| esri4-customWidget |                           Available | [README][2]  |      [#4][004] |
| esri4-layersToggle |                           Available | [README][3]  |      [#6][006] |
| (more coming)      |                                     |              |              - |

 [1]: https://github.com/kgs916/angular2-esri4-components/blob/master/src/lib/esri4-map/README.md
 [2]: https://github.com/kgs916/angular2-esri4-components/blob/master/src/lib/widgets/custom-widget/README.md
 [3]: https://github.com/kgs916/angular2-esri4-components/blob/master/src/lib/widgets/layers-toggle/README.md

 [004]: https://github.com/kgs916/angular2-esri4-components/issues/4
 [006]: https://github.com/kgs916/angular2-esri4-components/issues/6
 
## Setup

Import CSS for ArcGIS API for JavaScript v4 into the head of your index.html:

```html
<!doctype html>
<html>
<head>
  <!-- ... -->
  <link rel="stylesheet" href="https://js.arcgis.com/4.2/esri/css/main.css">
  <!-- ... -->
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>
```

Include `Angular2Esri4Module` in your main module:

```ts
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
