import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourceComponent } from './human-resource.component';

describe('HumanResourceComponent', () => {
  let component: HumanResourceComponent;
  let fixture: ComponentFixture<HumanResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
