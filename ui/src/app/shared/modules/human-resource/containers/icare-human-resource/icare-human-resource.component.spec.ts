import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcareHumanResourceComponent } from './icare-human-resource.component';

describe('IcareHumanResourceComponent', () => {
  let component: IcareHumanResourceComponent;
  let fixture: ComponentFixture<IcareHumanResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcareHumanResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcareHumanResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
