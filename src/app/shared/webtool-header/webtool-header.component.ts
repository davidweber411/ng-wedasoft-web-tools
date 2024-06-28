import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-webtool-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './webtool-header.component.html',
  styleUrl: './webtool-header.component.scss'
})
export class WebtoolHeaderComponent {
  @Input() webToolTitle: string = '';
  @Output() onShareButtonClickEvent = new EventEmitter<void>

  onShareButtonClick() {
    this.onShareButtonClickEvent.emit();
  }

}
