import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pruebas-unitarias',
  standalone: true,
  imports: [],
  templateUrl: './pruebas-unitarias.component.html',
  styleUrl: './pruebas-unitarias.component.css'
})
export class PruebasUnitariasComponent {

  miRegistro!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miRegistro = this.fb.group({
      nombreCompleto: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18),
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d).+$') 
      ]],
      confirmPassword: ['', Validators.required],
      fechaNacimiento: ['', [
        Validators.required,
        this.validarEdadMinima(13)
      ]],
      direccion: ['']
    }, {
      validators: this.passwordsIguales
    });
  }

  passwordsIguales(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  validarEdadMinima(edadMinima: number) {
    return (control: any) => {
      const fechaNacimiento = new Date(control.value);
      const hoy = new Date();
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      const mes = hoy.getMonth() - fechaNacimiento.getMonth();
      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
      }
      return edad >= edadMinima ? null : { edadMinima: true };
    };
  }

}
