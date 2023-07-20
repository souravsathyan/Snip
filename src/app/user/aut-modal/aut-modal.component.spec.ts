import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutModalComponent } from './aut-modal.component';

describe('AutModalComponent', () => {
  let component: AutModalComponent;
  let fixture: ComponentFixture<AutModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutModalComponent]
    });
    fixture = TestBed.createComponent(AutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
