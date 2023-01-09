import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOrnamentsComponent } from './products-ornaments.component';

describe('ProductsOrnamentsComponent', () => {
  let component: ProductsOrnamentsComponent;
  let fixture: ComponentFixture<ProductsOrnamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOrnamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsOrnamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
