import {Component, Input} from '@angular/core';
import {CdkDrag} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-dw-drag-drop-element',
  standalone: true,
  imports: [
    CdkDrag
  ],
  templateUrl: './dw-drag-drop-element.component.html',
  styleUrl: './dw-drag-drop-element.component.scss'
})
export class DwDragDropElementComponent {
  @Input() weight: string = "0";

}
