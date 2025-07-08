import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-levels',
  imports: [],
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
