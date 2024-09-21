import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferNavComponent } from '../offer-nav/offer-nav.component';
import { DepartMentService } from 'src/app/Core/Service/depart-ment.service';
import { Departmant } from 'src/app/Core/Interface/departmant';
import { RouterLink } from '@angular/router';
import { Prodcuts } from 'src/app/Core/Interface/prodcuts';
import { NavbarComponent } from '../navbar/navbar.component';
import { SliderComponent } from '../slider/slider.component';
import { CategoriesComponent } from '../categories/categories.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent , RouterLink , SliderComponent , CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Prodcuts: Prodcuts[] = [];
  isLoading: boolean = false;
  


  constructor(private _DepartMentService: DepartMentService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    
    this._DepartMentService.getProducts().subscribe({ 
      next:(res) => {
        this.Prodcuts = res.slice(0,12);
        console.log(this.Prodcuts);
        this.isLoading = false;
      }

    });
  }



  AddCart(data: any) {
    console.log(data)
    
  }
}
