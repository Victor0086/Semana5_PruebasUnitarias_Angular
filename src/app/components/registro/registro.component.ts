import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], 
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  miRegistro!: FormGroup;

  categorias = ['Acción', 'Terror', 'Aventura', 'Deporte'];
  usuarioRegistrado = false;

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

  registrarUsuario(): void {
    if (this.miRegistro.invalid) {
      alert('Por favor, completa todos los campos requeridos');
      return;
    }

    if (this.miRegistro.value.password !== this.miRegistro.value.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Asigna el nombre de usuario al iniciar sesión
    const nombreUsuario = this.miRegistro.value.nombreUsuario || 'Usuario Desconocido';

    // Lógica para enviar datos a un servicio de registro
    alert('Registro exitoso');
    this.usuarioRegistrado = true;
  }

  submitForm() {
    if (this.miRegistro.invalid) {
      this.miRegistro.markAllAsTouched(); // Marca todos los campos no llenados para mostrar los mensajes de error en cada uno de ellos
      return;
    }

    const formValues = this.miRegistro.value;
    console.log("Resultado: ", formValues);

    
  }
}
