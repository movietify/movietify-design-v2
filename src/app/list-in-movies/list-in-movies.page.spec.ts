import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInMoviesPage } from './list-in-movies.page';

describe('ListInMoviesPage', () => {
  let component: ListInMoviesPage;
  let fixture: ComponentFixture<ListInMoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInMoviesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
