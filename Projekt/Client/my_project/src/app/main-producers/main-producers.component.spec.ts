import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProducersComponent } from './main-producers.component';

describe('MainProducersComponent', () => {
  let component: MainProducersComponent;
  let fixture: ComponentFixture<MainProducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProducersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainProducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
