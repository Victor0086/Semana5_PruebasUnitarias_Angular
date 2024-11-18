import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PruebasUnitariasComponent } from './pruebas-unitarias.component';

describe('PruebasUnitariasComponent', () => {
  let component: PruebasUnitariasComponent;
  let fixture: ComponentFixture<PruebasUnitariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, PruebasUnitariasComponent]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasUnitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form with all controls', () => {
    expect(component.miRegistro.contains('nombreCompleto')).toBeTruthy();
    expect(component.miRegistro.contains('nombreUsuario')).toBeTruthy();
    expect(component.miRegistro.contains('email')).toBeTruthy();
    expect(component.miRegistro.contains('password')).toBeTruthy();
    expect(component.miRegistro.contains('confirmPassword')).toBeTruthy();
    expect(component.miRegistro.contains('fechaNacimiento')).toBeTruthy();
    expect(component.miRegistro.contains('direccion')).toBeTruthy();
  });

  it('should validate that passwords match', () => {
    const passwordControl = component.miRegistro.get('password');
    const confirmPasswordControl = component.miRegistro.get('confirmPassword');

    passwordControl?.setValue('Password123');
    confirmPasswordControl?.setValue('Password123');
    expect(component.miRegistro.errors?.['notSame']).toBeFalsy();

    confirmPasswordControl?.setValue('DifferentPassword');
    expect(component.miRegistro.errors?.['notSame']).toBeTruthy();
  });
});