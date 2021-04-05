import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BackendService } from './backend.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
