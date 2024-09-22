import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartMentService } from 'src/app/Core/Service/depart-ment.service';
import { Departmant } from 'src/app/Core/Interface/departmant';
import { RouterLink } from '@angular/router';
import { Prodcuts } from 'src/app/Core/Interface/prodcuts';
import { NavbarComponent } from '../navbar/navbar.component';
import { SliderComponent } from '../slider/slider.component';
import { CategoriesComponent } from '../categories/categories.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink, SliderComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  Prodcuts: Prodcuts[] = [];
  isLoading: boolean = false;
  departmentHome: Departmant[] = [];
  private destroy$ = new Subject<void>();

  constructor(private _DepartMentService: DepartMentService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getDepartments();
  }
  getProducts() {
    this.isLoading = true;

    this._DepartMentService.getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.Prodcuts = res.slice(0, 12);
          this.isLoading = false;
        }
      });
  }

  getDepartments() {
    this.isLoading = true;

    this._DepartMentService.getDepartments()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.departmentHome = res;
        }
      });
  }

  AddCart(data: any) {
    console.log(data);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
