import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProducerComponent } from './signup-producer.component';

describe('SignupProducerComponent', () => {
  let component: SignupProducerComponent;
  let fixture: ComponentFixture<SignupProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupProducerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
