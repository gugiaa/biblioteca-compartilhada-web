import { Component, OnInit, signal, computed, TemplateRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockDataService } from '../../../../shared/services/mock-data.service';
import { Loan, LOAN_STATUS_LABELS, LoanStatus } from '../../../../core/models/loan.model';

@Component({
  selector: 'app-loan-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    DatePipe,
    FormsModule,
  ],
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.scss',
})
export class LoanListComponent implements OnInit {
  loans = signal<Loan[]>([]);
  searchQuery = signal<string>('');
  statusFilter = signal<string>('ALL');
  selectedLoan = signal<Loan | null>(null);

  displayedColumns: string[] = ['bookTitle', 'userName', 'loanDate', 'dueDate', 'returnDate', 'status'];
  statusLabels: Record<string, string> = LOAN_STATUS_LABELS;

  filteredLoans = computed(() => {
    let list = this.loans();
    const query = this.searchQuery().toLowerCase().trim();
    const filter = this.statusFilter();

    if (query) {
      list = list.filter(
        (l) =>
          l.bookTitle.toLowerCase().includes(query) ||
          l.userName.toLowerCase().includes(query)
      );
    }

    if (filter !== 'ALL') {
      list = list.filter((l) => l.status === filter);
    }

    return list;
  });

  constructor(
    private mockDataService: MockDataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loans.set(this.mockDataService.getLoans());
  }

  getStatusClass(status: LoanStatus): string {
    const classes: Record<LoanStatus, string> = {
      ACTIVE: 'status-badge--active',
      RETURNED: 'status-badge--returned',
      OVERDUE: 'status-badge--overdue',
      RESERVED: 'status-badge--reserved',
    };
    return classes[status] || '';
  }

  openLoanDetails(loan: Loan, template: TemplateRef<any>): void {
    this.selectedLoan.set(loan);
    this.dialog.open(template, {
      width: '500px',
      panelClass: 'custom-dialog-container',
    });
  }
}
