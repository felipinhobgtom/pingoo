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
  ) {}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  sendData() {
    let value = this.registerForm.value;
    let usuario: User = {
      name: value.name ?? '',
      email: value.email ?? '',
      password: value.password ?? '',
    };

    this.reqService.sendToDb(usuario).subscribe();
  }
}
