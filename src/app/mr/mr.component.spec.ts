import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrComponent } from './mr.component';

describe('MrComponent', () => {
  let component: MrComponent;
  let fixture: ComponentFixture<MrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MrComponent]
    });
    fixture = TestBed.createComponent(MrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
