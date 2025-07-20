import { Product, ProductCategory } from '../types';

// Helper function to generate random part numbers
const generatePartNumber = (category: ProductCategory): string => {
  let prefix = '';
  switch (category) {
    case 'jcb-3dx':
      prefix = '3DX';
      break;
    case 'jcb-3d':
      prefix = '3D';
      break;
    case 'jcb-nm':
      prefix = 'NM';
      break;
    default:
      prefix = 'JCB';
  }
  const random = Math.floor(10000 + Math.random() * 90000);
  return `${prefix}-${random}`;
};

export const products: Product[] = [
  // JCB 3DX Parts
  {
    id: '1',
    name: 'JCB 3DX Hydraulic Cylinder Assembly',
    category: 'jcb-3dx',
    subCategory: 'Hydraulic Ram',
    description: 
      'High-quality hydraulic cylinder assembly designed specifically for JCB 3DX backhoe loaders. ' +
      'Engineered with precision to provide reliable performance under heavy workloads. ' +
      'Features durable seals and chrome-plated rods to resist corrosion and extend service life. ' +
      'Manufactured to OEM specifications for perfect fitment and long-lasting operation.',
    shortDescription: 'Premium hydraulic cylinder for JCB 3DX with extended service life.',
    imageUrl: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: '3DX-32415',
    compatibleWith: ['JCB 3DX', 'JCB 3DX Super', 'JCB 3DX Eco'],
    inStock: true,
    featured: true,
    specifications: {
      'Bore Size': '100mm',
      'Stroke Length': '800mm',
      'Operating Pressure': '350 bar',
      'Rod Diameter': '45mm',
      'Material': 'High-grade steel with chrome plating'
    }
  },
  {
    id: '2',
    name: 'JCB 3DX Hydraulic Pump Assembly',
    category: 'jcb-3dx',
    subCategory: 'Hydraulic System',
    description: 
      'High-efficiency hydraulic pump assembly designed specifically for JCB 3DX machinery. ' +
      'Delivers consistent flow and pressure to ensure optimal performance of all hydraulic systems. ' +
      'Constructed with precision-machined components for minimal energy loss and maximum output. ' +
      'Designed to withstand the demands of heavy-duty construction and excavation work.',
    shortDescription: 'High-efficiency hydraulic pump for JCB 3DX with reliable pressure delivery.',
    imageUrl: 'https://images.pexels.com/photos/162568/oil-pump-pump-jack-donkey-pump-jack-pump-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: '3DX-75362',
    compatibleWith: ['JCB 3DX', 'JCB 3DX Super', 'JCB 3DX Eco'],
    inStock: true,
    specifications: {
      'Flow Rate': '120 L/min',
      'Maximum Pressure': '250 bar',
      'Power Requirement': '75 kW',
      'Weight': '35 kg',
      'Connection Type': 'SAE standard flanges'
    }
  },
  {
    id: '3',
    name: 'JCB 3D Transmission Gear Set',
    category: 'jcb-3d',
    subCategory: 'Transmission',
    description: 
      'Complete transmission gear set manufactured to OEM specifications for JCB 3D equipment. ' +
      'Includes primary and secondary gears, clutch plates, and torque converter components. ' +
      'Precision-machined from high-grade steel for optimal power transmission and durability. ' +
      'Designed for maximum torque handling and smooth gear changes.',
    shortDescription: 'Complete transmission gear set for JCB 3D with all necessary components.',
    imageUrl: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: '3D-84726',
    compatibleWith: ['JCB 3D', 'JCB 3D Super'],
    inStock: true,
    featured: true,
    specifications: {
      'Gear Ratio': '1:4.2',
      'Torque Capacity': '850 Nm',
      'Material': 'Hardened steel',
      'Weight': '45 kg',
      'Lubrication': 'Pressure fed'
    }
  },
  {
    id: '4',
    name: 'JCB N/M Tapered Roller Bearing Set',
    category: 'jcb-nm',
    subCategory: 'Bearing',
    description: 
      'Premium tapered roller bearing set from Rapid Bearing for JCB N/M (New Model) applications. ' +
      'Designed to handle high radial and axial loads with superior durability. ' +
      'Features precision-ground raceways and rollers for smooth, vibration-free operation. ' +
      'Manufactured to strict quality standards for extended service life under demanding conditions.',
    shortDescription: 'Premium tapered roller bearings from Rapid Bearing for JCB N/M series.',
    imageUrl: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'NM-59104',
    compatibleWith: ['JCB N/M Series', 'JCB New Model'],
    inStock: true,
    featured: true,
    specifications: {
      'Inner Diameter': '75mm',
      'Outer Diameter': '130mm',
      'Width': '31mm',
      'Load Rating': '95 kN',
      'Speed Rating': '4000 RPM'
    }
  },
  {
    id: '5',
    name: 'JCB 3DX Engine Oil Filter',
    category: 'jcb-3dx',
    subCategory: 'Filters',
    description: 
      'High-capacity engine oil filter designed specifically for JCB 3DX equipment. ' +
      'Features advanced filtration media to capture even the smallest contaminants and protect your engine. ' +
      'Built with robust housing to withstand high pressures and harsh operating environments. ' +
      'Ensures optimal oil flow and engine protection for extended service intervals.',
    shortDescription: 'Advanced oil filter for JCB 3DX engines with superior contaminant capture.',
    imageUrl: 'https://images.pexels.com/photos/11002456/pexels-photo-11002456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: '3DX-12390',
    compatibleWith: ['JCB 3DX', 'JCB 3DX Super', 'JCB 3DX Eco'],
    inStock: true,
    specifications: {
      'Filtration Rating': '10 microns',
      'Flow Rate': '25 L/min',
      'Bypass Valve': 'Integrated',
      'Thread Size': '3/4-16 UNF',
      'Height': '150mm'
    }
  },
  {
    id: '6',
    name: 'JCB 3D Pivot Pin Set',
    category: 'jcb-3d',
    subCategory: 'Pivot Pins',
    description: 
      'Precision-machined pivot pin set for JCB 3D backhoe loaders. ' +
      'Manufactured from high-grade steel with hardened surface treatment for maximum wear resistance. ' +
      'Designed to provide smooth articulation and long service life in demanding applications. ' +
      'Complete set includes all necessary pins for boom, dipper, and bucket assemblies.',
    shortDescription: 'Precision pivot pin set for JCB 3D with hardened surface treatment.',
    imageUrl: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: '3D-45678',
    compatibleWith: ['JCB 3D', 'JCB 3D Super'],
    inStock: true,
    featured: true,
    specifications: {
      'Material': 'High-grade steel',
      'Surface Treatment': 'Hardened and chrome plated',
      'Pin Diameter': '45mm',
      'Length': '280mm',
      'Set Includes': '8 pins with bushes'
    }
  },
  {
    id: '7',
    name: 'JCB N/M Electrical Wiring Harness',
    category: 'jcb-nm',
    subCategory: 'Electrical Parts',
    description: 
      'Complete electrical wiring harness for JCB N/M (New Model) series. ' +
      'Features high-quality copper conductors with weather-resistant insulation. ' +
      'Designed to handle the electrical demands of modern JCB equipment systems. ' +
      'Includes all necessary connectors and protective sheathing for reliable operation.',
    shortDescription: 'Complete wiring harness for JCB N/M with weather-resistant design.',
    imageUrl: 'https://images.pexels.com/photos/10809076/pexels-photo-10809076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'NM-27381',
    compatibleWith: ['JCB N/M Series', 'JCB New Model'],
    inStock: true,
    specifications: {
      'Voltage Rating': '24V',
      'Wire Gauge': '14-18 AWG',
      'Insulation': 'Weather-resistant PVC',
      'Length': '12 meters',
      'Connectors': 'Waterproof sealed'
    }
  },
  {
    id: '8',
    name: 'JCB 3DX Seal Kit Complete',
    category: 'jcb-3dx',
    subCategory: 'Seals, O-Rings & Seal Kits',
    description: 
      'Complete seal kit for JCB 3DX hydraulic systems and cylinders. ' +
      'Includes all necessary O-rings, seals, and gaskets for major service intervals. ' +
      'Manufactured from high-quality materials resistant to hydraulic fluids and temperature extremes. ' +
      'Ensures proper sealing and prevents costly hydraulic fluid leaks.',
    shortDescription: 'Complete seal kit for JCB 3DX hydraulic systems and cylinders.',
    imageUrl: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: '3DX-98765',
    compatibleWith: ['JCB 3DX', 'JCB 3DX Super', 'JCB 3DX Eco'],
    inStock: true,
    featured: true,
    specifications: {
      'Kit Contents': '45 pieces',
      'Material': 'NBR/Viton rubber',
      'Temperature Range': '-40°C to +150°C',
      'Pressure Rating': '350 bar',
      'Application': 'Hydraulic cylinders and pumps'
    }
  },
];

