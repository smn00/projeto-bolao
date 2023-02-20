import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoListaComponent } from './selecao-lista.component';

describe('SelecaoListaComponent', () => {
  let component: SelecaoListaComponent;
  let fixture: ComponentFixture<SelecaoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecaoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
