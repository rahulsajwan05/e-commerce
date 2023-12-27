import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyProductDetailComponent } from './toy-product-detail.component';

describe('ToyProductDetailComponent', () => {
  let component: ToyProductDetailComponent;
  let fixture: ComponentFixture<ToyProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyProductDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToyProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