// Generate additional products for each category and sub-category
const additionalProducts: Product[] = [];
const categories: ProductCategory[] = ['jcb-3dx', 'jcb-3d', 'jcb-nm'];
const subCategories = [
  'bushes', 'pivot-pins', 'transmission', 'hydraulic-system', 'fabrication-casting',
  'bearing', 'electrical-parts', 'seals-o-rings', 'engine-parts', 'cabin-parts',
  'filters', 'miscellaneous-parts', 'bolts-nuts', 'hydraulic-ram'
];

let productId = 9;

categories.forEach(category => {
  subCategories.forEach(subCategory => {
    // Skip if we already have a product for this combination
    const existingProduct = products.find(p => p.category === category && p.subCategory === subCategory);
    if (existingProduct) return;
    
    const categoryName = category === 'jcb-3dx' ? 'JCB 3DX' : 
                        category === 'jcb-3d' ? 'JCB 3D' : 'JCB N/M';
    const subCategoryName = subCategory.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    additionalProducts.push({
      id: productId.toString(),
      name: `${categoryName} ${subCategoryName} Component`,
      category,
      subCategory,
      description: `High-quality ${subCategoryName.toLowerCase()} component designed specifically for ${categoryName} machinery. ` +
        'Manufactured to strict OEM specifications for perfect fitment and reliable performance. ' +
        'Constructed from premium materials to ensure durability in demanding applications. ' +
        'Engineered for long service life and trouble-free operation in all conditions.',
      shortDescription: `Premium ${subCategoryName.toLowerCase()} component for ${categoryName} with OEM specifications.`,
      imageUrl: 'https://images.pexels.com/photos/162568/oil-pump-pump-jack-donkey-pump-jack-pump-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      partNumber: generatePartNumber(category),
      compatibleWith: category === 'jcb-3dx' ? ['JCB 3DX', 'JCB 3DX Super', 'JCB 3DX Eco'] :
                     category === 'jcb-3d' ? ['JCB 3D', 'JCB 3D Super'] :
                     ['JCB N/M Series', 'JCB New Model'],
      inStock: Math.random() > 0.3,
      featured: Math.random() > 0.9
    });
    
    productId++;
  });
});

