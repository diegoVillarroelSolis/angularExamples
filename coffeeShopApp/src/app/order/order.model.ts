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
        this.products.splice(this.products.indexOf(product),1);
        this.productsList.splice(this.productsList.indexOf(product.id),1);
    }

    getProducts() : Product[]{
       return this.products;
    }
}