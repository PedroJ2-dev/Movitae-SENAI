import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assinaturas } from './assinaturas';

describe('Assinaturas', () => {
  let component: Assinaturas;
  let fixture: ComponentFixture<Assinaturas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assinaturas],
    }).compileComponents();

    fixture = TestBed.createComponent(Assinaturas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