// Add the additional products to the main array
products.push(...additionalProducts);

// Remove the old case parts products section
/*
// Generate 8 more products to have 20 in total
for (let i = 13; i <= 20; i++) {
  const categories: ProductCategory[] = ['jcb-3dx', 'jcb-3d', 'jcb-nm'];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  let subCategory = '';
  switch (randomCategory) {
    case 'jcb-3dx':
      subCategory = ['Hydraulic Ram', 'Hydraulic System', 'Transmission', 'Bearing'][Math.floor(Math.random() * 4)];
      break;
    case 'jcb-3d':
      subCategory = ['Pivot Pins', 'Transmission', 'Electrical Parts', 'Filters'][Math.floor(Math.random() * 4)];
      break;
    case 'jcb-nm':
      subCategory = ['Bearing', 'Electrical Parts', 'Engine Parts', 'Cabin Parts'][Math.floor(Math.random() * 4)];
      break;
  }
  
  // Random compatibility
  const jcbModels = randomCategory === 'jcb-3dx' ? ['JCB 3DX', 'JCB 3DX Super', 'JCB 3DX Eco'] :
                   randomCategory === 'jcb-3d' ? ['JCB 3D', 'JCB 3D Super'] :
                   ['JCB N/M Series', 'JCB New Model'];
  const randomCompatibility = [];
  const numCompatible = 1 + Math.floor(Math.random() * jcbModels.length);
  
  for (let j = 0; j < numCompatible; j++) {
    const randomModel = jcbModels[Math.floor(Math.random() * jcbModels.length)];
    if (!randomCompatibility.includes(randomModel)) {
      randomCompatibility.push(randomModel);
    }
  }

  products.push({
    id: i.toString(),
    name: `${subCategory} Component ${i}`,
    category: randomCategory,
    subCategory,
    description: `High-quality ${subCategory.toLowerCase()} component designed specifically for JCB machinery. ` +
      'Manufactured to strict OEM specifications for perfect fitment and reliable performance. ' +
      'Constructed from premium materials to ensure durability in demanding applications. ' +
      'Engineered for long service life and trouble-free operation in all conditions.',
    shortDescription: `Premium ${subCategory.toLowerCase()} component for JCB equipment with OEM specifications.`,
    imageUrl: 'https://images.pexels.com/photos/162568/oil-pump-pump-jack-donkey-pump-jack-pump-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: generatePartNumber(randomCategory),
    compatibleWith: randomCompatibility,
    inStock: Math.random() > 0.3, // 70% chance of being in stock
    featured: Math.random() > 0.8, // 20% chance of being featured
  });
}
*/

