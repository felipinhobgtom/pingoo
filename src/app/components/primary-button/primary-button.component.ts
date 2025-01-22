import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

type ButtonActionTypes = 'submit' | 'navigate';

@Component({
  selector: 'app-primary-button',
  imports: [FormsModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  @Input()
  buttonName: string = '';

  @Input()
  actionType: ButtonActionTypes = 'navigate';

  @Output()
  navigateEvent: EventEmitter<void> = new EventEmitter();

  @Output()
  submitEvent: EventEmitter<void> = new EventEmitter();

  @Input()
  test: string = 'teste';

  handleClick(): void {
    if (this.actionType === 'navigate') {
      this.navigateEvent.emit();
    } else if (this.actionType === 'submit') {
      this.submitEvent.emit();
    }
  }
}
