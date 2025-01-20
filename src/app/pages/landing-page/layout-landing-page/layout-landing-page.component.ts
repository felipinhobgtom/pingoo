import { Component } from '@angular/core';
import { MainComponent } from "../../../components/main/main.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { SectionComponent } from "../section/section.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-layout-landing-page',
  imports: [MainComponent, HeaderComponent, HeroComponent, SectionComponent, FooterComponent],
  templateUrl: './layout-landing-page.component.html',
  styleUrl: './layout-landing-page.component.scss'
})
export class LayoutLandingPageComponent {

}
