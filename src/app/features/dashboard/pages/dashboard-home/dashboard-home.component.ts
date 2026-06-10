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

  logs = signal<{ action: string; timestamp: Date }[]>([]);
  categoryData = signal<{ label: string; count: number; percentage: number; color: string }[]>([]);

  ngOnInit(): void {
    const s = this.mockData.getStats();
    this.stats.set(s);
    this.recentLoans.set(this.mockData.getLoans().slice(0, 5));
    this.statCards.set([
      { icon: 'menu_book', label: 'Total de Livros', value: s.totalBooks, color: '#1565C0', bgColor: '#E3F2FD' },
      { icon: 'people', label: 'Usuários Cadastrados', value: s.totalUsers, color: '#7B1FA2', bgColor: '#F3E5F5' },
      { icon: 'swap_horiz', label: 'Empréstimos Ativos', value: s.activeLoans, color: '#2E7D32', bgColor: '#E8F5E9' },
      { icon: 'warning', label: 'Em Atraso', value: s.overdueLoans, color: '#C62828', bgColor: '#FFEBEE' },
    ]);

    this.logs.set(this.mockData.getLogs().slice(0, 6));

    const books = this.mockData.getBooks();
    const categoriesCount: Record<string, number> = {};
    books.forEach((b) => {
      categoriesCount[b.category] = (categoriesCount[b.category] || 0) + 1;
    });

    const colors = ['#1565C0', '#2E7D32', '#FF8F00', '#C62828', '#7B1FA2', '#00838F'];
    let colorIdx = 0;
    const catData = Object.entries(categoriesCount).map(([cat, count]) => {
      const percentage = books.length > 0 ? Math.round((count / books.length) * 100) : 0;
      const labelFriendly = {
        ENGINEERING: 'Engenharia',
        SCIENCE: 'Ciências',
        LITERATURE: 'Literatura',
        HISTORY: 'História',
        PHILOSOPHY: 'Filosofia',
        ARTS: 'Artes',
        TECHNOLOGY: 'Tecnologia',
        MATHEMATICS: 'Matemática',
        LAW: 'Direito',
        MEDICINE: 'Medicina',
        OTHER: 'Outros',
      }[cat] || 'Outros';

      return {
        label: labelFriendly,
        count,
        percentage,
        color: colors[colorIdx++ % colors.length],
      };
    }).sort((a, b) => b.count - a.count).slice(0, 4);

    this.categoryData.set(catData);
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
