import { Component, OnInit } from '@angular/core';
import { IPost } from './interfaces/i-post';
import { Product } from './models/product';
import { PostService } from './service/post.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  post:IPost[]=[];
  // products: Product[];
  // productService: ProductService;

  constructor(private postService:PostService){
    // this.products=[];
    // this.productService=new ProductService();
  }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    this.post=this.postService.getAllPost();
  }
}

  
  

//   getProducts(){}
// }
