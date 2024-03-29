import {Component, ViewChild} from '@angular/core';
import {WheelComponent} from "../wheel/wheel.component";
import {ConfigFormComponent} from "../config-form/config-form.component";
import {WebtoolHeaderComponent} from "../../wsng-components/header/webtool-header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    WheelComponent,
    ConfigFormComponent,
    WebtoolHeaderComponent,
    RouterOutlet
  ],
  templateUrl: './wheel-of-choices.component.html',
  styleUrl: './wheel-of-choices.component.scss'
})
export class WheelOfChoicesComponent {
  @ViewChild('appWheelOfChoices') appWheelOfChoices?: WheelComponent;

  onChoicesTaInputEventListener(taText: string) {
    if (!this.appWheelOfChoices) {
      console.log('ERROR appWheelOfChoices is undefined.')
      return;
    }
    this.appWheelOfChoices.handleOnChoicesTaInputEvent(taText);
  }

  onSpinBtnClickEventListener() {
    if (!this.appWheelOfChoices) {
      console.log('ERROR appWheelOfChoices is undefined.')
      return;
    }
    this.appWheelOfChoices.handleOnSpinBtnClickEvent();
  }

}
