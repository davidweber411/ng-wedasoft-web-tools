import {Component} from '@angular/core';
import {WebtoolHeaderComponent} from "../../wheel-of-choices/webtool-header/webtool-header.component";

@Component({
  selector: 'app-decision-weigher',
  standalone: true,
  imports: [
    WebtoolHeaderComponent
  ],
  templateUrl: './decision-weigher.component.html',
  styleUrl: './decision-weigher.component.scss'
})
export class DecisionWeigherComponent {

  onShareButtonClickEventListener() {
    console.log('Does nothing yet.');
  }

}
