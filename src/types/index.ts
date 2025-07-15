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
  | 'power-parts'
  | 'drive-motion' 
  | 'tools-attachments'
  | 'body-maintenance'
  | 'case-parts';

export interface CategoryFilter {
  label: string;
  value: ProductCategory;
  count: number;
}

export interface SubCategory {
  name: string;
  description?: string;
  icon?: string;
}

export interface CategoryWithSubcategories {
  id: ProductCategory;
  name: string;
  icon: string;
  description: string;
  subcategories: SubCategory[];
}