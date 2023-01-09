import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMakeupComponent } from './products-makeup.component';

describe('ProductsMakeupComponent', () => {
  let component: ProductsMakeupComponent;
  let fixture: ComponentFixture<ProductsMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsMakeupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
