export const CATEGORIES = [
  {
    id: 'hydraulics',
    name: 'Hydraulics & Pneumatics',
    short: 'Hydraulics',
    code: 'HYD',
    summary: 'Cylinders, pumps, valves, fluid and compressed air.',
    intro:
      'Hydraulic and pneumatic systems move most of the heavy loads in a plant. This section explains how cylinders, pumps, valves and compressed-air systems work, why they fail, and how to diagnose them with gauges, flow checks and fluid analysis instead of guesswork.',
    subtopics: ['Cylinders', 'Pumps', 'Fluid & filtration', 'Pneumatics'],
  },
  {
    id: 'mechanical-systems',
    name: 'Mechanical Systems',
    short: 'Mechanical',
    code: 'MEC',
    summary: 'Power transmission, couplings, gears, belts and alignment.',
    intro:
      'Shafts, couplings, gearboxes, belts and chains carry power from the motor to the work. Here you will find the mechanics behind them: alignment tolerances, coupling selection, belt tension and the failure patterns that show up when one of them is set up wrong.',
    subtopics: ['Alignment', 'Couplings', 'Gearboxes', 'Belts & chains'],
  },
  {
    id: 'bearings-lubrication',
    name: 'Bearings & Lubrication',
    short: 'Bearings',
    code: 'BRG',
    summary: 'Rolling bearings, grease, oil, seals and lubrication practice.',
    intro:
      'Most rotating equipment lives or dies by its bearings and the lubricant inside them. These articles cover bearing selection, mounting, failure modes and lubrication practice, with the numbers you need to grease and inspect by measurement rather than habit.',
    subtopics: ['Rolling bearings', 'Grease', 'Oil', 'Seals'],
  },
  {
    id: 'industrial-maintenance',
    name: 'Industrial Maintenance',
    short: 'Maintenance',
    code: 'MNT',
    summary: 'PM programs, planning, work orders and reliability.',
    intro:
      'Good repairs need a good system around them. This section covers preventive maintenance, planning and scheduling, work-order quality and the reliability habits that keep the same failure from coming back.',
    subtopics: ['Preventive maintenance', 'Planning', 'Reliability'],
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting & Failure Analysis',
    short: 'Troubleshooting',
    code: 'TRB',
    summary: 'Noise, vibration, heat and root cause on real machines.',
    intro:
      'A machine always tells you what is wrong: through noise, vibration, heat, leaks and the parts it breaks. These articles teach you to read those signs, test one cause at a time, and write up a root cause that holds.',
    subtopics: ['Vibration & noise', 'Failure analysis', 'Diagnostics'],
  },
  {
    id: 'tools-techniques',
    name: 'Tools & Techniques',
    short: 'Tools',
    code: 'TLS',
    summary: 'Measurement, fastening and shop practice done right.',
    intro:
      'Precision work starts with the tools. Dial indicators, micrometers, torque wrenches and pullers each have a right way to be used. This section covers those techniques and the shop practices that make a job repeatable.',
    subtopics: ['Measurement', 'Fastening', 'Shop practice'],
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];
export const CATEGORY_IDS = CATEGORIES.map((c) => c.id) as [CategoryId, ...CategoryId[]];
export const getCategory = (id: string) => CATEGORIES.find((c) => c.id === id)!;

export const FORMATS = [
  { name: 'Technical Deep Dive', summary: 'How a component or phenomenon works, from first principles to plant floor.' },
  { name: 'Failure Analysis', summary: 'What broke, the evidence it left, and the root cause behind it.' },
  { name: 'Maintenance Guide', summary: 'A procedure with numbers: inspect, measure, adjust, record.' },
  { name: 'Troubleshooting', summary: 'From symptom to cause, one test at a time.' },
] as const;
export const FORMAT_NAMES = FORMATS.map((f) => f.name) as unknown as [string, ...string[]];
