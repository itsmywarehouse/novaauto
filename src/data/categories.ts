import { CategoryWithSubcategories, ProductCategory, SubCategoryInfo } from '../types';

// Sub-categories for JCB models
const jcbSubCategories: SubCategoryInfo[] = [
  { name: 'Bushes', description: 'High-quality bushes for pivot points and joints' },
  { name: 'Pivot Pins', description: 'Precision-machined pivot pins for smooth operation' },
  { name: 'Transmission', description: 'Gears, clutch plates, and transmission components' },
  { name: 'Hydraulic System', description: 'Pumps, valves, and hydraulic control components' },
  { name: 'Fabrication / Casting Parts', description: 'Custom fabricated and cast components' },
  { name: 'Bearing', description: 'Premium bearings for JCB equipment' },
  { name: 'Electrical Parts', description: 'Wiring, lights, switches, and electrical components' },
  { name: 'Seals, O-Rings & Seal Kits', description: 'Complete sealing solutions for all systems' },
  { name: 'Engine Parts', description: 'Engine components and replacement parts' },
  { name: 'Cabin Parts', description: 'Cabin components, glass, and interior parts' },
  { name: 'Filters', description: 'Oil, fuel, hydraulic, and air filtration systems' },
  { name: 'Miscellaneous Parts', description: 'Various accessories and miscellaneous components' },
  { name: 'Bolts & Nuts', description: 'Fasteners, hardware, and mounting components' },
  { name: 'Hydraulic Ram', description: 'Hydraulic cylinders and ram assemblies' }
];

// Sub-categories for Rapid Bearing
const rapidBearingSubCategories: SubCategoryInfo[] = [
  { name: 'Taper Roller Bearing', description: 'High-performance taper roller bearings for heavy loads' },
  { name: 'Ball Bearing', description: 'Precision ball bearings for various applications' },
  { name: 'Spherical Bearing', description: 'Self-aligning spherical bearings for misalignment tolerance' }
];

export const categoryData: CategoryWithSubcategories[] = [
  {
    id: 'jcb-3dx',
    name: '🚜 JCB 3DX',
    icon: '🚜',
    description: 'Complete range of spare parts for JCB 3DX backhoe loaders',
    subcategories: jcbSubCategories
  },
  {
    id: 'jcb-3d',
    name: '🔧 JCB 3D',
    icon: '🔧',
    description: 'Genuine parts and accessories for JCB 3D series machines',
    subcategories: jcbSubCategories
  },
  {
    id: 'jcb-nm',
    name: '⚡ JCB N/M (New Model)',
    icon: '⚡',
    description: 'Latest generation parts for JCB New Model series',
    subcategories: jcbSubCategories
  },
  {
    id: 'rapid-bearing',
    name: '🛠️ Rapid Bearing',
    icon: '🛠️',
    description: 'Premium industrial bearings for all applications',
    subcategories: rapidBearingSubCategories
  }
];

export const getCategoryData = (categoryId: ProductCategory): CategoryWithSubcategories | undefined => {
  return categoryData.find(cat => cat.id === categoryId);
};

export const getAllCategories = (): CategoryWithSubcategories[] => {
  return categoryData;
};

// Get all sub-categories for JCB models
export const getAllSubCategories = (): SubCategoryInfo[] => {
  return jcbSubCategories;
};

// Get all sub-categories for Rapid Bearing
export const getRapidBearingSubCategories = (): SubCategoryInfo[] => {
  return rapidBearingSubCategories;
};