import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHairComponent } from './products-hair.component';

describe('ProductsHairComponent', () => {
  let component: ProductsHairComponent;
  let fixture: ComponentFixture<ProductsHairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsHairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
