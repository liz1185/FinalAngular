import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products : any;
  

  constructor ( private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService.getData().subscribe((data) => {
      this.products = data;
      console.log (data)

    });
  }

}
