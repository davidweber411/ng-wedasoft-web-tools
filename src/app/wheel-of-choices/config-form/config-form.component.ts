import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-config-form',
  standalone: true,
  imports: [],
  templateUrl: './config-form.component.html',
  styleUrl: './config-form.component.scss'
})
export class ConfigFormComponent {
  @ViewChild('choicesTextArea') textAreaElement?: ElementRef<HTMLTextAreaElement>;
  @Output() onSpinBtnClickEvent = new EventEmitter<void>();
  @Output() onChoicesTaInputEvent = new EventEmitter<string>();

  onSpinBtnClick() {
    this.onSpinBtnClickEvent.emit();
  }

  onChoicesTaInput(value: string) {
    this.onChoicesTaInputEvent.emit(value);
  }

}
