import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {DragDropModule} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-config-area',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './config-area.component.html',
  styleUrl: './config-area.component.scss'
})
export class ConfigAreaComponent {
  @ViewChild('weightInput') weightInput!: ElementRef<HTMLInputElement>;
  @ViewChild('stillUnusedDragDropElementsDiv') stillUnusedDragDropElementsDiv!: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {
  }

  onAddElementButtonClick($event: MouseEvent) {
    if (!this.inputWeightIsValid()) {
      return;
    }
    let node = this.createDragDropElement(Number(this.weightInput.nativeElement.value));
    this.stillUnusedDragDropElementsDiv.nativeElement.appendChild(node);
  }

  onWeightInputEnterKeyUp() {
    if (!this.inputWeightIsValid()) {
      return;
    }
    let node = this.createDragDropElement(Number(this.weightInput.nativeElement.value));
    this.stillUnusedDragDropElementsDiv.nativeElement.appendChild(node);
  }

  onAddElementToLeftButtonClick($event: MouseEvent) {
    if (!this.inputWeightIsValid()) {
      return;
    }
    let node = this.createDragDropElement(Number(this.weightInput.nativeElement.value));
    let parentDiv = document.querySelector('.weight-scale-left-dropzone') as HTMLDivElement;
    parentDiv.appendChild(node);
  }

  onAddElementToRightButtonClick($event: MouseEvent) {
    if (!this.inputWeightIsValid()) {
      return;
    }
    let node = this.createDragDropElement(Number(this.weightInput.nativeElement.value));
    let parentDiv = document.querySelector('.weight-scale-right-dropzone') as HTMLDivElement;
    parentDiv.appendChild(node);
  }

  private inputWeightIsValid(): boolean {
    if (this.weightInput.nativeElement.value.length == 0) {
      return false;
    }
    return !isNaN(Number(this.weightInput.nativeElement.value));
  }

  private createDragDropElement(weight: number): HTMLDivElement {
    const div = this.renderer.createElement('div');
    div.textContent = weight.toString();
    this.renderer.setStyle(div, 'display', 'inline-flex');
    this.renderer.setStyle(div, 'padding', '8px 14px');
    this.renderer.setStyle(div, 'border', '1px solid #965F06');
    this.renderer.setStyle(div, 'borderRadius', '4px');
    this.renderer.setStyle(div, 'color', '#ffffff');
    this.renderer.setStyle(div, 'overflow', 'hidden');
    this.renderer.setStyle(div, 'textOverflow', 'ellipsis');
    this.renderer.setStyle(div, 'background', '-moz-linear-gradient(top, #ffcb69 0%, #f0a733 50%, #f2a324 92%, #ffb730)');
    this.renderer.setStyle(div, 'background', '-webkit-gradient(linear, left top, left bottom, from(#ffcb69), color-stop(0.50, #f0a733), color-stop(0.92, #f2a324), to(#ffb730))');
    this.renderer.setStyle(div, 'boxShadow', '0px 1px 1px rgba(0, 0, 0, 0.5), inset 1px 2px 0px rgba(255, 255, 255, 0.4)');
    this.renderer.setStyle(div, 'textShadow', '1px 1px 2px rgba(0, 0, 0, 0.7), 0px 1px 0px rgba(255, 255, 255, 0.4)');
    // this.renderer.setStyle(div, 'cursor', 'move');
    // this.renderer.setStyle(div, 'margin', '5px');
    // this.renderer.addClass(div, 'cdk-drag');
    return div;
  }

  // private createDragDropElement(weight: number): HTMLDivElement {
  //   let div = document.createElement("div") as HTMLDivElement;
  //   div.textContent = <string><any>weight;
  //   div.style.display = "inline-flex";
  //   div.style.padding = '8px 14px';
  //   div.style.border = '1px solid #965F06';
  //   div.style.borderRadius = "4px";
  //   div.style.color = '#ffffff';
  //   div.style.overflow = 'hidden';
  //   div.style.textOverflow = 'ellipsis';
  //   div.style.background = '-moz-linear-gradient(top, #ffcb69 0%, #f0a733 50%, #f2a324 92%, #ffb730)';
  //   div.style.background = '-webkit-gradient(linear, left top, left bottom, from(#ffcb69), color-stop(0.50, #f0a733), color-stop(0.92, #f2a324), to(#ffb730))';
  //   div.style.boxShadow = '0px 1px 1px rgba(000,000,000,0.5), inset 1px 2px 0px rgba(255,255,255,0.4)';
  //   div.style.textShadow = '1px 1px 2px rgba(000,000,000,0.7), 0px 1px 0px rgba(255,255,255,0.4)';
  //
  //   div.classList.add('draggable');
  //   div.classList.add('cdk-drag'); // Add the cdk-drag class
  //   div.setAttribute('cdkDrag', ''); // Add the cdkDrag attribute
  //   this.renderer.setAttribute(div, 'cdkDrag', '');
  //   // div.setAttribute('cdkDrag', '');
  //   return div;
  // }

}
