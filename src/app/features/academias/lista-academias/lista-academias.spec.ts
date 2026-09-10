import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAcademias } from './lista-academias';

describe('ListaAcademias', () => {
  let component: ListaAcademias;
  let fixture: ComponentFixture<ListaAcademias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAcademias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAcademias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
