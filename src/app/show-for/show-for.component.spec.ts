import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowForComponent } from './show-for.component';

describe('ShowForComponent', () => {
  let component: ShowForComponent;
  let fixture: ComponentFixture<ShowForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
