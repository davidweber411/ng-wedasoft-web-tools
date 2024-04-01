import {Component, ViewChild} from '@angular/core';
import {WheelComponent} from "../wheel/wheel.component";
import {ConfigFormComponent} from "../config-form/config-form.component";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {WebtoolHeaderComponent} from "../webtool-header/webtool-header.component";
import {ClipboardService} from "ngx-clipboard";
import {QUERY_PARAM_CHOICES} from "../../shared/constants";

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
  @ViewChild('appWheelOfChoices') wheelComponent?: WheelComponent;
  @ViewChild('appConfigForm') configFormComponent?: ConfigFormComponent

  constructor(
    private clipboardService: ClipboardService,
    private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.queryParamMap
    //   .pipe(takeUntilDestroyed())
    //   .subscribe(params => {
    //     const choicesParamValue = params.get('choices');
    //     console.log('choicesParamValue:', choicesParamValue);
    //   });
  }

  onChoicesTaInputEventListener(taText: string) {
    if (!this.wheelComponent) {
      console.log('ERROR appWheelOfChoices is undefined.')
      return;
    }
    this.wheelComponent.handleOnChoicesTaInputEvent(taText);
  }

  onSpinBtnClickEventListener() {
    if (!this.wheelComponent) {
      console.log('ERROR appWheelOfChoices is undefined.')
      return;
    }
    this.wheelComponent.handleOnSpinBtnClickEvent();
  }

  onShareButtonClickEventListener() {
    if (!this.configFormComponent) {
      console.log('ERROR this.configFormComponent is undefined.')
      return;
    }
    if (!this.configFormComponent.textAreaElement) {
      console.log('ERROR this.configFormComponent.textAreaElement is undefined.')
      return;
    }

    let choicesJson = JSON.stringify(
      (this.configFormComponent.textAreaElement.nativeElement as HTMLTextAreaElement).value.split('\n'));
    const clearedUrl = this.getCurrentUrlWithoutChoicesQueryParam();
    const urlWithQueryParam = `${clearedUrl}${clearedUrl.includes('?') ? '&' : '?'}${QUERY_PARAM_CHOICES}=${choicesJson}`;
    this.clipboardService.copy(urlWithQueryParam);
  }

  private getCurrentUrlWithoutChoicesQueryParam() {
    return window.location.href
      .replace(
        /([?&])choices=[^&]+(&|$)/,
        '$1')
      .replace(
        /[?&]$/,
        '');
  }

}
