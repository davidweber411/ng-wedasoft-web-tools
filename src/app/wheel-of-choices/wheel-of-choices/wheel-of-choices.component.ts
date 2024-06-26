import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {WheelComponent} from "../wheel/wheel.component";
import {ConfigFormComponent} from "../config-form/config-form.component";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {WebtoolHeaderComponent} from "../../shared/webtool-header/webtool-header.component";
import {ClipboardService} from "ngx-clipboard";
import {QUERY_PARAM_CHOICES} from "../../shared/constants";
import {Subject, takeUntil} from "rxjs";
import {DialogService} from "../../shared/services/dialog-service/dialog.service";
import {ValidationService} from "../../shared/services/validation-service/validation.service";
import {EncodingService} from "../../shared/services/encoding-service/encoding.service";

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
export class WheelOfChoicesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('appWheelOfChoices') wheelComponent?: WheelComponent;
  @ViewChild('appConfigForm') configFormComponent?: ConfigFormComponent

  private ngUnsubscribe: Subject<unknown> = new Subject<unknown>();

  constructor(
    private clipboardService: ClipboardService,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    private validationService: ValidationService,
    private encodingService: EncodingService) {
  }

  ngAfterViewInit() {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        const queryParamChoicesValue = params.get(QUERY_PARAM_CHOICES);
        if (queryParamChoicesValue) {
          const choicesParamValue = this.encodingService.decodeFromBase64(queryParamChoicesValue);
          if (choicesParamValue.length > 10000
            || !this.validationService.isValidJsonArrayOfStringOrNumber(choicesParamValue)) {
            this.dialogService.showInfoDialog('Error', 'The received link is broken.');
            return;
          }
          const choicesString = JSON.parse(choicesParamValue).join('\n');
          this.configFormComponent!.textAreaElement!.nativeElement.value = choicesString;
          this.wheelComponent?.handleOnChoicesTaInputEvent(choicesString);
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.complete();
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

    const encodedString: string = this.encodingService.encodeToBase64(
      JSON.stringify((this.configFormComponent.textAreaElement.nativeElement as HTMLTextAreaElement).value.split('\n')));
    this.clipboardService.copy(this.getCurrentUrlWithExchangedQueryParam(QUERY_PARAM_CHOICES, encodedString));
    this.dialogService.showInfoDialog(
      'Share this wheel!',
      'Simply forward the copied link, which is now saved in your clipboard!');
  }

  private getCurrentUrlWithExchangedQueryParam(
    queryParamName: string,
    queryParamValue: string): string {

    let currentUrlWithoutQueryParam: string = window.location.href
      .replace(
        /([?&])choices=[^&]+(&|$)/,
        '$1')
      .replace(
        /[?&]$/,
        '');

    let newUrl = currentUrlWithoutQueryParam.includes('?')
      ? currentUrlWithoutQueryParam + '&'
      : currentUrlWithoutQueryParam + '?';

    return newUrl + queryParamName + '=' + queryParamValue;
  }

}
