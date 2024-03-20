import {Component, ViewChild} from '@angular/core';
import {WheelOfChoicesComponent} from "../wheel-of-choices/wheel-of-choices.component";
import {ConfigFormComponent} from "../config-form/config-form.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    WheelOfChoicesComponent,
    ConfigFormComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @ViewChild('appWheelOfChoices') appWheelOfChoices?: WheelOfChoicesComponent;

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
