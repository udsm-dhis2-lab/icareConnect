import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSchedullingComponent } from './provider-schedulling.component';

describe('ProviderSchedullingComponent', () => {
  let component: ProviderSchedullingComponent;
  let fixture: ComponentFixture<ProviderSchedullingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderSchedullingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSchedullingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
