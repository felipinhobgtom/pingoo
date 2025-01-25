import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user.interface';
import { BackendRequestService } from '../../services/backend-request.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ViacepRequestService } from '../../services/viacep-request.service';

@Component({
  selector: 'app-form-component',
  imports: [
    PrimaryButtonComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss',
})
export class FormComponentComponent {
  constructor(
    private reqService: BackendRequestService,
    private cepService: ViacepRequestService
  ) {}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', [
      Validators.minLength(3),
      Validators.required,
    ]),
    email: new FormControl<string>('', [
      Validators.email,
      Validators.minLength(2),
      Validators.required,
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    zipcode: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
    bairro: new FormControl<string>(''),
    logradouro: new FormControl<string>(''),
  });

  useCep() {
    this.cepService
      .findByCep(this.registerForm.value.zipcode)
      .subscribe((dados) => {
        if (dados) {
          this.registerForm.patchValue({
            bairro: dados.bairro,
            logradouro: dados.logradouro,
          });
        }
      });
  }

  sendData() {
    let value = this.registerForm.value;
    let usuario: User = {
      name: value.name ?? '',
      email: value.email ?? '',
      password: value.password ?? '',
      home: {
        bairro: value.bairro ?? '',
        logradouro: value.logradouro ?? '',
      },
    };

    this.reqService.sendToDb(usuario).subscribe({
      next: (response) => {
        console.log('Usuário salvo com sucesso:', response);
        // Aqui você pode resetar o formulário ou exibir um feedback para o usuário
        this.registerForm.reset();
      },
      error: (err) => {
        console.error('Erro ao salvar usuário:', err);
        // Aqui você pode exibir uma mensagem de erro para o usuário
      },
    });
  }
}
