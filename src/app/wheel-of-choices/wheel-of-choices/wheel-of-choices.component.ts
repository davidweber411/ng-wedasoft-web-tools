import {Component, ViewChild} from '@angular/core';
import {WheelComponent} from "../wheel/wheel.component";
import {ConfigFormComponent} from "../config-form/config-form.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    WheelComponent,
    ConfigFormComponent
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
