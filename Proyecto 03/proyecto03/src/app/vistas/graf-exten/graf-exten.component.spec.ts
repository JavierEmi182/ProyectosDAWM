import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafExtenComponent } from './graf-exten.component';

describe('GrafExtenComponent', () => {
  let component: GrafExtenComponent;
  let fixture: ComponentFixture<GrafExtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafExtenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafExtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
