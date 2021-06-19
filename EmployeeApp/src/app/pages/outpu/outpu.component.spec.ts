import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpuComponent } from './outpu.component';

describe('OutpuComponent', () => {
  let component: OutpuComponent;
  let fixture: ComponentFixture<OutpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
