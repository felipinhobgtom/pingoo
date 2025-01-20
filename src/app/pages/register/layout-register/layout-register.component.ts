import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { MainComponent } from "../../../components/main/main.component";
import { FormComponentComponent } from "../../../components/form-component/form-component.component";
import { InputComponentComponent } from "../../../components/input-component/input-component.component";

@Component({
  selector: 'app-layout-register',
  imports: [HeaderComponent, FooterComponent, MainComponent, FormComponentComponent, InputComponentComponent],
  templateUrl: './layout-register.component.html',
  styleUrl: './layout-register.component.scss'
})
export class LayoutRegisterComponent {

}
