import { Routes } from '@angular/router';
import { LayoutLandingPageComponent } from './pages/landing-page/layout-landing-page/layout-landing-page.component';
import { LayoutRegisterComponent } from './pages/register/layout-register/layout-register.component';

export const routes: Routes = [
  { path: '', component: LayoutLandingPageComponent },
  { path: 'register', component: LayoutRegisterComponent}
];
