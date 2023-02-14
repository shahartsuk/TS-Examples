interface IProduct {
  name: string;
  price: number;
  isActive: boolean;
}

interface IShopService {
  products: IProduct[];
  productCount: number;

  sellProduct(product: IProduct): void;
  addProduct(product: IProduct): boolean;
}

class ShopService implements IShopService {
  private _Products: IProduct[] = [];
  constructor() {}

  public get products(): IProduct[] {
    return this._Products;
  }
  //no setter to keap it readonly
  // public set products(value:IProduct[]){
  //     this._Products=value
  // }

  public get productCount(): number {
    return this._Products.length;
  }

  public addProduct(product: IProduct): boolean {
    if (this._Products === null || this._Products === undefined) {
      return false;
    } else {
      this._Products.push(product);
      return true;
    }
  }

  public sellProduct(product: IProduct): void {
    const productToDelet: number = this._Products.findIndex(
      (prod: IProduct) => prod.name === product.name
    );

    if (productToDelet > -1) {
      this._Products.splice(productToDelet, 1);
    }
  }
}

const shop: ShopService = new ShopService();
if (
  shop.addProduct({
    name: "Coke",
    price: 10,
    isActive: true,
  })
) {
  console.log("המוצר נכנס בהצלחה");
} else {
  console.log("שגיאה נא הוסף מוצר בשנית");
}

console.log(`Products count: ${shop.productCount}`);

shop.sellProduct({
  name: "Coke",
  price: 10,
  isActive: true,
});

console.log(`Products count: ${shop.productCount}`);
