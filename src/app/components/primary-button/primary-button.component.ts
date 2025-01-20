import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonActionTypes = 'submit' | 'navigate';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {

  @Input()
  buttonName: string = "";

  @Input()
  actionType: ButtonActionTypes = 'navigate';

  @Output()
  navigateEvent: EventEmitter<void> = new EventEmitter();

  @Output()
  submitEvent: EventEmitter<void> = new EventEmitter();

  handleClick(): void {
    if (this.actionType === 'navigate') {
      this.navigateEvent.emit();
    } else if (this.actionType === 'submit') {
      this.submitEvent.emit();
    }
  }
}
