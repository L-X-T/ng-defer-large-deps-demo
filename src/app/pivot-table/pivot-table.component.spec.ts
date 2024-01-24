import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PivotTableComponent } from './pivot-table.component';

describe('PivotTableComponent', () => {
  let component: PivotTableComponent;
  let fixture: ComponentFixture<PivotTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PivotTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PivotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
