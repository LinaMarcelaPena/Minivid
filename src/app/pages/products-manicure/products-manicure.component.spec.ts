import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsManicureComponent } from './products-manicure.component';

describe('ProductsManicureComponent', () => {
  let component: ProductsManicureComponent;
  let fixture: ComponentFixture<ProductsManicureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsManicureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsManicureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
