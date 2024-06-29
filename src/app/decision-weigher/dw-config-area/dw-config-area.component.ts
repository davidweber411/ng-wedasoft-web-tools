import {Component, ElementRef, ViewChild} from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
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

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Transfering item to new container
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
