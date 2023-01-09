import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsToolsComponent } from './products-tools.component';

describe('ProductsToolsComponent', () => {
  let component: ProductsToolsComponent;
  let fixture: ComponentFixture<ProductsToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
