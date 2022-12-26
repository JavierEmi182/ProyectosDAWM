import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoGComponent } from './pedido-g.component';

describe('PedidoGComponent', () => {
  let component: PedidoGComponent;
  let fixture: ComponentFixture<PedidoGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
