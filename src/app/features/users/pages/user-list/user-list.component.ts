import { Component, OnInit, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MockDataService } from '../../../../shared/services/mock-data.service';
import { User, USER_TYPE_LABELS } from '../../../../core/models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users = signal<User[]>([]);
  displayedColumns: string[] = ['name', 'enrollment', 'email', 'type', 'status'];
  typeLabels: Record<string, string> = USER_TYPE_LABELS;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.users.set(this.mockDataService.getUsers());
  }
}
