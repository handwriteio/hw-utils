export const INVALID_CHARACTERS = '[~`©™_|><^®]'
export const MAX_LINE_BREAKS = 5
export const MAX_CHARS = 320

export const VALID_MERGE_VARS = [
  '{firstName}',
  '{lastName}',
  '{city}',
  '{state}',
  '{company}',
  '{custom}',
]

export const US_STATES = [
  { name: 'Alabama', slug: 'alabama', abbr: 'AL' },
  { name: 'Alaska', slug: 'alaska', abbr: 'AK' },
  { name: 'Arizona', slug: 'arizona', abbr: 'AZ' },
  { name: 'Arkansas', slug: 'arkansas', abbr: 'AR' },
  { name: 'California', slug: 'california', abbr: 'CA' },
  { name: 'Colorado', slug: 'colorado', abbr: 'CO' },
  { name: 'Connecticut', slug: 'connecticut', abbr: 'CT' },
  { name: 'Delaware', slug: 'delaware', abbr: 'DE' },
  { name: 'District of Columbia', slug: 'district-of-columbia', abbr: 'DC' },
  { name: 'Florida', slug: 'florida', abbr: 'FL' },
  { name: 'Georgia', slug: 'georgia', abbr: 'GA' },
  { name: 'Hawaii', slug: 'hawaii', abbr: 'HI' },
  { name: 'Idaho', slug: 'idaho', abbr: 'ID' },
  { name: 'Illinois', slug: 'illinois', abbr: 'IL' },
  { name: 'Indiana', slug: 'indiana', abbr: 'IN' },
  { name: 'Iowa', slug: 'iowa', abbr: 'IA' },
  { name: 'Kansas', slug: 'kansas', abbr: 'KS' },
  { name: 'Kentucky', slug: 'kentucky', abbr: 'KY' },
  { name: 'Louisiana', slug: 'louisiana', abbr: 'LA' },
  { name: 'Maine', slug: 'maine', abbr: 'ME' },
  { name: 'Maryland', slug: 'maryland', abbr: 'MD' },
  { name: 'Massachusetts', slug: 'massachusetts', abbr: 'MA' },
  { name: 'Michigan', slug: 'michigan', abbr: 'MI' },
  { name: 'Minnesota', slug: 'minnesota', abbr: 'MN' },
  { name: 'Mississippi', slug: 'mississippi', abbr: 'MS' },
  { name: 'Missouri', slug: 'missouri', abbr: 'MO' },
  { name: 'Montana', slug: 'montana', abbr: 'MT' },
  { name: 'Nebraska', slug: 'nebraska', abbr: 'NE' },
  { name: 'Nevada', slug: 'nevada', abbr: 'NV' },
  { name: 'New Hampshire', slug: 'new-hampshire', abbr: 'NH' },
  { name: 'New Jersey', slug: 'new-jersey', abbr: 'NJ' },
  { name: 'New Mexico', slug: 'new-mexico', abbr: 'NM' },
  { name: 'New York', slug: 'new-york', abbr: 'NY' },
  { name: 'North Carolina', slug: 'north-carolina', abbr: 'NC' },
  { name: 'North Dakota', slug: 'north-dakota', abbr: 'ND' },
  { name: 'Ohio', slug: 'ohio', abbr: 'OH' },
  { name: 'Oklahoma', slug: 'oklahoma', abbr: 'OK' },
  { name: 'Oregon', slug: 'oregon', abbr: 'OR' },
  { name: 'Pennsylvania', slug: 'pennsylvania', abbr: 'PA' },
  { name: 'Puerto Rico', slug: 'puerto-rico', abbr: 'PR' },
  { name: 'Rhode Island', slug: 'rhode-island', abbr: 'RI' },
  { name: 'South Carolina', slug: 'south-carolina', abbr: 'SC' },
  { name: 'South Dakota', slug: 'south-dakota', abbr: 'SD' },
  { name: 'Tennessee', slug: 'tennessee', abbr: 'TN' },
  { name: 'Texas', slug: 'texas', abbr: 'TX' },
  { name: 'Utah', slug: 'utah', abbr: 'UT' },
  { name: 'Vermont', slug: 'vermont', abbr: 'VT' },
  { name: 'Virgin Islands', slug: 'virgin-islands', abbr: 'VI' },
  { name: 'Virginia', slug: 'virginia', abbr: 'VA' },
  { name: 'Washington', slug: 'washington', abbr: 'WA' },
  { name: 'West Virginia', slug: 'west-virginia', abbr: 'WV' },
  { name: 'Wisconsin', slug: 'wisconsin', abbr: 'WI' },
  { name: 'Wyoming', slug: 'wyoming', abbr: 'WY' },
]

