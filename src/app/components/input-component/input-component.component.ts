import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-component',
  imports: [],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.scss',
})
export class InputComponentComponent {
  @Input()
  inputName: string = '';

  @Input()
  inputType: string = '';

  @Input()
  labelFor: string = '';

  @Input()
  placeholder: string = '';

  value: string = '';
}
