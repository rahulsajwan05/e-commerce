import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysProductComponent } from './toys-product.component';

describe('ToysProductComponent', () => {
  let component: ToysProductComponent;
  let fixture: ComponentFixture<ToysProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToysProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
