# esri-customWidget

`esri-customWidget` is an attribute directive that can be used to add a DOM element as a widget over your map.

## Usage

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <img esriCustomWidget [position]="position" src="https://images.forbes.com/media/lists/companies/esri_416x416.jpg" width="100">
  `,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  position = 'bottom-right';

  constructor() { }

  ngOnInit() {
  }

}
```
