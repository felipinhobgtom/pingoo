import { Component } from '@angular/core';
import { FormComponentComponent } from "../form-component/form-component.component";
import { InputComponentComponent } from "../input-component/input-component.component";

@Component({
  selector: 'app-section-form',
  imports: [FormComponentComponent, InputComponentComponent],
  templateUrl: './section-form.component.html',
  styleUrl: './section-form.component.scss'
})
export class SectionFormComponent {

}
