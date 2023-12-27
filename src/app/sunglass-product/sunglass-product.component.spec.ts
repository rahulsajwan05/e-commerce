import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunglassProductComponent } from './sunglass-product.component';

describe('SunglassProductComponent', () => {
  let component: SunglassProductComponent;
  let fixture: ComponentFixture<SunglassProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunglassProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunglassProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
