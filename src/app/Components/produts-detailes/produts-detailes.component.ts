import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartMentService } from 'src/app/Core/Service/depart-ment.service';
import { Prodcuts } from 'src/app/Core/Interface/prodcuts';

@Component({
  selector: 'app-produts-detailes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produts-detailes.component.html',
  styleUrls: ['./produts-detailes.component.scss']
})
export class ProdutsDetailesComponent implements OnInit {
  productId: string;
  subscription:any
  product: any ={};

  constructor(
    private _Router: Router,
    private _Route: ActivatedRoute,
  private _DepartMentService: DepartMentService
  
  ) {
    this.productId = this._Route.snapshot.paramMap.get('name')!;
  }


  loadProduct(productId: string) {
    this.subscription = this._DepartMentService.getProductByID(productId).subscribe({
      next: (res) => {
        this.product = res;
        console.log(this.product.Image)
      },
      error: (err) => {
        console.error('Error loading product:', err);
      },
    });
  }

  ngOnInit(): void {
    this.loadProduct(this.productId)
  }
}
