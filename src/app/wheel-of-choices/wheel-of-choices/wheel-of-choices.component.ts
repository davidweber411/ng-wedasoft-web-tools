import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {WheelComponent} from "../wheel/wheel.component";
import {ConfigFormComponent} from "../config-form/config-form.component";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {WebtoolHeaderComponent} from "../webtool-header/webtool-header.component";
import {ClipboardService} from "ngx-clipboard";
import {QUERY_PARAM_CHOICES} from "../../shared/constants";
import {Subject, takeUntil} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {InfoDialogComponent} from "../../shared/info-dialog/info-dialog.component";

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
    private dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        const choicesParamValue = params.get(QUERY_PARAM_CHOICES);
        if (choicesParamValue) {
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

    let choicesJson: string = JSON.stringify(
      (this.configFormComponent.textAreaElement.nativeElement as HTMLTextAreaElement).value.split('\n'));
    this.clipboardService.copy(this.getCurrentUrlWithExchangedQueryParam(QUERY_PARAM_CHOICES, choicesJson));

    this.dialog.open(InfoDialogComponent, {
      data: {
        title: 'Share this wheel!',
        message: 'Simply forward the copied link, which is now saved in your clipboard!'
      }
    });
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
