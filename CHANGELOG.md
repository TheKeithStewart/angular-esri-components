<a name="0.5.1"></a>
# 0.5.1 (2017-??-??)

### Refactorings

* add bundling and minification to the build process
* add a CONTRIBUTING guide

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