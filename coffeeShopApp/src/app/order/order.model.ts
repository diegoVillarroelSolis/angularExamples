import { Product } from "../product/product.model";

export class Order {
    id: number =1;
    userId: number =1;
    productList: number[] = [];
    totalAmount: number=0; 
    products: Product[] = [];   

    addProduct(product: Product){
        this.products.push(product);
        this.productList.push(product.id);
        this.totalAmount+=product.price;
    }

    removeProduct(product : Product) : void {
        let i: number = this.products.indexOf(product);            
        this.products.splice(i,1);
        this.productList.splice(i,1);
        this.totalAmount-=product.price;
    }

    getProducts() : Product[]{
       return this.products;
    }

    clearProducts(): void{
        this.products.splice(0,this.products.length);
        this.productList.splice(0,this.productList.length);
        this.totalAmount=0;
    }
}