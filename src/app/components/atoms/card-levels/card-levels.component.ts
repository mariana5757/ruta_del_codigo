import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-levels',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card-levels.component.html',
  styleUrl: './card-levels.component.css'
})
export class CardLevelsComponent {

  @Input() level: any;
  @Output() levelSelected = new EventEmitter<number>();

  goToLevel(event: number){
    this.levelSelected.emit(event);
  }

}
