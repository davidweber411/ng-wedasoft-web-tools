import {Component} from '@angular/core';
import {WebtoolHeaderComponent} from "../../shared/webtool-header/webtool-header.component";
import {DwConfigAreaComponent} from "../dw-config-area/dw-config-area.component";
import {DwWeightScaleComponent} from "../dw-weight-scale/dw-weight-scale.component";
import {CdkDropListGroup} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-decision-weigher',
  standalone: true,
  imports: [
    WebtoolHeaderComponent,
    DwConfigAreaComponent,
    DwWeightScaleComponent,
    CdkDropListGroup
  ],
  templateUrl: './decision-weigher.component.html',
  styleUrl: './decision-weigher.component.scss'
})
export class DecisionWeigherComponent {

  onShareButtonClickEventListener() {
    console.log('Does nothing yet.');
  }

}
