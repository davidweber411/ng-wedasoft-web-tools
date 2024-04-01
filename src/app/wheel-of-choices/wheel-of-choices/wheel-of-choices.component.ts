import {Component, ViewChild} from '@angular/core';
import {WheelComponent} from "../wheel/wheel.component";
import {ConfigFormComponent} from "../config-form/config-form.component";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {WebtoolHeaderComponent} from "../webtool-header/webtool-header.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

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

  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.queryParamMap
    //   .pipe(takeUntilDestroyed())
    //   .subscribe(params => {
    //     const choicesParamValue = params.get('choices');
    //     console.log('choicesParamValue:', choicesParamValue);
    //   });
  }

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
