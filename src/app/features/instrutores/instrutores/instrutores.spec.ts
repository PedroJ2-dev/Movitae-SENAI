import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instrutores } from './instrutores';

describe('Instrutores', () => {
  let component: Instrutores;
  let fixture: ComponentFixture<Instrutores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Instrutores],
    }).compileComponents();

    fixture = TestBed.createComponent(Instrutores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
