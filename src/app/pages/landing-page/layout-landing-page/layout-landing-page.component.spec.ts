import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLandingPageComponent } from './layout-landing-page.component';

describe('LayoutLandingPageComponent', () => {
  let component: LayoutLandingPageComponent;
  let fixture: ComponentFixture<LayoutLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
