import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInstrutores } from './lista-instrutores';

describe('ListaInstrutores', () => {
  let component: ListaInstrutores;
  let fixture: ComponentFixture<ListaInstrutores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInstrutores],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaInstrutores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