export const TWO_LETTER_NAMES = [
  'bo',
  'ty',
  'al',
  'jo',
  'cy',
  'ed',
  'li',
  'ro',
  'em',
  'lo',
  'ki',
  'oz',
  'mo',
  'lu',
  'ki',
  'vi',
]

export const PLAN_DETAILS = {
  tier_1: {
    name: 'Occasional',
    price: 0,
    limit: 0,
    overagePrice: 4.5,
    features: [
      {
        key: 'Price per card',
        value: '$4.50',
      },
      {
        key: 'No cards included',
        value: false,
      },

      {
        key: '2 Team members',
        value: true,
      },
      {
        key: 'Support',
        value: 'Email',
      },
      {
        key: 'Sent within',
        value: '72 hours',
      },
    ],
  },
  tier_2: {
    name: 'Starter',
    price: 75,
    limit: 30,
    overagePrice: 2.25,
    features: [
      {
        key: '30 cards included',
        value: true,
      },
      {
        key: `$/card over 30`,
        value: '$2.25',
      },
      {
        key: 'Team members',
        value: '3',
      },
      {
        key: 'Support',
        value: 'Email & Phone',
      },
      {
        key: 'Sent within',
        value: '48 hours',
      },
    ],
  },
  tier_3: {
    name: 'Plus',
    price: 225,
    limit: 100,
    overagePrice: 2.0,
    features: [
      {
        key: '100 cards included',
        value: true,
      },
      {
        key: '$/card over 100',
        value: '$2.00',
      },
      {
        key: 'Team members',
        value: '10',
      },
      {
        key: 'Support',
        value: 'Email & Phone',
      },
      {
        key: 'Sent within',
        value: '48 hours',
      },
    ],
  },
  tier_4: {
    name: 'Pro',
    price: 900,
    limit: 500,
    overagePrice: 1.75,
    features: [
      {
        key: '500 cards included',
        value: true,
      },
      {
        key: '$/card over 500',
        value: '$1.75',
      },
      {
        key: 'Team members',
        value: '25',
      },
      {
        key: 'Support',
        value: 'Email & Phone',
      },
      {
        key: 'Sent within',
        value: '24 hours',
      },
    ],
  },
  legacy_silver: {
    name: 'Legacy Silver',
    price: 30,
    limit: 10,
    overagePrice: 3.5,
    features: [
      {
        key: '10 cards included',
        value: true,
      },
      {
        key: '$/card over 10',
        value: '$3.50',
      },
      {
        key: 'Support',
        value: 'Email & Phone',
      },
      {
        key: 'Sent within',
        value: '72 hours',
      },
    ],
  },

  legacy_gold_40: {
    name: 'Legacy Gold',
    price: 40,
    limit: 20,
    overagePrice: 3.5,
    features: [
      {
        key: '20 cards included',
        value: true,
      },
      {
        key: '$/card over 20',
        value: '$3.50',
      },
      {
        key: 'Support',
        value: 'Email & Phone',
      },
      {
        key: 'Sent within',
        value: '72 hours',
      },
    ],
  },

  legacy_gold_50: {
    name: 'Legacy Gold',
    price: 50,
    limit: 20,
    overagePrice: 3.5,
    features: [
      {
        key: '20 cards included',
        value: true,
      },
      {
        key: '$/card over 20',
        value: '$3.50',
      },
      {
        key: 'Support',
        value: 'Email & Phone',
      },
      {
        key: 'Sent within',
        value: '72 hours',
      },
    ],
  },

  legacy_platinum_90: {
    name: 'Legacy Platinum',
    price: 90,
    limit: 50,
    overagePrice: 3.5,
    features: [
      {
        key: '50 cards included',
        value: true,
      },
      {
        key: '$/card over 50',
        value: '$3.50',
      },
      {
        key: 'Support',
        value: 'Email & Phone',
      },
      {
        key: 'Sent within',
        value: '72 hours',
      },
    ],
  },

  legacy_platinum_100: {
    name: 'Legacy Platinum',
    price: 100,
    limit: 50,
    overagePrice: 3.5,
    features: [
      {
        key: '50 cards included',
        value: true,
      },
      {
        key: '$/card over 50',
        value: '$3.50',
      },
      {
        key: 'Support',
        value: 'Email & Phone',
      },
      {
        key: 'Sent within',
        value: '72 hours',
      },
    ],
  },
  legacy_api: {
    name: 'Legacy API',
    price: 0,
    limit: 0,
    overagePrice: 1.99,
    features: [
      {
        key: 'Price per card',
        value: '$1.99',
      },
      {
        key: 'Team members',
        value: '10',
      },
      {
        key: 'Support',
        value: 'Email & Phone',
      },
      {
        key: 'Sent within',
        value: '48 hours',
      },
    ],
  },
  legacy_avalon: {
    name: 'Legacy Avalon',
    price: 0,
    limit: 0,
    overagePrice: 1.7,
    features: [
      {
        key: 'Price per card',
        value: '$1.70',
      },
      {
        key: 'Team members',
        value: '10',
      },
      {
        key: 'Support',
        value: 'Email & Phone',
      },
      {
        key: 'Sent within',
        value: '72 hours',
      },
    ],
  },
  pure_meter_vip: {
    name: 'VIP',
    price: 0,
    limit: 0,
    overagePrice: 0,
    features: [
      {
        key: '1 - 10 cards',
        value: '$3.00',
      },
      {
        key: '11 - 50 cards',
        value: '$2.50',
      },
      {
        key: '51 - 200 cards',
        value: '$2.25',
      },
      {
        key: '201 - 500 cards',
        value: '$2.00',
      },
      {
        key: '501 - 1,000 cards',
        value: '$1.85',
      },
      {
        key: '1,001 - 5,000 cards',
        value: '$1.71',
      },
      {
        key: '5,001 - 10,000 cards',
        value: '$1.68',
      },
      {
        key: '10,000+ cards',
        value: '$1.65',
      },
    ],
  },
  pure_meter_super_vip: {
    name: 'Super VIP',
    price: 0,
    limit: 0,
    overagePrice: 0,
    features: [
      {
        key: '1 - 50 cards',
        value: '$2.25',
      },
      {
        key: '51 - 200 cards',
        value: '$2.00',
      },
      {
        key: '201 - 500 cards',
        value: '$1.85',
      },
      {
        key: '501 - 1,000 cards',
        value: '$1.70',
      },
      {
        key: '1,001 - 5,000 cards',
        value: '$1.65',
      },
      {
        key: '5,001 - 10,000 cards',
        value: '$1.62',
      },
      {
        key: '10,000+ cards',
        value: '$1.59',
      },
    ],
  },
  pure_meter_scribbles: {
    name: 'Scribbles',
    price: 0,
    limit: 0,
    overagePrice: 0,
    features: [
      {
        key: '1 - infinity cards',
        value: '$0.35',
      },
    ],
  },
}
