import { Component , ViewChild , OnInit} from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private backendService: BackendService) {}

  title = 'learn-angular';
   
  @ViewChild('productList', { static:true })
  productList: ProductListComponent;

  ngOnInit() : void {
    this.productList.products = this.backendService.getProducts();
  }
}
