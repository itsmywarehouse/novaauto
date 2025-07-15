import { Product, ProductCategory } from '../types';

// Helper function to generate random part numbers
const generatePartNumber = (category: ProductCategory): string => {
  const prefix = category.substring(0, 3).toUpperCase();
  const random = Math.floor(10000 + Math.random() * 90000);
  return `${prefix}-${random}`;
};

export const products: Product[] = [
  // Power Parts - Hydraulic Systems
  {
    id: '1',
    name: 'Hydraulic Cylinder Assembly',
    category: 'power-parts',
    subCategory: 'Hydraulic Rams',
    description: 
      'High-quality hydraulic cylinder assembly designed for JCB excavators and backhoes. ' +
      'Engineered with precision to provide reliable performance under heavy workloads. ' +
      'Features durable seals and chrome-plated rods to resist corrosion and extend service life. ' +
      'Manufactured to OEM specifications for perfect fitment and long-lasting operation.',
    shortDescription: 'Premium hydraulic cylinder for JCB excavators and backhoes with extended service life.',
    imageUrl: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'HYD-32415',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB JS200', 'JCB JS220'],
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
    name: 'Hydraulic Pump Assembly',
    category: 'power-parts',
    subCategory: 'Hydraulic Pumps',
    description: 
      'High-efficiency hydraulic pump assembly designed specifically for JCB machinery. ' +
      'Delivers consistent flow and pressure to ensure optimal performance of all hydraulic systems. ' +
      'Constructed with precision-machined components for minimal energy loss and maximum output. ' +
      'Designed to withstand the demands of heavy-duty construction and excavation work.',
    shortDescription: 'High-efficiency hydraulic pump for JCB equipment with reliable pressure delivery.',
    imageUrl: 'https://images.pexels.com/photos/162568/oil-pump-pump-jack-donkey-pump-jack-pump-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'HYD-75362',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB 5CX', 'JCB TM320'],
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
    name: 'Hydraulic Control Valve',
    category: 'power-parts',
    subCategory: 'Hydraulic Hoses & Fittings',
    description: 
      'Precision-engineered hydraulic control valve for JCB machinery. ' +
      'Provides accurate flow control and pressure regulation for optimal equipment operation. ' +
      'Features multi-spool design to control multiple hydraulic functions simultaneously. ' +
      'Built with high-quality materials to ensure durability and reliable performance even in extreme conditions.',
    shortDescription: 'Precision control valve for JCB hydraulic systems with multi-function capability.',
    imageUrl: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'HYD-42198',
    compatibleWith: ['JCB JS130', 'JCB JS145', 'JCB JS160', 'JCB 3CX'],
    inStock: true,
    specifications: {
      'Number of Spools': '4',
      'Maximum Pressure': '350 bar',
      'Flow Capacity': '180 L/min',
      'Control Type': 'Manual/Pilot',
      'Relief Valve Setting': '210 bar'
    }
  },

  // Drive & Motion - Transmission and Axle Parts
  {
    id: '4',
    name: 'Transmission Gear Set',
    category: 'drive-motion',
    subCategory: 'Transmission',
    description: 
      'Complete transmission gear set manufactured to OEM specifications for JCB equipment. ' +
      'Includes primary and secondary gears, clutch plates, and torque converter components. ' +
      'Precision-machined from high-grade steel for optimal power transmission and durability. ' +
      'Designed for maximum torque handling and smooth gear changes.',
    shortDescription: 'Complete transmission gear set for JCB equipment with all necessary components.',
    imageUrl: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'DM-TX-84726',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB 5CX'],
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
    id: '5',
    name: 'Tapered Roller Bearing Set',
    category: 'drive-motion',
    subCategory: '🔩 Bearings – Taper, Ball, Needle',
    description: 
      'Premium tapered roller bearing set from Rapid Bearing for heavy-duty JCB applications. ' +
      'Designed to handle high radial and axial loads with superior durability. ' +
      'Features precision-ground raceways and rollers for smooth, vibration-free operation. ' +
      'Manufactured to strict quality standards for extended service life under demanding conditions.',
    shortDescription: 'Premium tapered roller bearings from Rapid Bearing for heavy-duty applications.',
    imageUrl: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'RB-TR-59104',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB JS220'],
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

  // Body & Maintenance - Filters and Electrical
  {
    id: '6',
    name: 'Premium Engine Oil Filter',
    category: 'body-maintenance',
    subCategory: 'Filters',
    description: 
      'High-capacity engine oil filter designed specifically for JCB equipment. ' +
      'Features advanced filtration media to capture even the smallest contaminants and protect your engine. ' +
      'Built with robust housing to withstand high pressures and harsh operating environments. ' +
      'Ensures optimal oil flow and engine protection for extended service intervals.',
    shortDescription: 'Advanced oil filter for JCB engines with superior contaminant capture.',
    imageUrl: 'https://images.pexels.com/photos/11002456/pexels-photo-11002456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'FIL-12390',
    compatibleWith: ['All JCB diesel engines'],
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
    id: '7',
    name: 'Air Filter Element',
    category: 'body-maintenance',
    subCategory: 'Filters',
    description: 
      'Heavy-duty air filter element for JCB machinery. ' +
      'Designed to prevent dust, dirt, and debris from entering the engine intake system. ' +
      'Manufactured with multiple layers of specially treated filter media for maximum dirt-holding capacity. ' +
      'Ensures clean air supply to the engine for optimal combustion and performance.',
    shortDescription: 'Heavy-duty air filter for JCB equipment with multi-layer filtration.',
    imageUrl: 'https://images.pexels.com/photos/5980640/pexels-photo-5980640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'FIL-38621',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB 5CX', 'JCB TM320'],
    inStock: true,
    featured: true,
    specifications: {
      'Filtration Efficiency': '99.9% at 5 microns',
      'Flow Rate': '600 m³/h',
      'Outer Diameter': '320mm',
      'Inner Diameter': '180mm',
      'Height': '380mm'
    }
  },

  // Body & Maintenance - Electrical Systems
  {
    id: '8',
    name: 'Starter Motor Assembly',
    category: 'body-maintenance',
    subCategory: 'Electrical',
    description: 
      'High-torque starter motor assembly for JCB diesel engines. ' +
      'Engineered to provide reliable starting performance even in cold weather conditions. ' +
      'Features heavy-duty solenoid and reinforced drive gear for extended service life. ' +
      'Built to withstand the vibration and shock associated with heavy equipment operation.',
    shortDescription: 'Heavy-duty starter motor for JCB diesel engines with cold-weather performance.',
    imageUrl: 'https://images.pexels.com/photos/10809076/pexels-photo-10809076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'ELE-27381',
    compatibleWith: ['JCB 444 Engine', 'JCB 448 Engine', 'JCB Dieselmax'],
    inStock: true,
    specifications: {
      'Voltage': '24V',
      'Power': '4.5 kW',
      'Gear Ratio': '9.5:1',
      'Weight': '12 kg',
      'Direction': 'Clockwise'
    }
  },
  {
    id: '9',
    name: 'Alternator Assembly',
    category: 'body-maintenance',
    subCategory: 'Electrical',
    description: 
      'High-output alternator assembly for JCB machinery. ' +
      'Designed to provide stable electrical power for all vehicle systems and battery charging. ' +
      'Features heavy-duty construction with sealed bearings for protection against dust and moisture. ' +
      'Incorporates advanced voltage regulation for consistent output under varying engine speeds.',
    shortDescription: 'High-output alternator for JCB equipment with advanced voltage regulation.',
    imageUrl: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'ELE-54109',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB Fastrac', 'JCB TM320'],
    inStock: false,
    specifications: {
      'Voltage': '24V',
      'Output': '110A',
      'Mount Type': 'Pad mount',
      'Pulley Type': 'Serpentine',
      'Regulator': 'Internal'
    }
  },

  // Tools & Attachments
  {
    id: '10',
    name: 'Excavator Bucket Assembly',
    category: 'tools-attachments',
    subCategory: 'Buckets',
    description: 
      'Heavy-duty excavator bucket assembly specifically designed for JCB machinery. ' +
      'Constructed from high-strength steel with reinforced cutting edge and side plates. ' +
      'Features optimized shape for maximum digging efficiency and material retention. ' +
      'Built to withstand the most demanding excavation and loading applications.',
    shortDescription: 'Heavy-duty excavator bucket with reinforced steel construction.',
    imageUrl: 'https://images.pexels.com/photos/760110/pexels-photo-760110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'TA-BK-92745',
    compatibleWith: ['All JCB models'],
    inStock: true,
    specifications: {
      'Capacity': '1.2 m³',
      'Weight': '850 kg',
      'Width': '1800mm',
      'Material': 'High-tensile steel',
      'Cutting Edge': 'Replaceable hardened steel'
    }
  },
  {
    id: '11',
    name: 'Quick Coupler System',
    category: 'tools-attachments',
    subCategory: 'Quick Couplers',
    description: 
      'Universal quick coupler system for JCB excavating equipment. ' +
      'Allows rapid attachment changes without leaving the operator cab. ' +
      'Features dual safety locking system and visual indicators for secure attachment. ' +
      'Built with high-strength steel for maximum safety and reliability in demanding applications.',
    shortDescription: 'Universal quick coupler with dual safety locking for JCB excavators.',
    imageUrl: 'https://images.pexels.com/photos/4032580/pexels-photo-4032580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'TA-QC-68132',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB JS130', 'JCB JS220'],
    inStock: true,
    featured: true,
    specifications: {
      'Weight': '120 kg',
      'Load Capacity': '8 tons',
      'Pin Sizes': '45mm/50mm',
      'Safety System': 'Dual locking mechanism',
      'Material': 'High-strength steel'
    }
  },
  {
    id: '12',
    name: 'Hydraulic Breaker Assembly',
    category: 'tools-attachments',
    subCategory: 'Hydraulic Breaker Parts',
    description: 
      'Heavy-duty hydraulic breaker assembly for JCB excavators. ' +
      'Designed for demolition, quarrying, and heavy construction applications. ' +
      'Features auto-greasing system and anti-blank firing protection. ' +
      'Constructed from hardened steel components for maximum durability and impact resistance.',
    shortDescription: 'Heavy-duty hydraulic breaker with auto-greasing and protection systems.',
    imageUrl: 'https://images.pexels.com/photos/6517112/pexels-photo-6517112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'TA-HB-41587',
    compatibleWith: ['JCB JS130', 'JCB JS145', 'JCB JS160', 'JCB JS220'],
    inStock: true,
    specifications: {
      'Weight': '850 kg',
      'Impact Energy': '2500 J',
      'Blow Rate': '400-700 bpm',
      'Tool Diameter': '155mm',
      'Auto-Greasing': 'Integrated system'
    }
  }
];

