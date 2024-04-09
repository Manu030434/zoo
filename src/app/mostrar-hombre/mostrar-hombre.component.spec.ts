import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarHombreComponent } from './mostrar-hombre.component';

describe('MostrarHombreComponent', () => {
  let component: MostrarHombreComponent;
  let fixture: ComponentFixture<MostrarHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarHombreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
