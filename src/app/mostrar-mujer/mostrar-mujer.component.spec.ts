import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMujerComponent } from './mostrar-mujer.component';

describe('MostrarMujerComponent', () => {
  let component: MostrarMujerComponent;
  let fixture: ComponentFixture<MostrarMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarMujerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
