import { Component } from '@angular/core';
import {DwScrewComponent} from "../dw-screw/dw-screw.component";

@Component({
  selector: 'app-dw-weight-scale-surface',
  standalone: true,
  imports: [
    DwScrewComponent
  ],
  templateUrl: './dw-weight-scale-surface.component.html',
  styleUrl: './dw-weight-scale-surface.component.scss'
})
export class DwWeightScaleSurfaceComponent {

}
