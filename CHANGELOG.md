<a name="0.2.0"></a>
# 0.2.0 (2016-12-28)

### Features
* add portalItemId input for loading a WebMap

<a name="0.1.0"></a>
# 0.1.0 (2016-12-01)

### Breaking Changes
* Rather than just returing the Map, the `mapInit` output event now returns an object with a `map` property referring to the Map object and a `mapView` property referring to its MapView.  The [README.md](https://github.com/kgs916/angular2-esri4-components/blob/master/src/lib/esri4-map/README.md) file for the esri4-map component reflects the new usage regarding this change.