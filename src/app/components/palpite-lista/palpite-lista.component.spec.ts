import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalpiteListaComponent } from './palpite-lista.component';

describe('PalpiteListaComponent', () => {
  let component: PalpiteListaComponent;
  let fixture: ComponentFixture<PalpiteListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalpiteListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalpiteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
