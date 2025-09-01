
export const products: Product[] = [
  // JCB 3DX Parts
  {
 id: '1',
  name: 'All Bush',
  category: 'jcb-3dx',
  subCategory: 'Bushes',
  description: 
    'High-quality replacement bush designed for long service life and smooth operation. Provides reliable performance in demanding working conditions.',
  shortDescription: 'Durable bucket bush for JCB 3DX linkage.',
  imageUrl: '/assets/bush/allbush.jpg',
  partNumber: '809/00750',
  compatibleWith: ['JCB 3DX'],
  inStock: true,
  },
  {
     id: '2',
  name: 'Bush 750 JCB 3DX',
  category: 'jcb-3dx',
  subCategory: 'Bushes',
  description: 
    'Heavy-duty bucket bush built for strength and durability. Designed to handle high loads and ensure smooth movement in JCB 3DX and 3D machines.',
  shortDescription: 'Heavy-duty bucket bush 750 for JCB 3DX/3D.',
  imageUrl: '/assets/bush/bush750.jpg',
  partNumber: '809/00750',
  compatibleWith: ['JCB 3DX', 'JCB 3D'],
  inStock: true,
  },
  
  {
     id: '3',
  name: 'All PINs',
  category: 'jcb-3d',
  subCategory: 'Pivot Pins',
  description: 
    'Precision replacement pivot pins designed for smooth articulation and long-lasting performance. Helps maintain proper alignment and reduces wear in the linkage assembly.',
  shortDescription: 'Complete pivot pin set for linkage assembly.',
  imageUrl: '/assets/pin/allpin.png',
  partNumber: '3D-84726',
  compatibleWith: ['JCB 3D', 'JCB 3DX'],
  inStock: true,
  featured: true,
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