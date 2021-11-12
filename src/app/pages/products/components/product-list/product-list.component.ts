import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:any;

  constructor (private _productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this._productsService.getData();
    console.log (this.products);
  }

}
