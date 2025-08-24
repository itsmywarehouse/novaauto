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
    case 'rapid-bearing':
      prefix = 'RB';
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
    name: 'Bush 750 JCB 3DX',
    category: 'jcb-3dx',
    subCategory: 'Bushes',
    description: 
      'Bucket Bush (Type 750), used in bucket linkage of JCB 3DX backhoe loader.',
    shortDescription: 'High-efficiency hydraulic pump for JCB 3DX with reliable pressure delivery.',
    imageUrl: '/assets/images/error.png',
    partNumber: '809/00750',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
    specifications: {
      'Flow Rate': '120 L/min',
      'Weight': '35 kg',
    }
  },
  {
    id: '2',
    name: 'Bush 750 JCB 3DX',
    category: 'jcb-3dx',
    subCategory: 'Bushes',
    description: 
      'Bucket Bush (Type 750), used in bucket linkage of JCB 3DX backhoe loader.',
    shortDescription: 'High-efficiency hydraulic pump for JCB 3DX with reliable pressure delivery.',
    imageUrl: '/assets/images/error.png',
    partNumber: '809/00750',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
    specifications: {
      'Flow Rate': '120 L/min',
      'Weight': '35 kg',
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
    name: 'ACC KNOB With CABLE',
    category: 'jcb-3dx',
    subCategory: 'Electrical Parts',
    description: 
      'A comprehensive switch assembly tailored for JCB 3DX and 3CX backhoe loaders ' +
      'featuring an accelerator control knob with cable, joystick-integrated dump switch' +
      'and wiring harness—all designed for direct-fit installation and robust field performance.',

      shortDescription: 'Durable wired switch assembly for JCB 3DX—simple install, long-lasting reliability.',
    imageUrl: '/assets/images/error.png',
    partNumber: 'NA',
    compatibleWith: ['JCB 3DX'],
    inStock: true,
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
  // Rapid Bearing Products
  {
    id: '9',
    name: 'Rapid Bearing Taper Roller Bearing',
    category: 'rapid-bearing',
    subCategory: 'Taper Roller Bearing',
    description: 
      'Premium taper roller bearing manufactured by Rapid Bearing for heavy-duty applications. ' +
      'Designed to handle combined radial and axial loads with exceptional durability. ' +
      'Features precision-ground raceways and high-quality steel construction. ' +
      'Ideal for construction equipment, automotive, and industrial machinery applications.',
    shortDescription: 'Premium taper roller bearing for heavy-duty industrial applications.',
    imageUrl: '/assets/bearing/Taper_Roller.png',
    partNumber: 'Multiple',
    compatibleWith: ['JCB Equipment', 'Industrial Machinery', 'Automotive Applications'],
    inStock: true,
    featured: true,
    specifications: {
    'Ask for part numbers which we have': ''   
    }
  },
  {
    id: '10',
    name: 'Rapid Bearing Deep Groove Ball Bearing',
    category: 'rapid-bearing',
    subCategory: 'Ball Bearing',
    description: 
      'High-precision deep groove ball bearing from Rapid Bearing suitable for various applications. ' +
      'Features low friction design with excellent speed capabilities and long service life. ' +
      'Manufactured with premium steel and advanced heat treatment for superior performance. ' +
      'Suitable for electric motors, pumps, and general machinery applications.',
    shortDescription: 'High-precision ball bearing with low friction and excellent speed capabilities.',
    imageUrl: '/assets/bearing/ball.jpg',
    partNumber: 'Multiple',
    compatibleWith: ['Electric Motors', 'Pumps', 'General Machinery'],
    inStock: true,
    specifications: {
      'Ask for part numbers which we have': ''   
    }
  },
  {
    id: '11',
    name: 'Rapid Bearing Spherical Roller Bearing 22215',
    category: 'rapid-bearing',
    subCategory: 'Spherical Bearing',
    description: 
      'Heavy-duty spherical roller bearing designed for applications with shaft misalignment. ' +
      'Self-aligning design accommodates angular misalignment and shaft deflection. ' +
      'Excellent for heavy loads and harsh operating conditions in construction equipment. ' +
      'Features cage design optimized for high load capacity and extended service life.',
    shortDescription: 'Self-aligning spherical bearing for heavy loads and shaft misalignment.',
    imageUrl: '/assets/bearing/spherical_roller.jpg',
    partNumber: 'Multiple',
    compatibleWith: ['Construction Equipment', 'Mining Machinery', 'Heavy Industry'],
    inStock: true,
    specifications: {
      
      'Ask for part numbers which we have': ''    
    }
  }
];

// Generate additional products for each category and sub-category
const additionalProducts: Product[] = [];
const categories: ProductCategory[] = ['jcb-3dx', 'jcb-3d', 'jcb-nm', 'rapid-bearing'];
const jcbSubCategories = [
  'Bushes', 'Pivot Pins', 'Transmission', 'Hydraulic System', 'Fabrication / Casting Parts',
  'Bearing', 'Electrical Parts', 'Seals, O-Rings & Seal Kits', 'Engine Parts', 'Cabin Parts',
  'Filters', 'Miscellaneous Parts', 'Bolts & Nuts', 'Hydraulic Ram'
];
const rapidBearingSubCategories = [
  'Taper Roller Bearing', 'Ball Bearing', 'Spherical Bearing'
];

let productId = 12;

categories.forEach(category => {
  const subCategories = category === 'rapid-bearing' ? rapidBearingSubCategories : jcbSubCategories;
  
  subCategories.forEach(subCategory => {
    // Skip if we already have a product for this combination
    const existingProduct = products.find(p => p.category === category && p.subCategory === subCategory);
    if (existingProduct) return;
    
    const categoryName = category === 'jcb-3dx' ? 'JCB 3DX' : 
                        category === 'jcb-3d' ? 'JCB 3D' : 
                        category === 'jcb-nm' ? 'JCB N/M' :
                        'Rapid Bearing';
    
    let description = '';
    let compatibleWith: string[] = [];
    
    if (category === 'rapid-bearing') {
      description = `High-quality ${subCategory.toLowerCase()} from Rapid Bearing designed for industrial applications. ` +
        'Manufactured to strict quality standards for extended service life under demanding conditions. ' +
        'Features precision engineering and premium materials for reliable performance. ' +
        'Suitable for various industrial and construction equipment applications.';
      compatibleWith = ['Industrial Machinery', 'Construction Equipment', 'Automotive Applications'];
    } else {
      description = `High-quality ${subCategory.toLowerCase()} component designed specifically for ${categoryName} machinery. ` +
        'Manufactured to strict OEM specifications for perfect fitment and reliable performance. ' +
        'Constructed from premium materials to ensure durability in demanding applications. ' +
        'Engineered for long service life and trouble-free operation in all conditions.';
      compatibleWith = category === 'jcb-3dx' ? ['JCB 3DX', 'JCB 3DX Super', 'JCB 3DX Eco'] :
                     category === 'jcb-3d' ? ['JCB 3D', 'JCB 3D Super'] :
                     ['JCB N/M Series', 'JCB New Model'];
    }
    
    additionalProducts.push({
      id: productId.toString(),
      name: `${categoryName} ${subCategory} Component`,
      category,
      subCategory,
      description,
      shortDescription: `Premium ${subCategory.toLowerCase()} component for ${categoryName} with OEM specifications.`,
      imageUrl: 'https://images.pexels.com/photos/162568/oil-pump-pump-jack-donkey-pump-jack-pump-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      partNumber: generatePartNumber(category),
      compatibleWith,
      inStock: Math.random() > 0.3,
      featured: Math.random() > 0.9
    });
    
    productId++;
  });
});

// Add the additional products to the main array
products.push(...additionalProducts);

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
    { label: 'JCB 3DX', value: 'jcb-3dx', count: categoryCounts['jcb-3dx'] || 0 },
    { label: 'JCB 3D', value: 'jcb-3d', count: categoryCounts['jcb-3d'] || 0 },
    { label: 'JCB N/M (New Model)', value: 'jcb-nm', count: categoryCounts['jcb-nm'] || 0 },
    { label: 'Rapid Bearing', value: 'rapid-bearing', count: categoryCounts['rapid-bearing'] || 0 },
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
  
  let subCategories: string[] = [];
  
  if (mainCategory === 'rapid-bearing') {
    subCategories = ['Taper Roller Bearing', 'Ball Bearing', 'Spherical Bearing'];
  } else {
    subCategories = [
      'Bushes', 'Pivot Pins', 'Transmission', 'Hydraulic System', 'Fabrication / Casting Parts',
      'Bearing', 'Electrical Parts', 'Seals, O-Rings & Seal Kits', 'Engine Parts', 'Cabin Parts',
      'Filters', 'Miscellaneous Parts', 'Bolts & Nuts', 'Hydraulic Ram'
    ];
  }
  
  return subCategories.map(subCat => ({
    label: subCat,
    value: subCat.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''),
    count: subCategoryCounts[subCat] || 0
  }));
};