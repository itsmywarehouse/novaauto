export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  price?: string;
  compatibleWith: string[];
  partNumber: string;
  inStock: boolean;
  featured?: boolean;
  specifications?: Record<string, string>;
}

export type ProductCategory = 
  | 'hydraulic' 
  | 'engine' 
  | 'filters' 
  | 'electrical' 
  | 'accessories'
  | 'bearings'
  | 'case-parts';

export interface CategoryFilter {
  label: string;
  value: ProductCategory;
  count: number;
}