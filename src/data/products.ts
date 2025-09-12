import type { Product, ProductCategory } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'All Bush',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Bushes'],
    description: 'High-quality replacement bush designed for long service life and smooth operation. Provides reliable performance in demanding working conditions.',
    shortDescription: 'Durable bucket bush for JCB 3DX linkage.',
    imageUrl: '/assets/bush/allbush.jpg',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Transmission Parts',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Transmission'],
    description: 'Durable transmission assembly designed for JCB 3DX and 3D machines. Ensures smooth power transfer, high load capacity, and reliable performance under heavy-duty operations.',
    shortDescription: 'Reliable transmission system for JCB 3DX/3D.',
    imageUrl: '/assets/Transmission/Transmission.png',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
  },
  {
    id: '3',
    name: 'All PINs',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Pivot Pins'],
    description: 'Precision replacement pivot pins designed for smooth articulation and long-lasting performance. Helps maintain proper alignment and reduces wear in the linkage assembly.',
    shortDescription: 'Complete pivot pin set for linkage assembly.',
    imageUrl: '/assets/pin/allpin.png',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3D', 'JCB 3DX'],
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Fabrication Casting Parts',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Fabrication / Casting Parts'],
    description: 'High-quality fabrication and casting parts designed for JCB 3D and 3DX machines. Built with heavy-duty materials to ensure durability, precision fit, and long service life under tough working conditions. Suitable for structural, mounting, and reinforcement applications in backhoe loaders.',
    shortDescription: 'Durable fabrication and casting parts for JCB 3D/3DX.',
    imageUrl: '/assets/Fabrication Casting Parts/Fabrication Casting Parts.png',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
    // featured: true,
  },
  // {
  //   id: '5',
  //   name: 'JCB 3DX Engine Oil Filter',
  //   categories: ['jcb-3dx'],
  //   subCategories: ['Filters'],
  //   description: 'High-capacity engine oil filter designed specifically for JCB 3DX equipment. Features advanced filtration media to capture even the smallest contaminants and protect your engine. Built with robust housing to withstand high pressures and harsh operating environments. Ensures optimal oil flow and engine protection for extended service intervals.',
  //   shortDescription: 'Advanced oil filter for JCB 3DX engines with superior contaminant capture.',
  //   imageUrl: 'https://images.pexels.com/photos/11002456/pexels-photo-11002456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   partNumber: '3DX-12390',
  //   compatibleWith: ['JCB 3DX', 'JCB 3DX Super', 'JCB 3DX Eco'],
  //   inStock: true,
  //   specifications: {
  //     'Filtration Rating': '10 microns',
  //     'Flow Rate': '25 L/min',
  //     'Bypass Valve': 'Integrated',
  //     'Thread Size': '3/4-16 UNF',
  //     'Height': '150mm'
  //   }
  // },
  {
    id: '5',
    name: 'Hydraulic System',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Hydraulic System'],
    description: 'Premium-quality hydraulic system parts designed for JCB 3D and JCB 3DX machines. Manufactured with heavy-duty materials to ensure durability, precision fit, and long service life under demanding working conditions. Ideal for structural, mounting, and reinforcement applications in backhoe loaders.',
    shortDescription: 'Durable hydraulic system parts for JCB 3D/3DX.',
    imageUrl: '/assets/Hydraulic System/Hydraulic_System.png',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
  },
  {
    id: '6',
    name: 'JCB Bearing',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Bearing'],
    description: 'High-quality JCB bearing designed for durability, smooth performance, and reliable support in heavy-duty machinery.',
    shortDescription: 'High-quality JCB bearing designed for durability, smooth performance, and reliable support in heavy-duty machinery.',
    imageUrl: '/assets/jcbBearing/Bearing.png',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
    featured: true,
  },
  {
    id: '7',
    name: 'ACC KNOB With CABLE',
    categories: ['jcb-3dx'],
    subCategories: ['Electrical Parts'],
    description: 'A comprehensive switch assembly tailored for JCB 3DX and 3CX backhoe loaders featuring an accelerator control knob with cable, joystick-integrated dump switch and wiring harness—all designed for direct-fit installation and robust field performance.',
    shortDescription: 'Durable wired switch assembly for JCB 3DX—simple install, long-lasting reliability.',
    imageUrl: '/assets/images/error.png',
    partNumber: 'NA',
    compatibleWith: ['JCB 3DX'],
    inStock: true,
  },
  {
    id: '8',
    name: 'Electrical Parts',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Electrical Parts'],
    description: 'Premium-quality electrical components for JCB 3D and 3DX backhoe loaders. Includes switches, sensors, relays, fuses, lighting, and wiring parts designed to ensure reliable performance, safety, and long service life in heavy-duty applications.',
    shortDescription: 'Reliable electrical components for JCB 3D/3DX – switches, sensors, relays, fuses, and lighting parts.',
    imageUrl: '/assets/Electrical Parts/Electrical_Parts.png',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
  },
  {
    id: '12',
    name: 'Seals O Rings Seal Kits',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Seals, O-Rings & Seal Kits'],
    description: 'Premium-quality electrical components for JCB 3D and 3DX backhoe loaders. Includes switches, sensors, relays, fuses, lighting, and wiring parts designed to ensure reliable performance, safety, and long service life in heavy-duty applications.',
    shortDescription: 'Reliable electrical components for JCB 3D/3DX – switches, sensors, relays, fuses, and lighting parts.',
    imageUrl: '/assets/Seals and O-Rings & Seal Kits/Seals and O-Rings & Seal Kits.png',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
  },
  {
    id: '13',
    name: 'Engine Parts',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Engine Parts'],
    description: 'High-quality engine components for JCB 3D and 3DX backhoe loaders. Includes pistons, liners, crankshafts, cylinder heads, valves, gaskets, and other essential parts designed to deliver reliable power, durability, and efficiency in demanding conditions.',
    shortDescription: 'Durable engine components for JCB 3D/3DX – pistons, liners, crankshafts, valves, and gaskets.',
    imageUrl: '/assets/Engine Parts/Engine Parts.jpeg',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
  },
  {
    id: '14',
    name: 'Cabin Parts',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Cabin Parts'],
    description: 'Durable and ergonomic cabin parts for JCB 3D and 3DX backhoe loaders. Includes operator seats, levers, pedals, control panels, knobs, glass panels, doors, and other components designed for safety, comfort, and reliable machine operation.',
    shortDescription: 'High-quality cabin parts for JCB 3D/3DX – seats, levers, pedals, panels, and glass.',
    imageUrl: '/assets/Cabin Parts/Cabin Parts.jpeg',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
    featured: true,
  },
  {
    id: '15',
    name: 'Filters',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Filters'],
    description: 'High-performance filters for JCB 3D and 3DX backhoe loaders. Includes air filters, fuel filters, hydraulic filters, and oil filters designed to protect engines and hydraulic systems from contaminants, ensuring smooth operation, longer service life, and reduced maintenance costs.',
    shortDescription: 'Durable air, fuel, hydraulic, and oil filters for JCB 3D/3DX.',
    imageUrl: '/assets/Filters/Filters2.jpeg',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
  },
  {
    id: '16',
    name: 'Bolts Nuts',
    categories: ['jcb-3d', 'jcb-3dx', 'jcb-nm'],
    subCategories: ['Bolts Nuts'],
    description: 'High-strength bolts, nuts, washers, and fasteners for JCB 3D and 3DX backhoe loaders. Manufactured from durable materials to withstand heavy loads, vibrations, and harsh working conditions. Essential for secure assembly and long-lasting performance of various machine components.',
    shortDescription: 'Durable bolts, nuts, and fasteners for JCB 3D/3DX – built for strength and reliability.',
    imageUrl: '/assets/Bolts Nuts/Bolts Nuts.jpeg',
    partNumber: 'Multiple',
    compatibleWith: ['JCB 3DX', 'JCB 3D'],
    inStock: true,
    featured: true,
  },


  {
    id: '9',
    name: 'Rapid Bearing Taper Roller Bearing',
    categories: ['rapid-bearing'],
    subCategories: ['Taper Roller Bearing'],
    description: 'Premium taper roller bearing manufactured by Rapid Bearing for heavy-duty applications. Designed to handle combined radial and axial loads with exceptional durability. Features precision-ground raceways and high-quality steel construction. Ideal for construction equipment, automotive, and industrial machinery applications.',
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
    categories: ['rapid-bearing'],
    subCategories: ['Ball Bearing'],
    description: 'High-precision deep groove ball bearing from Rapid Bearing suitable for various applications. Features low friction design with excellent speed capabilities and long service life. Manufactured with premium steel and advanced heat treatment for superior performance. Suitable for electric motors, pumps, and general machinery applications.',
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
    categories: ['rapid-bearing'],
    subCategories: ['Spherical Bearing'],
    description: 'Heavy-duty spherical roller bearing designed for applications with shaft misalignment. Self-aligning design accommodates angular misalignment and shaft deflection. Excellent for heavy loads and harsh operating conditions in construction equipment. Features cage design optimized for high load capacity and extended service life.',
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
  return products.filter(product => product.categories.includes(category));
};

