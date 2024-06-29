import {Component, ElementRef, ViewChild} from '@angular/core';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {DwDragDropElementComponent} from "../dw-drag-drop-element/dw-drag-drop-element.component";

@Component({
  selector: 'app-dw-config-area',
  standalone: true,
  imports: [DragDropModule, DwDragDropElementComponent],
  templateUrl: './dw-config-area.component.html',
  styleUrl: './dw-config-area.component.scss'
})
export class DwConfigAreaComponent {
  @ViewChild('weightInput') weightInput!: ElementRef<HTMLInputElement>;

  weights: string[] = [];

  onAddElementButtonClick($event: MouseEvent) {
    if (this.inputWeightIsValid()) {
      this.weights.push(this.weightInput.nativeElement.value)
    }
  }

  onWeightInputEnterKeyUp() {
    if (this.inputWeightIsValid()) {
      this.weights.push(this.weightInput.nativeElement.value)
    }
  }

  private inputWeightIsValid(): boolean {
    if (this.weightInput.nativeElement.value.length == 0) {
      return false;
    }
    return !isNaN(Number(this.weightInput.nativeElement.value));
  }

  // onAddElementToLeftButtonClick($event: MouseEvent) {
  //   if (!this.inputWeightIsValid()) {
  //     return;
  //   }
  //   let node = this.createDragDropElement(Number(this.weightInput.nativeElement.value));
  //   let parentDiv = document.querySelector('.weight-scale-left-dropzone') as HTMLDivElement;
  //   parentDiv.appendChild(node);
  // }
  //
  // onAddElementToRightButtonClick($event: MouseEvent) {
  //   if (!this.inputWeightIsValid()) {
  //     return;
  //   }
  //   let node = this.createDragDropElement(Number(this.weightInput.nativeElement.value));
  //   let parentDiv = document.querySelector('.weight-scale-right-dropzone') as HTMLDivElement;
  //   parentDiv.appendChild(node);
  // }

}
