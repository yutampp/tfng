import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtradeckComponent } from './extradeck.component';

describe('ExtradeckComponent', () => {
  let component: ExtradeckComponent;
  let fixture: ComponentFixture<ExtradeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtradeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtradeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
