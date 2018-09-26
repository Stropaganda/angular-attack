import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolPickerComponent } from './pool-picker.component';

describe('PoolPickerComponent', () => {
  let component: PoolPickerComponent;
  let fixture: ComponentFixture<PoolPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
