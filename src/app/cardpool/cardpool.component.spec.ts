import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpoolComponent } from './cardpool.component';

describe('CardpoolComponent', () => {
  let component: CardpoolComponent;
  let fixture: ComponentFixture<CardpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
