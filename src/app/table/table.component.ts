import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotTableComponent } from '../pivot-table/pivot-table.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, PivotTableComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {}
