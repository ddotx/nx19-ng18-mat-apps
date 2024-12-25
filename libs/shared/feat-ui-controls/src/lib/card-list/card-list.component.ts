import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../card';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop'

@Component({
  selector: 'lib-shared-feat-ui-controls-card-list',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input() cards: Card[] = [];
  @Output() cardChange = new EventEmitter<Card[]>();

  sortCards(event: CdkDragDrop<string[]>): void {
    console.log('sortCards', event);
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    this.cardChange.emit(this.cards);
  }
}
