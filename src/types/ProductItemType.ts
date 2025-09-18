export interface IProductItemProps {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  price: number;
}

export interface IProductList {
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number;
  prev: number | null;
  data: IProductItemProps[];
}
