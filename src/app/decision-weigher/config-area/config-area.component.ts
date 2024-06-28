import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-config-area',
  standalone: true,
  imports: [],
  templateUrl: './config-area.component.html',
  styleUrl: './config-area.component.scss'
})
export class ConfigAreaComponent {
  @ViewChild('weightInput') weightInput!: ElementRef<HTMLInputElement>;
  @ViewChild('stillUnusedDragDropElementsDiv') stillUnusedDragDropElementsDiv!: ElementRef<HTMLDivElement>;

  onAddElementButtonClick($event: MouseEvent) {
    this.createAndAddDragDropElement();
  }

  createDragDropElement(weight: number): HTMLDivElement {
    let div = document.createElement("div") as HTMLDivElement;
    div.textContent = <string><any>weight;
    div.style.display = "inline-flex";
    div.style.padding = '8px 14px';
    div.style.border = '1px solid #965F06';
    div.style.borderRadius = "4px";
    div.style.color = '#ffffff';
    div.style.background = '-moz-linear-gradient(top, #ffcb69 0%, #f0a733 50%, #f2a324 92%, #ffb730)';
    div.style.background = '-webkit-gradient(linear, left top, left bottom, from(#ffcb69), color-stop(0.50, #f0a733), color-stop(0.92, #f2a324), to(#ffb730))';
    div.style.boxShadow = '0px 1px 1px rgba(000,000,000,0.5), inset 1px 2px 0px rgba(255,255,255,0.4)';
    div.style.textShadow = '1px 1px 2px rgba(000,000,000,0.7), 0px 1px 0px rgba(255,255,255,0.4)';
    return div;
  }

  onWeightInputEnterKeyUp() {
    this.createAndAddDragDropElement();
  }

  private createAndAddDragDropElement() {
    if (this.weightInput.nativeElement.value.length == 0) {
      return;
    }
    if (isNaN(Number(this.weightInput.nativeElement.value))) {
      return;
    }
    const weight = Number(this.weightInput.nativeElement.value);
    this.stillUnusedDragDropElementsDiv.nativeElement.appendChild(this.createDragDropElement(weight));
  }

}