// Function to get products by subcategory
export const getProductsBySubCategory = (subCategory: string): Product[] => {
  return products.filter(product => product.subCategories.some((sub: string) => normalizeSubCategory(sub) === normalizeSubCategory(subCategory)));
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
    product.categories.forEach((cat: string) => {
      if (categoryCounts[cat]) {
        categoryCounts[cat]++;
      } else {
        categoryCounts[cat] = 1;
      }
    });
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
    .filter(product => !mainCategory || product.categories.includes(mainCategory))
    .forEach(product => {
      product.subCategories.forEach((subCat: string) => {
        if (subCategoryCounts[subCat]) {
          subCategoryCounts[subCat]++;
        } else {
          subCategoryCounts[subCat] = 1;
        }
      });
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
    value: normalizeSubCategory(subCat),
    count: subCategoryCounts[subCat] || 0
  }));
};

// Utility to normalize subcategory string
function normalizeSubCategory(subCat: string): string {
  return subCat.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// Get related products by shared categories or subcategories
export const getRelatedProducts = (product: Product, maxCount = 4): Product[] => {
  return products
    .filter(p =>
      p.id !== product.id && (
        p.categories.some((cat: string) => product.categories.includes(cat as ProductCategory)) ||
        p.subCategories.some((sub: string) => product.subCategories.includes(sub))
      )
    )
    .slice(0, maxCount);
};