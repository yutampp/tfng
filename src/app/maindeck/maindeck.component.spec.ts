import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindeckComponent } from './maindeck.component';

describe('MaindeckComponent', () => {
  let component: MaindeckComponent;
  let fixture: ComponentFixture<MaindeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
