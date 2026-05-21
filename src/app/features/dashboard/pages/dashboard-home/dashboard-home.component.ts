import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { DatePipe } from '@angular/common';
import { MockDataService } from '../../../../shared/services/mock-data.service';
import { Loan, LOAN_STATUS_LABELS } from '../../../../core/models/loan.model';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatTableModule, MatChipsModule, DatePipe],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss',
})
export class DashboardHomeComponent implements OnInit {
  private mockData = inject(MockDataService);

  stats = signal({ totalBooks: 0, totalUsers: 0, activeLoans: 0, overdueLoans: 0 });

  recentLoans = signal<Loan[]>([]);

  statusLabels: Record<string, string> = LOAN_STATUS_LABELS;

  displayedColumns = ['bookTitle', 'userName', 'loanDate', 'dueDate', 'status'];

  statCards = signal<{ icon: string; label: string; value: number; color: string; bgColor: string }[]>([]);

  ngOnInit(): void {
    const s = this.mockData.getStats();
    this.stats.set(s);
    this.recentLoans.set(this.mockData.getLoans());
    this.statCards.set([
      { icon: 'menu_book', label: 'Total de Livros', value: s.totalBooks, color: '#1565C0', bgColor: '#E3F2FD' },
      { icon: 'people', label: 'Usuários Cadastrados', value: s.totalUsers, color: '#7B1FA2', bgColor: '#F3E5F5' },
      { icon: 'swap_horiz', label: 'Empréstimos Ativos', value: s.activeLoans, color: '#2E7D32', bgColor: '#E8F5E9' },
      { icon: 'warning', label: 'Em Atraso', value: s.overdueLoans, color: '#C62828', bgColor: '#FFEBEE' },
    ]);
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      ACTIVE: 'status-badge--active',
      RETURNED: 'status-badge--returned',
      OVERDUE: 'status-badge--overdue',
      RESERVED: 'status-badge--reserved',
    };
    return map[status] || '';
  }
}
