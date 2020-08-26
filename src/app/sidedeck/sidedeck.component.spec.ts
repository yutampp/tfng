import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidedeckComponent } from './sidedeck.component';

describe('SidedeckComponent', () => {
  let component: SidedeckComponent;
  let fixture: ComponentFixture<SidedeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidedeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidedeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
