export class ProductObject {

  public name: string;
  public category: string;
  public price: number;
  public detail: string;
  public image: string;

  

  constructor( object: any){
    this.name = (object.name) ? object.name : null;
    this.category = (object.category) ? object.category : null;
    this.price = (object.price) ? object.price : null;
    this.detail = (object.detail) ? object.detail : null;
    this.image = (object.image) ? object.image : null;
   
  }
}