// Generate 8 more products to have 20 in total
for (let i = 13; i <= 20; i++) {
  const categories: ProductCategory[] = ['power-parts', 'drive-motion', 'tools-attachments', 'body-maintenance', 'case-parts'];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  let subCategory = '';
  switch (randomCategory) {
    case 'power-parts':
      subCategory = ['Hydraulic Rams', 'Hydraulic Pumps', 'Ram Repair Kits', 'Seal Kits & O-Rings'][Math.floor(Math.random() * 4)];
      break;
    case 'drive-motion':
      subCategory = ['Axle Parts', 'Transmission', 'Pin & Bush Kits', '🔩 Bearings – Taper, Ball, Needle'][Math.floor(Math.random() * 4)];
      break;
    case 'tools-attachments':
      subCategory = ['Buckets', 'Quick Couplers', 'Hydraulic Breaker Parts', 'Ground Engaging Tools (GET)'][Math.floor(Math.random() * 4)];
      break;
    case 'body-maintenance':
      subCategory = ['Electrical', 'Filters', 'Fasteners', 'Miscellaneous'][Math.floor(Math.random() * 4)];
      break;
    case 'case-parts':
      subCategory = ['Transmission Casing', 'Axle Housing', 'Hydraulic Tank', 'Gearbox Housing'][Math.floor(Math.random() * 4)];
      break;
  }
  
  // Random compatibility
  const jcbModels = ['JCB 3CX', 'JCB 4CX', 'JCB 5CX', 'JCB JS130', 'JCB JS145', 'JCB JS160', 'JCB JS220', 'JCB TM320', 'JCB Fastrac'];
  const randomCompatibility = [];
  const numCompatible = 2 + Math.floor(Math.random() * 4); // 2-5 compatible models
  
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

// Add Case Parts products
const casePartsProducts: Product[] = [
  {
    id: 'cp-1',
    name: 'Transmission Casing Assembly',
    category: 'case-parts',
    subCategory: 'Transmission Housing',
    description: 
      'Heavy-duty transmission casing assembly for JCB backhoe loaders. ' +
      'Precision-cast from high-grade aluminum alloy for optimal strength-to-weight ratio. ' +
      'Features integrated mounting points and sealed bearing housings for reliable operation. ' +
      'Designed to withstand the high torque loads and vibrations of heavy equipment operation.',
    shortDescription: 'Heavy-duty transmission casing for JCB equipment with precision-cast construction.',
    imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'CP-TX-4521',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB 5CX'],
    inStock: true,
    featured: true,
    specifications: {
      'Material': 'Cast aluminum alloy',
      'Weight': '85 kg',
      'Mounting Points': '8 precision-machined',
      'Bearing Seats': 'Sealed design',
      'Finish': 'Powder coated'
    }
  },
  {
    id: 'cp-2',
    name: 'Axle Housing Complete',
    category: 'case-parts',
    subCategory: 'Axle Housing',
    description: 
      'Complete axle housing assembly for JCB backhoe loaders. ' +
      'Manufactured from high-strength steel with reinforced mounting brackets. ' +
      'Includes differential housing and all necessary mounting hardware. ' +
      'Heat-treated for maximum durability and resistance to stress fractures.',
    shortDescription: 'Complete axle housing for JCB equipment with reinforced steel construction.',
    imageUrl: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'CP-AX-7834',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB TM320'],
    inStock: true,
    specifications: {
      'Material': 'High-strength steel',
      'Weight': '120 kg',
      'Load Capacity': '15 tons',
      'Treatment': 'Heat-treated',
      'Mounting': 'Reinforced brackets'
    }
  },
  {
    id: 'cp-3',
    name: 'Hydraulic Tank Assembly',
    category: 'case-parts',
    subCategory: 'Hydraulic Tank',
    description: 
      'High-capacity hydraulic tank assembly for JCB machinery. ' +
      'Features integrated filtration system and temperature monitoring. ' +
      'Constructed from corrosion-resistant steel with internal baffles for fluid stability. ' +
      'Includes sight gauge, drain valve, and breather cap for easy maintenance.',
    shortDescription: 'High-capacity hydraulic tank with integrated filtration and monitoring.',
    imageUrl: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'CP-HT-2156',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB 5CX', 'JCB JS220'],
    inStock: true,
    featured: true,
    specifications: {
      'Capacity': '180 liters',
      'Material': 'Corrosion-resistant steel',
      'Filtration': 'Integrated return filter',
      'Monitoring': 'Temperature gauge',
      'Accessories': 'Sight gauge, drain valve, breather'
    }
  },
  {
    id: 'cp-4',
    name: 'Gearbox Housing',
    category: 'case-parts',
    subCategory: 'Gearbox Housing',
    description: 
      'Precision-machined gearbox housing for JCB transmission systems. ' +
      'Features accurate bearing seats and gear mounting surfaces for optimal alignment. ' +
      'Manufactured from high-grade cast iron for superior strength and vibration dampening. ' +
      'Includes integrated oil passages and drain plugs for proper lubrication.',
    shortDescription: 'Precision gearbox housing with accurate bearing seats and oil passages.',
    imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'CP-GB-9273',
    compatibleWith: ['JCB 3CX', 'JCB 4CX', 'JCB Fastrac'],
    inStock: false,
    specifications: {
      'Material': 'High-grade cast iron',
      'Weight': '65 kg',
      'Bearing Seats': 'Precision-machined',
      'Oil Capacity': '12 liters',
      'Mounting': 'Standard SAE pattern'
    }
  },
  {
    id: 'cp-5',
    name: 'Boom Body Structure',
    category: 'case-parts',
    subCategory: 'Boom & Dipper Body',
    description: 
      'Heavy-duty boom body structure for JCB excavators and backhoes. ' +
      'Welded from high-tensile steel plates for maximum strength and durability. ' +
      'Features reinforced pivot points and hydraulic cylinder mounting brackets. ' +
      'Stress-relieved and painted for long-term corrosion resistance.',
    shortDescription: 'Heavy-duty boom structure with reinforced pivot points and mounting brackets.',
    imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'CP-BM-5647',
    compatibleWith: ['JCB JS130', 'JCB JS145', 'JCB JS160'],
    inStock: true,
    specifications: {
      'Material': 'High-tensile steel',
      'Weight': '450 kg',
      'Reach': '6.2 meters',
      'Lift Capacity': '3.5 tons',
      'Finish': 'Primer and topcoat'
    }
  },
  {
    id: 'cp-6',
    name: 'Dipper Arm Assembly',
    category: 'case-parts',
    subCategory: 'Boom & Dipper Body',
    description: 
      'Robust dipper arm assembly for JCB excavating equipment. ' +
      'Fabricated from high-strength steel with reinforced attachment points. ' +
      'Features integrated hydraulic lines and protective guards. ' +
      'Designed for maximum digging force and precise bucket control.',
    shortDescription: 'Robust dipper arm with integrated hydraulics and reinforced attachment points.',
    imageUrl: 'https://images.pexels.com/photos/6517112/pexels-photo-6517112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    partNumber: 'CP-DP-8912',
    compatibleWith: ['JCB JS130', 'JCB JS145', 'JCB JS220'],
    inStock: true,
    featured: true,
    specifications: {
      'Material': 'High-strength steel',
      'Weight': '280 kg',
      'Length': '2.8 meters',
      'Digging Force': '85 kN',
      'Hydraulic Lines': 'Integrated routing'
    }
  }
];

// Add case parts to main products array
products.push(...casePartsProducts);

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
    { label: '⚡ Power Parts', value: 'power-parts', count: categoryCounts['power-parts'] || 0 },
    { label: '🚜 Drive & Motion', value: 'drive-motion', count: categoryCounts['drive-motion'] || 0 },
    { label: '🔨 Tools & Attachments', value: 'tools-attachments', count: categoryCounts['tools-attachments'] || 0 },
    { label: '🛡️ Body & Maintenance', value: 'body-maintenance', count: categoryCounts['body-maintenance'] || 0 },
    { label: 'Case Parts', value: 'case-parts', count: categoryCounts['case-parts'] || 0 },
  ];
};