// Function to get products by category
export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(product => product.category === category);
};

// Function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

// Function to get a single product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Get all categories with counts
export const getCategoriesWithCounts = (): { label: string; value: ProductCategory; count: number }[] => {
  const categoryCounts: Record<string, number> = {};
  
  products.forEach(product => {
    if (categoryCounts[product.category]) {
      categoryCounts[product.category]++;
    } else {
      categoryCounts[product.category] = 1;
    }
  });
  
  return [
    { label: '🚜 JCB 3DX', value: 'jcb-3dx', count: categoryCounts['jcb-3dx'] || 0 },
    { label: '🔧 JCB 3D', value: 'jcb-3d', count: categoryCounts['jcb-3d'] || 0 },
    { label: '⚡ JCB N/M (New Model)', value: 'jcb-nm', count: categoryCounts['jcb-nm'] || 0 },
  ];
};

// Get sub-categories with counts for a specific main category
export const getSubCategoriesWithCounts = (mainCategory?: ProductCategory): { label: string; value: string; count: number }[] => {
  const subCategoryCounts: Record<string, number> = {};
  
  products
    .filter(product => !mainCategory || product.category === mainCategory)
    .forEach(product => {
      if (product.subCategory) {
        if (subCategoryCounts[product.subCategory]) {
          subCategoryCounts[product.subCategory]++;
        } else {
          subCategoryCounts[product.subCategory] = 1;
        }
      }
    });
  
  const subCategories = [
    'Bushes', 'Pivot Pins', 'Transmission', 'Hydraulic System', 'Fabrication / Casting Parts',
    'Bearing', 'Electrical Parts', 'Seals, O-Rings & Seal Kits', 'Engine Parts', 'Cabin Parts',
    'Filters', 'Miscellaneous Parts', 'Bolts & Nuts', 'Hydraulic Ram'
  ];
  
  return subCategories.map(subCat => ({
    label: subCat,
    value: subCat.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''),
    count: subCategoryCounts[subCat] || 0
  }));
};