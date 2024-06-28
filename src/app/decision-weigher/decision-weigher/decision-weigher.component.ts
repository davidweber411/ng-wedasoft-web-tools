import {Component} from '@angular/core';
import {WebtoolHeaderComponent} from "../../shared/webtool-header/webtool-header.component";
import {ConfigAreaComponent} from "../config-area/config-area.component";

@Component({
  selector: 'app-decision-weigher',
  standalone: true,
  imports: [
    WebtoolHeaderComponent,
    ConfigAreaComponent
  ],
  templateUrl: './decision-weigher.component.html',
  styleUrl: './decision-weigher.component.scss'
})
export class DecisionWeigherComponent {

  onShareButtonClickEventListener() {
    console.log('Does nothing yet.');
  }

}