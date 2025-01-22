import { Component, OnInit } from '@angular/core';
import { BackendRequestService } from '../../services/backend-request.service';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dev',
  imports: [CommonModule],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.scss',
})
export class DevComponent implements OnInit {
  constructor(private req: BackendRequestService) {}
  ngOnInit(): void {
    this.req.getFromDb().subscribe({
      next: (data: User[]) => {
        this.usuarios = data;
      },
    });
  }

  usuarios: User[] = [];
}
