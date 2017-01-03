# esri4-customWidget

`esri4-customWidget` is an attribute directive that can be used to add a DOM element as a widget over your map.

## Usage

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <img esri4-customWidget [position]="position" src="/assets/images/transtraks_bus.png" width="100">
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
