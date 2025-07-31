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
  | 'jcb-3dx'
  | 'jcb-3d'
  | 'jcb-nm'
  | 'rapid-bearing';

export type SubCategory = 
  | 'bushes'
  | 'pivot-pins'
  | 'transmission'
  | 'hydraulic-system'
  | 'fabrication-casting'
  | 'bearing'
  | 'electrical-parts'
  | 'seals-o-rings'
  | 'engine-parts'
  | 'cabin-parts'
  | 'filters'
  | 'miscellaneous-parts'
  | 'bolts-nuts'
  | 'hydraulic-ram';

export interface CategoryFilter {
  label: string;
  value: ProductCategory;
  count: number;
}

export interface SubCategoryFilter {
  label: string;
  value: SubCategory;
  count: number;
}

export interface SubCategoryInfo {
  name: string;
  description?: string;
  icon?: string;
}

export interface CategoryWithSubcategories {
  id: ProductCategory;
  name: string;
  icon?: string;
  description?: string;
  subcategories: SubCategoryInfo[];
}