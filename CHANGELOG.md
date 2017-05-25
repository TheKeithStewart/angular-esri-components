<a name="1.0.0"></a>
# 1.0.0 (2017/05/25)

### Refactorings

* upgrade to use the `angular-esri-loader` module.  removed `angular2-esri-loader`.

<a name="0.5.5"></a>
# 0.5.5 (2017/05/07)

### Refactorings

* use the full url for getting the ESRI library

<a name="0.5.4"></a>
# 0.5.4 (2017/03/24)

### Bug Fix

* in `esri4-map.service`, create a new object to modify rather than making changes to the `mapViewProperties` object that is provided as an argument to functions

<a name="0.5.3"></a>
# 0.5.3 (2017/03/23)

### Refactorings

* upgraded to ArcGIS API for JavaScript v4.3

<a name="0.5.2"></a>
# 0.5.2 (2017-03-16)

### Features

* add anchor tag that will zoom to a layer to the `layers-toggle` component

<a name="0.5.1"></a>
# 0.5.1 (2017-03-05)

### Refactorings

* add bundling and minification to the build process
* add a CONTRIBUTING guide
* rearrange the `dependencies`, `peerDependencies`, and `devDependencies` appropriately

<a name="0.5.0"></a>
# 0.5.0 (2017-02-14)

### Features

* add the webMapProperties input property on the esri4-map component to handle properties for WebMaps

### Bug Fix

* clean up the prepublish script

### Breaking Changes

* The portalItemId property is no longer an input property. It was replaced by the webMapProperties input property.

<a name="0.3.0"></a>
# 0.3.0 (2017-01-02)

### Features
* **widgets:** Add the `esri4-customWidget` directive to allow for custom elements to be added as a widget over the map.
* **widgets:** Add the `esri4-layersToggle` component to allow for toggling the visibility of layers of the map.

<a name="0.2.0"></a>
# 0.2.0 (2016-12-28)

### Features
* add portalItemId input for loading a WebMap

<a name="0.1.0"></a>
# 0.1.0 (2016-12-01)

### Breaking Changes
* Rather than just returing the Map, the `mapInit` output event now returns an object with a `map` property referring to the Map object and a `mapView` property referring to its MapView.  The [README.md](https://github.com/kgs916/angular2-esri4-components/blob/master/src/lib/esri4-map/README.md) file for the esri4-map component reflects the new usage regarding this change.