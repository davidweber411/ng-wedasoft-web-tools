import { Component } from '@angular/core';
import {DwScrewComponent} from "../dw-screw/dw-screw.component";
import {DwFooterComponent} from "../dw-footer/dw-footer.component";
import {
  DwVerticalPostComponent
} from "../dw-vertical-post/dw-vertical-post.component";
import {DwWeightScaleSurfaceComponent} from "../dw-weight-scale-surface/dw-weight-scale-surface.component";

@Component({
  selector: 'app-dw-weight-scale',
  standalone: true,
  imports: [
    DwScrewComponent,
    DwFooterComponent,
    DwVerticalPostComponent,
    DwWeightScaleSurfaceComponent
  ],
  templateUrl: './dw-weight-scale.component.html',
  styleUrl: './dw-weight-scale.component.scss'
})
export class DwWeightScaleComponent {

}
