import { Injectable } from '@angular/core';
import { User } from '../../core/models/user.model';
import { Book } from '../../core/models/book.model';
import { Loan } from '../../core/models/loan.model';
import { Library } from '../../core/models/library.model';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  
  private libraries: Library[] = [
    { id: '1', name: 'Biblioteca Central', address: 'Bloco A, Térreo', active: true },
    { id: '2', name: 'Biblioteca de Engenharia', address: 'Bloco E, 2º Andar', active: true },
    { id: '3', name: 'Biblioteca de Humanas', address: 'Bloco H, Térreo', active: true },
  ];

  private users: User[] = [
    {
      id: '1',
      name: 'Gustavo de Lima',
      email: 'gustavo.lima@ifpe.edu.br',
      phone: '(11) 99999-0001',
      enrollment: '2024001',
      type: 'STUDENT',
      avatarUrl: null,
      libraryId: '1',
      createdAt: new Date('2024-01-15'),
      active: true,
    },
    {
      id: '2',
      name: 'Maria Oliveira',
      email: 'maria.oliveira@ifpe.edu.br',
      phone: '(11) 98888-0002',
      enrollment: '2023045',
      type: 'PROFESSOR',
      avatarUrl: null,
      libraryId: '1',
      createdAt: new Date('2023-03-10'),
      active: true,
    },
    {
      id: '3',
      name: 'Carlos Santos',
      email: 'carlos.santos@ifpe.edu.br',
      phone: '(11) 97777-0003',
      enrollment: '2024102',
      type: 'STUDENT',
      avatarUrl: null,
      libraryId: '2',
      createdAt: new Date('2024-02-20'),
      active: true,
    },
  ];

  private books: Book[] = [
    {
      id: '1',
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin',
      isbn: '978-0132350884',
      publisher: 'Prentice Hall',
      year: 2008,
      category: 'TECHNOLOGY',
      totalCopies: 3,
      availableCopies: 1,
      libraryId: '1',
      coverUrl: null,
      description: 'Guia prático para escrever código limpo e manutenível.',
    },
    {
      id: '2',
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
      isbn: '978-0201633610',
      publisher: 'Addison-Wesley',
      year: 1994,
      category: 'TECHNOLOGY',
      totalCopies: 2,
      availableCopies: 0,
      libraryId: '1',
      coverUrl: null,
      description: 'O clássico livro sobre padrões de projeto orientado a objetos.',
    },
    {
      id: '3',
      title: 'O Senhor dos Anéis: A Sociedade do Anel',
      author: 'J.R.R. Tolkien',
      isbn: '978-8595084742',
      publisher: 'HarperCollins',
      year: 1954,
      category: 'LITERATURE',
      totalCopies: 5,
      availableCopies: 3,
      libraryId: '2',
      coverUrl: null,
      description: 'O primeiro volume da trilogia épica de fantasia.',
    },
    {
      id: '4',
      title: 'Cálculo Volume 1',
      author: 'James Stewart',
      isbn: '978-8522125838',
      publisher: 'Cengage Learning',
      year: 2013,
      category: 'MATHEMATICS',
      totalCopies: 10,
      availableCopies: 6,
      libraryId: '1',
      coverUrl: null,
      description: 'Livro-texto clássico de cálculo diferencial e integral.',
    },
    {
      id: '5',
      title: 'Engenharia de Software',
      author: 'Ian Sommerville',
      isbn: '978-8543024974',
      publisher: 'Pearson',
      year: 2018,
      category: 'ENGINEERING',
      totalCopies: 4,
      availableCopies: 2,
      libraryId: '1',
      coverUrl: null,
      description: 'Referência completa em engenharia de software moderna.',
    },
    {
      id: '6',
      title: 'Dom Casmurro',
      author: 'Machado de Assis',
      isbn: '978-8525406835',
      publisher: 'Companhia das Letras',
      year: 1899,
      category: 'LITERATURE',
      totalCopies: 3,
      availableCopies: 3,
      libraryId: '3',
      coverUrl: null,
      description: 'Um dos maiores clássicos da literatura brasileira.',
    },
  ];

  private loans: Loan[] = [
    {
      id: '1',
      userId: '1',
      userName: 'Gustavo de Lima',
      bookId: '1',
      bookTitle: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      loanDate: new Date('2026-05-01'),
      dueDate: new Date('2026-05-15'),
      returnDate: new Date('2026-05-14'),
      status: 'RETURNED',
      libraryId: '1',
      acceptedBy: 'Ana Souza (Bibliotecária)',
    },
    {
      id: '2',
      userId: '1',
      userName: 'Gustavo de Lima',
      bookId: '5',
      bookTitle: 'Engenharia de Software',
      loanDate: new Date('2026-05-10'),
      dueDate: new Date('2026-05-24'),
      returnDate: null,
      status: 'ACTIVE',
      libraryId: '1',
      acceptedBy: 'Marcos Santos (Bibliotecário)',
    },
    {
      id: '3',
      userId: '2',
      userName: 'Maria Oliveira',
      bookId: '2',
      bookTitle: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      loanDate: new Date('2026-04-20'),
      dueDate: new Date('2026-05-04'),
      returnDate: null,
      status: 'OVERDUE',
      libraryId: '1',
      acceptedBy: 'Juliana Rocha (Administradora)',
    },
    {
      id: '4',
      userId: '3',
      userName: 'Carlos Santos',
      bookId: '3',
      bookTitle: 'O Senhor dos Anéis: A Sociedade do Anel',
      loanDate: new Date('2026-05-18'),
      dueDate: new Date('2026-06-01'),
      returnDate: null,
      status: 'ACTIVE',
      libraryId: '2',
      acceptedBy: 'Ana Souza (Bibliotecária)',
    },
  ];

  getLibraries(): Library[] {
    return [...this.libraries];
  }

  getUsers(): User[] {
    return [...this.users];
  }

  getUserById(id: string): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  getBooks(): Book[] {
    return [...this.books];
  }

  getBookById(id: string): Book | undefined {
    return this.books.find((b) => b.id === id);
  }

  addBook(book: Omit<Book, 'id'>): Book {
    const newBook: Book = {
      ...book,
      id: String(this.books.length + 1),
    };
    this.books.push(newBook);
    return newBook;
  }

  getLoans(): Loan[] {
    return [...this.loans];
  }

  getLoansByUserId(userId: string): Loan[] {
    return this.loans.filter((l) => l.userId === userId);
  }

  getStats(): { totalBooks: number; totalUsers: number; activeLoans: number; overdueLoans: number } {
    return {
      totalBooks: this.books.length,
      totalUsers: this.users.length,
      activeLoans: this.loans.filter((l) => l.status === 'ACTIVE').length,
      overdueLoans: this.loans.filter((l) => l.status === 'OVERDUE').length,
    };
  }

  getUserStats(userId: string): { totalLoans: number; activeLoans: number; overdueLoans: number; returnedLoans: number } {
    const userLoans = this.getLoansByUserId(userId);
    return {
      totalLoans: userLoans.length,
      activeLoans: userLoans.filter((l) => l.status === 'ACTIVE').length,
      overdueLoans: userLoans.filter((l) => l.status === 'OVERDUE').length,
      returnedLoans: userLoans.filter((l) => l.status === 'RETURNED').length,
    };
  }
}
