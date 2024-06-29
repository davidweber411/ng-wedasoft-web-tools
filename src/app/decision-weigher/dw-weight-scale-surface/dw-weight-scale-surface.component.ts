import {Component} from '@angular/core';
import {DwScrewComponent} from "../dw-screw/dw-screw.component";
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {DwDragDropElementComponent} from "../dw-drag-drop-element/dw-drag-drop-element.component";

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

  // // onDrop($event: any) {
  //   // console.log("ASDASDAS");
  //   // alert('hello');
  // // }
  //
  // onDrop(event: CdkDragDrop<string[]>) {
  //   console.log("ASDASDAS");
  //   alert('hello');
  //   const droppedItem = event.item.element.nativeElement.textContent!.trim();
  //   console.log(`Weight of dropped item: ${droppedItem}`);
  //
  //   // Perform additional logic (e.g., add item to a list in this component)
  // }
  //
  // // onDrop(event: CdkDragDrop<string[]>) {
  // //   let droppedItem = event.item.element.nativeElement;
  // //   // const droppedItem = event.item.element.nativeElement.textContent.trim();
  // //   console.log(`Weight of dropped item: ${droppedItem}`);
  // //
  // //   // Perform additional logic (e.g., add item to a list in this component)
  // // }


}
