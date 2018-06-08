import { Product } from "../product/product.model";

export class Order {
    userId: number =1;
    products: Product[] = [];
    productsList: number[] = [];
    totalAmount: number;    

    addProduct(product: Product){
        this.products.push(product);
        this.productsList.push(product.id);
    }

    removeProduct(product : Product) : void {
        let i: number = this.products.indexOf(product);            
        this.products.splice(i,1);
        this.productsList.splice(i,1);
    }

    getProducts() : Product[]{
       return this.products;
    }

    clearProducts(): void{
        this.products.splice(0,this.products.length);
        this.productsList.splice(0,this.productsList.length);
    }
}