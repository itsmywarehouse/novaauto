import { CategoryWithSubcategories, ProductCategory } from '../types';

export const categoryData: CategoryWithSubcategories[] = [
  {
    id: 'power-parts',
    name: '⚡ Power Parts',
    icon: '⚡',
    description: 'Hydraulic systems, pumps, rams, and power transmission components',
    subcategories: [
      { name: 'Hydraulic Rams', description: 'High-performance hydraulic cylinders and rams' },
      { name: 'Hydraulic Pumps', description: 'Reliable hydraulic pumps for all JCB models' },
      { name: 'Ram Repair Kits', description: 'Complete kits with pistons, rods, and glands' },
      { name: 'Seal Kits & O-Rings', description: 'Premium sealing solutions for hydraulic systems' },
      { name: 'Lubricants & Grease', description: 'High-quality lubricants and maintenance fluids' },
      { name: 'Hydraulic Hoses & Fittings', description: 'Durable hoses and precision fittings' }
    ]
  },
  {
    id: 'drive-motion',
    name: '🚜 Drive & Motion',
    icon: '🚜',
    description: 'Transmission, axle parts, bearings, and motion control components',
    subcategories: [
      { name: 'Axle Parts', description: 'Crown pinion, differential, and drive shafts' },
      { name: 'Transmission', description: 'Gears, clutch plates, and torque converters' },
      { name: 'Pin & Bush Kits', description: 'Precision pins and bushings for smooth operation' },
      { name: 'Shims & Thrust Washers', description: 'Precision shims and washers for proper alignment' },
      { 
        name: '🔩 Bearings – Taper, Ball, Needle', 
        description: '🛠️ Powered by ✨ Rapid Bearing',
        icon: '🔩'
      }
    ]
  },
  {
    id: 'tools-attachments',
    name: '🔨 Tools & Attachments',
    icon: '🔨',
    description: 'Buckets, breakers, ground engaging tools, and attachment systems',
    subcategories: [
      { name: 'Buckets', description: 'Various bucket types for different applications' },
      { name: 'Forks', description: 'Heavy-duty forks for material handling' },
      { name: 'Quick Couplers', description: 'Fast attachment changing systems' },
      { name: 'Hydraulic Breaker Parts', description: 'Chisels, seal kits, and pistons for breakers' },
      { name: 'Ground Engaging Tools (GET)', description: 'Teeth, side cutters, and cutting tools' },
      { name: 'Wear Parts', description: 'Cutting edges, liners, and wear protection' },
      { name: 'Control & Throttle Cables', description: 'Precision control cables and throttle systems' },
      { name: 'Assembly Kits', description: 'Complete kits with hoses, pins, and cylinders' }
    ]
  },
  {
    id: 'body-maintenance',
    name: '🛡️ Body & Maintenance',
    icon: '🛡️',
    description: 'Cabin parts, electrical systems, filters, and maintenance components',
    subcategories: [
      { name: 'Cabin, Bonnet, Mudguard, Glass', description: 'Body panels and glass components' },
      { name: 'Electrical', description: 'Wiring, lights, switches, and sensors' },
      { name: 'Filters', description: 'Oil, fuel, hydraulic, and air filtration systems' },
      { name: 'Fasteners', description: 'Nuts, bolts, U-clamps, and hardware' },
      { name: 'Fabrication', description: 'Boom/dipper repair and custom metal work' },
      { name: 'Miscellaneous', description: 'Rubber parts, seats, paints, and accessories' }
    ]
  },
  {
    id: 'case-parts',
    name: '🧱 Case Parts',
    icon: '🧱',
    description: 'Structural components, casings, and heavy-duty housing assemblies',
    subcategories: [
      { name: 'Transmission Casing', description: 'Heavy-duty transmission housing assemblies' },
      { name: 'Axle Housing', description: 'Complete axle housing and differential cases' },
      { name: 'Hydraulic Tank', description: 'Hydraulic fluid tanks and reservoir systems' },
      { name: 'Gearbox Housing', description: 'Precision gearbox casings and housings' },
      { name: 'Boom & Dipper Body', description: 'Structural boom and dipper assemblies' }
    ]
  }
];

export const getCategoryData = (categoryId: ProductCategory): CategoryWithSubcategories | undefined => {
  return categoryData.find(cat => cat.id === categoryId);
};

export const getAllCategories = (): CategoryWithSubcategories[] => {
  return categoryData;
};