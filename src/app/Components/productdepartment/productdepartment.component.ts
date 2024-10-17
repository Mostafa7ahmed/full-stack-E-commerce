import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { DepartMentService } from 'src/app/Core/Service/depart-ment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { HomeComponent } from "../home/home.component";
import { LoadCopmComponent } from "../load-copm/load-copm.component";

@Component({
  selector: 'app-productdepartment',
  standalone: true,
  imports: [CommonModule, BannerComponent, ProductsComponent, HomeComponent, LoadCopmComponent],
  templateUrl: './productdepartment.component.html',
  styleUrls: ['./productdepartment.component.scss'],
})
export class ProductdepartmentComponent {
  productName: string;
  products: any[] = [];
  paginatedProducts: any[] = [];
  pageSize = 12;
  currentPage = 1;
  length = 0;
  loading = false;
  searchQuery = '';
  noResults = false;
  bannerImage: string = 'assets/Image/bannerDepartment.png';
  titlePage: string = 'الاقسام';
  limits: number[] = [5, 10, 25, 100];
  selectedCategory: string = 'All';

  constructor(
    private _productService: DepartMentService,
    private _Router: Router,
    private _Route: ActivatedRoute
  ) {
    this.productName = this._Route.snapshot.paramMap.get('name')!;
    switch(this.productName){
      case "Electronic":
        this.titlePage = "الالكترونيات"; 
        break;
      case "Fashion":
        this.titlePage = "موضة";
        break;
      case "Home":
        this.titlePage = "الأدوات المنزلية"; 
        break;
      default:
        this.titlePage = this.productName; 
        break;
    }  }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.loading = true;
  
    this._productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.filter((product: { RouteCategory: string }) => product.RouteCategory === this.productName);
        this.length = this.products.length;
  
        // Update pagination after filtering
        this.updatePagination();
        this.loading = false;
        this.noResults = this.paginatedProducts.length === 0;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.noResults = true;
      },
    });
  }
  

  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.numberOfPages()) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.numberOfPages()) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  onLimitChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.pageSize = +selectElement.value;
    this.currentPage = 1;
    this.updatePagination();
  }

  numberOfPages(): number {
    return Math.ceil(this.length / this.pageSize);
  }

  cart = JSON.parse(localStorage.getItem('cart') || '[]');

  addedProducts: Set<number> = new Set();

  handleCartAction(item: any): void {
    if (this.isProductInCart(item.id)) {
      this.navigateToCart();
    } else {
      this.AddCart(item);
      this.addedProducts.add(item.id);
    }
  }

  AddCart(item: any): void {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(this.addedProducts);
  }

  isProductInCart(productId: number): boolean {
    return this.addedProducts.has(productId);
  }

  navigateToCart(): void {
    // Implement navigation to the cart page
    this._Router.navigate(['/cart']);
  }
}
