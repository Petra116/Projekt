import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestProductsComponent } from './guest-products.component';

describe('GuestProductsComponent', () => {
  let component: GuestProductsComponent;
  let fixture: ComponentFixture<GuestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
