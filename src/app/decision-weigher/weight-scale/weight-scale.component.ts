import { Component } from '@angular/core';
import {ScrewComponent} from "../screw/screw.component";
import {DecisionWeigherFooterComponent} from "../decision-weigher-footer/decision-weigher-footer.component";
import {
  DecisionWeigherVerticalPostComponent
} from "../decision-weigher-vertical-post/decision-weigher-vertical-post.component";

@Component({
  selector: 'app-weight-scale',
  standalone: true,
  imports: [
    ScrewComponent,
    DecisionWeigherFooterComponent,
    DecisionWeigherVerticalPostComponent
  ],
  templateUrl: './weight-scale.component.html',
  styleUrl: './weight-scale.component.scss'
})
export class WeightScaleComponent {

}
