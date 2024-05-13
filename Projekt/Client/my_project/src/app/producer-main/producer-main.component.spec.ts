import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerMainComponent } from './producer-main.component';

describe('ProducerMainComponent', () => {
  let component: ProducerMainComponent;
  let fixture: ComponentFixture<ProducerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducerMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
