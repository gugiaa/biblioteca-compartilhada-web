import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

interface NavItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatListModule, MatDividerModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  
  navItems = signal<NavItem[]>([
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'menu_book', label: 'Livros', route: '/books' },
    { icon: 'swap_horiz', label: 'Empréstimos', route: '/loans' },
    { icon: 'people', label: 'Usuários', route: '/users' },
  ]);

  secondaryNavItems = signal<NavItem[]>([
    { icon: 'person', label: 'Meu Perfil', route: '/users/profile' },
    { icon: 'settings', label: 'Configurações', route: '/settings' },
  ]);
}
