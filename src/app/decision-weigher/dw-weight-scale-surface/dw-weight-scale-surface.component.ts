import {Component} from '@angular/core';
import {DwScrewComponent} from "../dw-screw/dw-screw.component";
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {DwDragDropElementComponent} from "../dw-drag-drop-element/dw-drag-drop-element.component";
import {DecisionWeigherService} from "../shared/service/decision-weigher.service";

@Component({
  selector: 'app-dw-weight-scale-surface',
  standalone: true,
  imports: [
    DwScrewComponent,
    CdkDropList,
    DwDragDropElementComponent
  ],
  templateUrl: './dw-weight-scale-surface.component.html',
  styleUrl: './dw-weight-scale-surface.component.scss'
})
export class DwWeightScaleSurfaceComponent {

  weights: string[] = [];

  constructor(private decisionWeigherService: DecisionWeigherService) {
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
    this.decisionWeigherService.rebalanceWeightScale();
  }

}
