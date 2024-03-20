import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-config-form',
  standalone: true,
  imports: [],
  templateUrl: './config-form.component.html',
  styleUrl: './config-form.component.scss'
})
export class ConfigFormComponent {
  @Output() onSpinBtnClickEvent = new EventEmitter<void>();
  @Output() onChoicesTaInputEvent = new EventEmitter<string>();

  onSpinBtnClick() {
    this.onSpinBtnClickEvent.emit();
  }

  onChoicesTaInput(value: string) {
    this.onChoicesTaInputEvent.emit(value);
  }

}
