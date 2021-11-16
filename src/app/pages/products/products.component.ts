import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData: any;

  constructor (private _productsService: ProductsService) {
    this._productsService.getData() .subscribe((data) => {
      console.log (data);
      this.productsData = data;
    });
  }



  loading=false;

  ngOnInit(): void {}

  setLoading(loadingState:boolean) {
    this.loading=loadingState;


  }

}
