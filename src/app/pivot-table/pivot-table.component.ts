import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexmonsterPivotModule } from 'ngx-flexmonster';

@Component({
  selector: 'app-pivot-table',
  standalone: true,
  imports: [CommonModule, FlexmonsterPivotModule],
  templateUrl: './pivot-table.component.html',
  styleUrl: './pivot-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PivotTableComponent {}
