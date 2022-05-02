import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteTabComponent } from './write-tab.component';

describe('WriteTabComponent', () => {
  let component: WriteTabComponent;
  let fixture: ComponentFixture<WriteTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
