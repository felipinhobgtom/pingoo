import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MainComponent } from '../../../components/main/main.component';
import { SectionFormComponent } from '../../../components/section-form/section-form.component';
import { FormComponentComponent } from '../../../components/form-component/form-component.component';

@Component({
  selector: 'app-layout-register',
  imports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SectionFormComponent,
    FormComponentComponent,
  ],
  templateUrl: './layout-register.component.html',
  styleUrl: './layout-register.component.scss',
})
export class LayoutRegisterComponent {

}
