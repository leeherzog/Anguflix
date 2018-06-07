import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieExtraComponent } from './movie-extra.component';

describe('MovieExtraComponent', () => {
  let component: MovieExtraComponent;
  let fixture: ComponentFixture<MovieExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
