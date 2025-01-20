import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { MainComponent } from "../../../components/main/main.component";

@Component({
  selector: 'app-layout-register',
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './layout-register.component.html',
  styleUrl: './layout-register.component.scss'
})
export class LayoutRegisterComponent {

}
