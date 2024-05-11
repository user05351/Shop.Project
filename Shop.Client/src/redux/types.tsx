export type ProductState = {
  loading: boolean;
  comments: IComment[];
  similars?: ISimilar[];
};

export type ListState = {
  loading: boolean;
  filter: { title: string; priceFrom: number; priceTo: number };
  products: IProductList[];
};

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail?: IProductImage;
  comments: IComment[];
  images: IProductImage[];
}

export interface IProductList {
  id: string;
  title: string;
  price: number;
  thumbnail?: IProductImage;
  comments: number;
}

export interface ISimilar {
  id: string;
  title: string;
  price: number;
}

export interface IProductImage {
  id: string;
  productId: string;
  main: boolean;
  url: string;
}

export interface IComment {
  id: string;
  name: string;
  email: string;
  body: string;
  productId: string;
}
