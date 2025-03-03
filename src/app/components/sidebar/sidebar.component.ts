
import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule,MatListModule,NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed = false; 

  @Output() toggle = new EventEmitter<boolean>();

  expandSidebar() {
    this.isCollapsed = false;
    this.toggle.emit(this.isCollapsed);
  }

  collapseSidebar() {
    this.isCollapsed = true;
    this.toggle.emit(this.isCollapsed);
  }
}
