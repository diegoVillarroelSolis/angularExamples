import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductObject } from '../shared/product-object.model';

@Injectable()
export class ProductService {

    products : ProductObject[];
    constructor(private http: HttpClient) {
      
      }
    getProduct( category : number) {
      // return this.http.get<any>('http://192.168.0.110:57798/api/products/category/'+category)
      //   .toPromise()
      //   .then(res => <ProductObject[]>res)
      //   .then(data => { return data; });

      if(category==1){
        return this.http.get<any>('src/assets/data/jugos.json')
        .toPromise()
        .then(res => <ProductObject[]>res.data)
        .then(data => { return data; });
      }else if(category==2){
        return this.http.get<any>('src/assets/data/bebidas-frias.json')
        .toPromise()
        .then(res => <ProductObject[]>res.data)
        .then(data => { return data; });
      }else if(category==3){
        return this.http.get<any>('src/assets/data/bebidas-calientes.json')
        .toPromise()
        .then(res => <ProductObject[]>res.data)
        .then(data => { return data; });
      }else if(category==4){
        return this.http.get<any>('src/assets/data/sandwiches.json')
        .toPromise()
        .then(res => <ProductObject[]>res.data)
        .then(data => { return data; });
      }
      else{
        return this.http.get<any>('src/assets/data/ensalada-frutas.json')
        .toPromise()
        .then(res => <ProductObject[]>res.data)
        .then(data => { return data; });
      }
    }
}