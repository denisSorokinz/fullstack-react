const brands = [
  {
    id: '98',
    brand: 'Acura',
  },
  {
    id: '3',
    brand: 'Alfa Romeo',
  },
  {
    id: '6',
    brand: 'Audi',
  },
  {
    id: '9',
    brand: 'BMW',
  },
  {
    id: '110',
    brand: 'Buick',
  },
  {
    id: '386',
    brand: 'BYD',
  },
  {
    id: '11',
    brand: 'Cadillac',
  },
  {
    id: '190',
    brand: 'Chery',
  },
  {
    id: '13',
    brand: 'Chevrolet',
  },
  {
    id: '14',
    brand: 'Chrysler',
  },
  {
    id: '15',
    brand: 'Citroen',
  },
  {
    id: '17',
    brand: 'Dacia',
  },
  {
    id: '18',
    brand: 'Daewoo',
  },
  {
    id: '115',
    brand: 'DAF',
  },
  {
    id: '118',
    brand: 'Dodge',
  },
  {
    id: '308',
    brand: 'Dongfeng',
  },
  {
    id: '4495',
    brand: 'DS',
  },
  {
    id: '121',
    brand: 'FAW',
  },
  {
    id: '23',
    brand: 'Fiat',
  },
  {
    id: '24',
    brand: 'Ford',
  },
  {
    id: '185',
    brand: 'Geely',
  },
  {
    id: '124',
    brand: 'Great Wall',
  },
  {
    id: '5456',
    brand: 'Haval',
  },
  {
    id: '28',
    brand: 'Honda',
  },
  {
    id: '29',
    brand: 'Hyundai',
  },
  {
    id: '128',
    brand: 'Infiniti',
  },
  {
    id: '175',
    brand: 'Iveco',
  },
  {
    id: '317',
    brand: 'JAC',
  },
  {
    id: '31',
    brand: 'Jaguar',
  },
  {
    id: '1590',
    brand: 'JCB',
  },
  {
    id: '32',
    brand: 'Jeep',
  },
  {
    id: '55069',
    brand: 'Jetour',
  },
  {
    id: '33',
    brand: 'Kia',
  },
  {
    id: '37',
    brand: 'Land Rover',
  },
  {
    id: '38',
    brand: 'Lexus',
  },
  {
    id: '334',
    brand: 'Lifan',
  },
  {
    id: '135',
    brand: 'Lincoln',
  },
  {
    id: '45',
    brand: 'Maserati',
  },
  {
    id: '47',
    brand: 'Mazda',
  },
  {
    id: '48',
    brand: 'Mercedes-Benz',
  },
  {
    id: '49',
    brand: 'MG',
  },
  {
    id: '147',
    brand: 'MINI',
  },
  {
    id: '52',
    brand: 'Mitsubishi',
  },
  {
    id: '55',
    brand: 'Nissan',
  },
  {
    id: '56',
    brand: 'Opel',
  },
  {
    id: '58',
    brand: 'Peugeot',
  },
  {
    id: '59',
    brand: 'Porsche',
  },
  {
    id: '4681',
    brand: 'Ravon',
  },
  {
    id: '62',
    brand: 'Renault',
  },
  {
    id: '67',
    brand: 'SEAT',
  },
  {
    id: '70',
    brand: 'Skoda',
  },
  {
    id: '71',
    brand: 'Smart',
  },
  {
    id: '73',
    brand: 'SsangYong',
  },
  {
    id: '75',
    brand: 'Subaru',
  },
  {
    id: '76',
    brand: 'Suzuki',
  },
  {
    id: '2233',
    brand: 'Tesla',
  },
  {
    id: '79',
    brand: 'Toyota',
  },
  {
    id: '206',
    brand: 'Van Hool',
  },
  {
    id: '84',
    brand: 'Volkswagen',
  },
  {
    id: '85',
    brand: 'Volvo',
  },
];

const models = [
  {
      "id": "65976",
      "name": "CDX",
      "brand_id": "98"
  },
  {
      "id": "953",
      "name": "CL",
      "brand_id": "98"
  },
  {
      "id": "65977",
      "name": "CSX",
      "brand_id": "98"
  },
  {
      "id": "30098",
      "name": "EL",
      "brand_id": "98"
  },
  {
      "id": "38293",
      "name": "ILX",
      "brand_id": "98"
  },
  {
      "id": "954",
      "name": "Integra",
      "brand_id": "98"
  },
  {
      "id": "1938",
      "name": "Legend",
      "brand_id": "98"
  },
  {
      "id": "955",
      "name": "MDX",
      "brand_id": "98"
  },
  {
      "id": "956",
      "name": "NSX",
      "brand_id": "98"
  },
  {
      "id": "1939",
      "name": "RDX",
      "brand_id": "98"
  },
  {
      "id": "957",
      "name": "RL",
      "brand_id": "98"
  },
  {
      "id": "42241",
      "name": "RLX",
      "brand_id": "98"
  },
  {
      "id": "958",
      "name": "RSX",
      "brand_id": "98"
  },
  {
      "id": "1940",
      "name": "SLX",
      "brand_id": "98"
  },
  {
      "id": "959",
      "name": "TL",
      "brand_id": "98"
  },
  {
      "id": "44156",
      "name": "TLX",
      "brand_id": "98"
  },
  {
      "id": "39034",
      "name": "TSX",
      "brand_id": "98"
  },
  {
      "id": "1941",
      "name": "Vigor",
      "brand_id": "98"
  },
  {
      "id": "3552",
      "name": "ZDX",
      "brand_id": "98"
  },
  {
      "id": "1683",
      "name": "1333",
      "brand_id": "3"
  },
  {
      "id": "10",
      "name": "145",
      "brand_id": "3"
  },
  {
      "id": "11",
      "name": "146",
      "brand_id": "3"
  },
  {
      "id": "12",
      "name": "147",
      "brand_id": "3"
  },
  {
      "id": "1962",
      "name": "149",
      "brand_id": "3"
  },
  {
      "id": "13",
      "name": "155",
      "brand_id": "3"
  },
  {
      "id": "14",
      "name": "156",
      "brand_id": "3"
  },
  {
      "id": "1959",
      "name": "159",
      "brand_id": "3"
  },
  {
      "id": "16",
      "name": "164",
      "brand_id": "3"
  },
  {
      "id": "17",
      "name": "166",
      "brand_id": "3"
  },
  {
      "id": "1961",
      "name": "169",
      "brand_id": "3"
  },
  {
      "id": "1956",
      "name": "2600",
      "brand_id": "3"
  },
  {
      "id": "18",
      "name": "33",
      "brand_id": "3"
  },
  {
      "id": "66038",
      "name": "33 Stradale",
      "brand_id": "3"
  },
  {
      "id": "44307",
      "name": "4C",
      "brand_id": "3"
  },
  {
      "id": "40529",
      "name": "6",
      "brand_id": "3"
  },
  {
      "id": "19",
      "name": "75",
      "brand_id": "3"
  },
  {
      "id": "3174",
      "name": "8C Competizione",
      "brand_id": "3"
  },
  {
      "id": "20",
      "name": "90",
      "brand_id": "3"
  },
  {
      "id": "21",
      "name": "Alfasud",
      "brand_id": "3"
  },
  {
      "id": "22",
      "name": "Alfetta",
      "brand_id": "3"
  },
  {
      "id": "1952",
      "name": "AR6",
      "brand_id": "3"
  },
  {
      "id": "23",
      "name": "Arna",
      "brand_id": "3"
  },
  {
      "id": "1960",
      "name": "Brera",
      "brand_id": "3"
  },
  {
      "id": "32646",
      "name": "Crosswagon Q4",
      "brand_id": "3"
  },
  {
      "id": "1709",
      "name": "Das",
      "brand_id": "3"
  },
  {
      "id": "1954",
      "name": "Giulia",
      "brand_id": "3"
  },
  {
      "id": "24",
      "name": "Giulietta",
      "brand_id": "3"
  },
  {
      "id": "25",
      "name": "Gold Cloverleaf",
      "brand_id": "3"
  },
  {
      "id": "961",
      "name": "GT",
      "brand_id": "3"
  },
  {
      "id": "1955",
      "name": "GTA",
      "brand_id": "3"
  },
  {
      "id": "26",
      "name": "GTV",
      "brand_id": "3"
  },
  {
      "id": "1638",
      "name": "Imola",
      "brand_id": "3"
  },
  {
      "id": "1963",
      "name": "Junior",
      "brand_id": "3"
  },
  {
      "id": "66039",
      "name": "Milano",
      "brand_id": "3"
  },
  {
      "id": "3176",
      "name": "MiTo",
      "brand_id": "3"
  },
  {
      "id": "1958",
      "name": "Montreal",
      "brand_id": "3"
  },
  {
      "id": "66040",
      "name": "R.Z.",
      "brand_id": "3"
  },
  {
      "id": "30",
      "name": "S.Z.",
      "brand_id": "3"
  },
  {
      "id": "28",
      "name": "Spider",
      "brand_id": "3"
  },
  {
      "id": "66041",
      "name": "Sport Sedan",
      "brand_id": "3"
  },
  {
      "id": "66042",
      "name": "Sport Wagon",
      "brand_id": "3"
  },
  {
      "id": "29",
      "name": "Sprint",
      "brand_id": "3"
  },
  {
      "id": "49962",
      "name": "Stelvio",
      "brand_id": "3"
  },
  {
      "id": "63271",
      "name": "Tonale",
      "brand_id": "3"
  },
  {
      "id": "39",
      "name": "100",
      "brand_id": "6"
  },
  {
      "id": "41",
      "name": "200",
      "brand_id": "6"
  },
  {
      "id": "61284",
      "name": "4000",
      "brand_id": "6"
  },
  {
      "id": "43274",
      "name": "50",
      "brand_id": "6"
  },
  {
      "id": "61285",
      "name": "5000",
      "brand_id": "6"
  },
  {
      "id": "63476",
      "name": "60",
      "brand_id": "6"
  },
  {
      "id": "63517",
      "name": "75",
      "brand_id": "6"
  },
  {
      "id": "43",
      "name": "80",
      "brand_id": "6"
  },
  {
      "id": "44",
      "name": "90",
      "brand_id": "6"
  },
  {
      "id": "31914",
      "name": "A1",
      "brand_id": "6"
  },
  {
      "id": "63470",
      "name": "A1 Allstreet",
      "brand_id": "6"
  },
  {
      "id": "63480",
      "name": "A1 Citycarver",
      "brand_id": "6"
  },
  {
      "id": "45",
      "name": "A2",
      "brand_id": "6"
  },
  {
      "id": "46",
      "name": "A3",
      "brand_id": "6"
  },
  {
      "id": "59425",
      "name": "A3 Sportback",
      "brand_id": "6"
  },
  {
      "id": "47",
      "name": "A4",
      "brand_id": "6"
  },
  {
      "id": "3457",
      "name": "A4 Allroad",
      "brand_id": "6"
  },
  {
      "id": "2032",
      "name": "A5",
      "brand_id": "6"
  },
  {
      "id": "62310",
      "name": "A5 Sportback",
      "brand_id": "6"
  },
  {
      "id": "49",
      "name": "A6",
      "brand_id": "6"
  },
  {
      "id": "3460",
      "name": "A6 Allroad",
      "brand_id": "6"
  },
  {
      "id": "32378",
      "name": "A7 Sportback",
      "brand_id": "6"
  },
  {
      "id": "51",
      "name": "A8",
      "brand_id": "6"
  },
  {
      "id": "63516",
      "name": "Cabriolet",
      "brand_id": "6"
  },
  {
      "id": "52863",
      "name": "Coupe",
      "brand_id": "6"
  },
  {
      "id": "56328",
      "name": "e-tron",
      "brand_id": "6"
  },
  {
      "id": "60267",
      "name": "e-tron GT",
      "brand_id": "6"
  },
  {
      "id": "48010",
      "name": "e-tron S",
      "brand_id": "6"
  },
  {
      "id": "48011",
      "name": "e-tron S Sportback",
      "brand_id": "6"
  },
  {
      "id": "60665",
      "name": "e-tron Sportback",
      "brand_id": "6"
  },
  {
      "id": "63515",
      "name": "Fox",
      "brand_id": "6"
  },
  {
      "id": "61287",
      "name": "Front",
      "brand_id": "6"
  },
  {
      "id": "49591",
      "name": "Q2",
      "brand_id": "6"
  },
  {
      "id": "62950",
      "name": "Q2L e-tron",
      "brand_id": "6"
  },
  {
      "id": "35548",
      "name": "Q3",
      "brand_id": "6"
  },
  {
      "id": "62596",
      "name": "Q3 Sportback",
      "brand_id": "6"
  },
  {
      "id": "60289",
      "name": "Q4 e-tron",
      "brand_id": "6"
  },
  {
      "id": "62601",
      "name": "Q4 Sportback e-tron",
      "brand_id": "6"
  },
  {
      "id": "3222",
      "name": "Q5",
      "brand_id": "6"
  },
  {
      "id": "63514",
      "name": "Q5 e-tron",
      "brand_id": "6"
  },
  {
      "id": "62612",
      "name": "Q5 Sportback",
      "brand_id": "6"
  },
  {
      "id": "1943",
      "name": "Q7",
      "brand_id": "6"
  },
  {
      "id": "65758",
      "name": "Q7 e-tron",
      "brand_id": "6"
  },
  {
      "id": "54664",
      "name": "Q8",
      "brand_id": "6"
  },
  {
      "id": "64480",
      "name": "Q8 e-tron",
      "brand_id": "6"
  },
  {
      "id": "64479",
      "name": "Q8 Sportback e-tron",
      "brand_id": "6"
  },
  {
      "id": "2263",
      "name": "R8",
      "brand_id": "6"
  },
  {
      "id": "62387",
      "name": "RS e-tron GT",
      "brand_id": "6"
  },
  {
      "id": "44182",
      "name": "RS Q3",
      "brand_id": "6"
  },
  {
      "id": "62609",
      "name": "RS Q3 Sportback",
      "brand_id": "6"
  },
  {
      "id": "61203",
      "name": "RS Q8",
      "brand_id": "6"
  },
  {
      "id": "54303",
      "name": "RS2",
      "brand_id": "6"
  },
  {
      "id": "35281",
      "name": "RS3",
      "brand_id": "6"
  },
  {
      "id": "63424",
      "name": "RS3 Sportback",
      "brand_id": "6"
  },
  {
      "id": "60",
      "name": "RS4",
      "brand_id": "6"
  },
  {
      "id": "32945",
      "name": "RS5",
      "brand_id": "6"
  },
  {
      "id": "63513",
      "name": "RS5 Sportback",
      "brand_id": "6"
  },
  {
      "id": "58",
      "name": "RS6",
      "brand_id": "6"
  },
  {
      "id": "44161",
      "name": "RS7 Sportback",
      "brand_id": "6"
  },
  {
      "id": "63481",
      "name": "S1",
      "brand_id": "6"
  },
  {
      "id": "63482",
      "name": "S1 Sportback",
      "brand_id": "6"
  },
  {
      "id": "30336",
      "name": "S2",
      "brand_id": "6"
  },
  {
      "id": "61",
      "name": "S3",
      "brand_id": "6"
  },
  {
      "id": "62",
      "name": "S4",
      "brand_id": "6"
  },
  {
      "id": "2814",
      "name": "S5",
      "brand_id": "6"
  },
  {
      "id": "63479",
      "name": "S5 Sportback",
      "brand_id": "6"
  },
  {
      "id": "64",
      "name": "S6",
      "brand_id": "6"
  },
  {
      "id": "40988",
      "name": "S7 Sportback",
      "brand_id": "6"
  },
  {
      "id": "66",
      "name": "S8",
      "brand_id": "6"
  },
  {
      "id": "63471",
      "name": "Sport Quattro",
      "brand_id": "6"
  },
  {
      "id": "56346",
      "name": "SQ2",
      "brand_id": "6"
  },
  {
      "id": "44183",
      "name": "SQ5",
      "brand_id": "6"
  },
  {
      "id": "32946",
      "name": "SQ5 Sportback",
      "brand_id": "6"
  },
  {
      "id": "49206",
      "name": "SQ7",
      "brand_id": "6"
  },
  {
      "id": "59400",
      "name": "SQ8",
      "brand_id": "6"
  },
  {
      "id": "64482",
      "name": "SQ8 e-tron",
      "brand_id": "6"
  },
  {
      "id": "64481",
      "name": "SQ8 Sportback e-tron",
      "brand_id": "6"
  },
  {
      "id": "63478",
      "name": "Super 90",
      "brand_id": "6"
  },
  {
      "id": "1837",
      "name": "TT",
      "brand_id": "6"
  },
  {
      "id": "33483",
      "name": "TT RS",
      "brand_id": "6"
  },
  {
      "id": "3452",
      "name": "TT S",
      "brand_id": "6"
  },
  {
      "id": "69",
      "name": "V8",
      "brand_id": "6"
  },
  {
      "id": "63528",
      "name": "iX1",
      "brand_id": "9"
  },
  {
      "id": "2161",
      "name": "1 Series",
      "brand_id": "9"
  },
  {
      "id": "63521",
      "name": "1500",
      "brand_id": "9"
  },
  {
      "id": "48926",
      "name": "1502",
      "brand_id": "9"
  },
  {
      "id": "47380",
      "name": "1602",
      "brand_id": "9"
  },
  {
      "id": "48925",
      "name": "2000",
      "brand_id": "9"
  },
  {
      "id": "47386",
      "name": "2002",
      "brand_id": "9"
  },
  {
      "id": "63518",
      "name": "1600",
      "brand_id": "9"
  },
  {
      "id": "63526",
      "name": "1600 GT",
      "brand_id": "9"
  },
  {
      "id": "63519",
      "name": "1800",
      "brand_id": "9"
  },
  {
      "id": "63520",
      "name": "1802",
      "brand_id": "9"
  },
  {
      "id": "43023",
      "name": "2 Series",
      "brand_id": "9"
  },
  {
      "id": "44594",
      "name": "2 Series Active Tourer",
      "brand_id": "9"
  },
  {
      "id": "60508",
      "name": "2 Series Gran Coupe",
      "brand_id": "9"
  },
  {
      "id": "61149",
      "name": "2 Series Gran Tourer",
      "brand_id": "9"
  },
  {
      "id": "3219",
      "name": "3 Series",
      "brand_id": "9"
  },
  {
      "id": "63522",
      "name": "3 Series Compact",
      "brand_id": "9"
  },
  {
      "id": "43029",
      "name": "3 Series GT",
      "brand_id": "9"
  },
  {
      "id": "63527",
      "name": "3200 CS",
      "brand_id": "9"
  },
  {
      "id": "42495",
      "name": "4 Series",
      "brand_id": "9"
  },
  {
      "id": "44037",
      "name": "4 Series Gran Coupe",
      "brand_id": "9"
  },
  {
      "id": "2319",
      "name": "5 Series",
      "brand_id": "9"
  },
  {
      "id": "44727",
      "name": "5 Series GT",
      "brand_id": "9"
  },
  {
      "id": "3218",
      "name": "6 Series",
      "brand_id": "9"
  },
  {
      "id": "39420",
      "name": "6 Series Gran Coupe",
      "brand_id": "9"
  },
  {
      "id": "52144",
      "name": "6 Series GT",
      "brand_id": "9"
  },
  {
      "id": "18490",
      "name": "7 Series",
      "brand_id": "9"
  },
  {
      "id": "63523",
      "name": "700",
      "brand_id": "9"
  },
  {
      "id": "94",
      "name": "8 Series",
      "brand_id": "9"
  },
  {
      "id": "59451",
      "name": "8 Series Gran Coupe",
      "brand_id": "9"
  },
  {
      "id": "33383",
      "name": "Dixi",
      "brand_id": "9"
  },
  {
      "id": "63525",
      "name": "E3",
      "brand_id": "9"
  },
  {
      "id": "63524",
      "name": "E9",
      "brand_id": "9"
  },
  {
      "id": "44838",
      "name": "I3",
      "brand_id": "9"
  },
  {
      "id": "63123",
      "name": "i3S",
      "brand_id": "9"
  },
  {
      "id": "63124",
      "name": "i4",
      "brand_id": "9"
  },
  {
      "id": "65411",
      "name": "i5",
      "brand_id": "9"
  },
  {
      "id": "63477",
      "name": "i7",
      "brand_id": "9"
  },
  {
      "id": "44537",
      "name": "i8",
      "brand_id": "9"
  },
  {
      "id": "32380",
      "name": "Isetta",
      "brand_id": "9"
  },
  {
      "id": "62701",
      "name": "iX",
      "brand_id": "9"
  },
  {
      "id": "66901",
      "name": "iX2",
      "brand_id": "9"
  },
  {
      "id": "61275",
      "name": "iX3",
      "brand_id": "9"
  },
  {
      "id": "63529",
      "name": "iX5",
      "brand_id": "9"
  },
  {
      "id": "95",
      "name": "M1",
      "brand_id": "9"
  },
  {
      "id": "44856",
      "name": "M2",
      "brand_id": "9"
  },
  {
      "id": "3292",
      "name": "M3",
      "brand_id": "9"
  },
  {
      "id": "44857",
      "name": "M4",
      "brand_id": "9"
  },
  {
      "id": "3213",
      "name": "M5",
      "brand_id": "9"
  },
  {
      "id": "3592",
      "name": "M6",
      "brand_id": "9"
  },
  {
      "id": "59544",
      "name": "M6 Gran Coupe",
      "brand_id": "9"
  },
  {
      "id": "59450",
      "name": "M8",
      "brand_id": "9"
  },
  {
      "id": "60512",
      "name": "M8 Gran Coupe",
      "brand_id": "9"
  },
  {
      "id": "63530",
      "name": "M3 Compact",
      "brand_id": "9"
  },
  {
      "id": "47379",
      "name": "Neue Klasse",
      "brand_id": "9"
  },
  {
      "id": "3597",
      "name": "X1",
      "brand_id": "9"
  },
  {
      "id": "42029",
      "name": "X2",
      "brand_id": "9"
  },
  {
      "id": "1866",
      "name": "X3",
      "brand_id": "9"
  },
  {
      "id": "57774",
      "name": "X3 M",
      "brand_id": "9"
  },
  {
      "id": "43735",
      "name": "X4",
      "brand_id": "9"
  },
  {
      "id": "57775",
      "name": "X4 M",
      "brand_id": "9"
  },
  {
      "id": "96",
      "name": "X5",
      "brand_id": "9"
  },
  {
      "id": "3158",
      "name": "X5 M",
      "brand_id": "9"
  },
  {
      "id": "2153",
      "name": "X6",
      "brand_id": "9"
  },
  {
      "id": "3442",
      "name": "X6 M",
      "brand_id": "9"
  },
  {
      "id": "49169",
      "name": "X7",
      "brand_id": "9"
  },
  {
      "id": "64483",
      "name": "XM",
      "brand_id": "9"
  },
  {
      "id": "97",
      "name": "Z1",
      "brand_id": "9"
  },
  {
      "id": "98",
      "name": "Z3",
      "brand_id": "9"
  },
  {
      "id": "3223",
      "name": "Z3 M",
      "brand_id": "9"
  },
  {
      "id": "99",
      "name": "Z4",
      "brand_id": "9"
  },
  {
      "id": "59518",
      "name": "Z4 M",
      "brand_id": "9"
  },
  {
      "id": "100",
      "name": "Z8",
      "brand_id": "9"
  },
  {
      "id": "62953",
      "name": "Velite 6",
      "brand_id": "110"
  },
  {
      "id": "47714",
      "name": "Cascada",
      "brand_id": "110"
  },
  {
      "id": "1010",
      "name": "Century",
      "brand_id": "110"
  },
  {
      "id": "49460",
      "name": "Eight",
      "brand_id": "110"
  },
  {
      "id": "43544",
      "name": "Electra",
      "brand_id": "110"
  },
  {
      "id": "67977",
      "name": "Electra E4",
      "brand_id": "110"
  },
  {
      "id": "2740",
      "name": "Enclave",
      "brand_id": "110"
  },
  {
      "id": "3225",
      "name": "Enclave USA",
      "brand_id": "110"
  },
  {
      "id": "42126",
      "name": "Encore",
      "brand_id": "110"
  },
  {
      "id": "2324",
      "name": "Encore GX",
      "brand_id": "110"
  },
  {
      "id": "51411",
      "name": "Envision",
      "brand_id": "110"
  },
  {
      "id": "62476",
      "name": "GL6",
      "brand_id": "110"
  },
  {
      "id": "1011",
      "name": "GL8",
      "brand_id": "110"
  },
  {
      "id": "1012",
      "name": "LaCrosse",
      "brand_id": "110"
  },
  {
      "id": "3226",
      "name": "LaCrosse USA",
      "brand_id": "110"
  },
  {
      "id": "1013",
      "name": "LE Sabre",
      "brand_id": "110"
  },
  {
      "id": "39643",
      "name": "Limitet",
      "brand_id": "110"
  },
  {
      "id": "2741",
      "name": "LuCerne",
      "brand_id": "110"
  },
  {
      "id": "1014",
      "name": "Park Avenue",
      "brand_id": "110"
  },
  {
      "id": "1015",
      "name": "Rainer",
      "brand_id": "110"
  },
  {
      "id": "1016",
      "name": "Reatta",
      "brand_id": "110"
  },
  {
      "id": "1017",
      "name": "Regal",
      "brand_id": "110"
  },
  {
      "id": "45036",
      "name": "Regal GS",
      "brand_id": "110"
  },
  {
      "id": "61721",
      "name": "Regal TourX",
      "brand_id": "110"
  },
  {
      "id": "1018",
      "name": "Rendezvous",
      "brand_id": "110"
  },
  {
      "id": "1019",
      "name": "Riviera",
      "brand_id": "110"
  },
  {
      "id": "31760",
      "name": "Roadmaster",
      "brand_id": "110"
  },
  {
      "id": "43636",
      "name": "Skyhawk",
      "brand_id": "110"
  },
  {
      "id": "3399",
      "name": "Skylark",
      "brand_id": "110"
  },
  {
      "id": "36548",
      "name": "Special",
      "brand_id": "110"
  },
  {
      "id": "42750",
      "name": "Super",
      "brand_id": "110"
  },
  {
      "id": "61965",
      "name": "Velite 6",
      "brand_id": "110"
  },
  {
      "id": "63340",
      "name": "Velite 7",
      "brand_id": "110"
  },
  {
      "id": "48446",
      "name": "Verano",
      "brand_id": "110"
  },
  {
      "id": "3679",
      "name": "Wildcat",
      "brand_id": "110"
  },
  {
      "id": "65142",
      "name": "Atto 3",
      "brand_id": "386"
  },
  {
      "id": "63800",
      "name": "Dolphin",
      "brand_id": "386"
  },
  {
      "id": "25290",
      "name": "E2",
      "brand_id": "386"
  },
  {
      "id": "62925",
      "name": "E5",
      "brand_id": "386"
  },
  {
      "id": "36945",
      "name": "E6",
      "brand_id": "386"
  },
  {
      "id": "59899",
      "name": "EV535",
      "brand_id": "386"
  },
  {
      "id": "34601",
      "name": "F0",
      "brand_id": "386"
  },
  {
      "id": "2890",
      "name": "F3",
      "brand_id": "386"
  },
  {
      "id": "37016",
      "name": "F3R",
      "brand_id": "386"
  },
  {
      "id": "36942",
      "name": "F6",
      "brand_id": "386"
  },
  {
      "id": "2891",
      "name": "F8",
      "brand_id": "386"
  },
  {
      "id": "2893",
      "name": "Flyer",
      "brand_id": "386"
  },
  {
      "id": "36943",
      "name": "G3",
      "brand_id": "386"
  },
  {
      "id": "40271",
      "name": "G6",
      "brand_id": "386"
  },
  {
      "id": "62706",
      "name": "Han",
      "brand_id": "386"
  },
  {
      "id": "2892",
      "name": "M6",
      "brand_id": "386"
  },
  {
      "id": "44457",
      "name": "New F3",
      "brand_id": "386"
  },
  {
      "id": "64256",
      "name": "Qin Plus",
      "brand_id": "386"
  },
  {
      "id": "48448",
      "name": "S3",
      "brand_id": "386"
  },
  {
      "id": "36944",
      "name": "S6",
      "brand_id": "386"
  },
  {
      "id": "65756",
      "name": "Seagull",
      "brand_id": "386"
  },
  {
      "id": "64819",
      "name": "Seal",
      "brand_id": "386"
  },
  {
      "id": "63267",
      "name": "Song EV500",
      "brand_id": "386"
  },
  {
      "id": "67764",
      "name": "Song L",
      "brand_id": "386"
  },
  {
      "id": "62955",
      "name": "Song Plus",
      "brand_id": "386"
  },
  {
      "id": "65558",
      "name": "Song Plus Champion",
      "brand_id": "386"
  },
  {
      "id": "62954",
      "name": "Tang",
      "brand_id": "386"
  },
  {
      "id": "62715",
      "name": "Tang EV600",
      "brand_id": "386"
  },
  {
      "id": "68020",
      "name": "Yangwang U8",
      "brand_id": "386"
  },
  {
      "id": "68021",
      "name": "Yangwang U9",
      "brand_id": "386"
  },
  {
      "id": "28318",
      "name": "Yuan",
      "brand_id": "386"
  },
  {
      "id": "65587",
      "name": "Yuan Plus",
      "brand_id": "386"
  },
  {
      "id": "67953",
      "name": "Yuan Pro",
      "brand_id": "386"
  },
  {
      "id": "1020",
      "name": "Allante",
      "brand_id": "11"
  },
  {
      "id": "40104",
      "name": "ATS",
      "brand_id": "11"
  },
  {
      "id": "61982",
      "name": "ATS-V",
      "brand_id": "11"
  },
  {
      "id": "37499",
      "name": "BLS",
      "brand_id": "11"
  },
  {
      "id": "1021",
      "name": "Brougham",
      "brand_id": "11"
  },
  {
      "id": "54556",
      "name": "Calais",
      "brand_id": "11"
  },
  {
      "id": "1022",
      "name": "Catera",
      "brand_id": "11"
  },
  {
      "id": "35636",
      "name": "Cimarron",
      "brand_id": "11"
  },
  {
      "id": "35775",
      "name": "Convertible",
      "brand_id": "11"
  },
  {
      "id": "61690",
      "name": "CT4",
      "brand_id": "11"
  },
  {
      "id": "61691",
      "name": "CT4-V",
      "brand_id": "11"
  },
  {
      "id": "61692",
      "name": "CT5",
      "brand_id": "11"
  },
  {
      "id": "61693",
      "name": "CT5-V",
      "brand_id": "11"
  },
  {
      "id": "48788",
      "name": "CT6",
      "brand_id": "11"
  },
  {
      "id": "61694",
      "name": "CT6-V",
      "brand_id": "11"
  },
  {
      "id": "1023",
      "name": "CTS",
      "brand_id": "11"
  },
  {
      "id": "33947",
      "name": "CTS-V",
      "brand_id": "11"
  },
  {
      "id": "1024",
      "name": "DE Ville",
      "brand_id": "11"
  },
  {
      "id": "31602",
      "name": "DTS",
      "brand_id": "11"
  },
  {
      "id": "1025",
      "name": "Eldorado",
      "brand_id": "11"
  },
  {
      "id": "43826",
      "name": "ELR",
      "brand_id": "11"
  },
  {
      "id": "1026",
      "name": "Escalade",
      "brand_id": "11"
  },
  {
      "id": "42680",
      "name": "Eureka",
      "brand_id": "11"
  },
  {
      "id": "1027",
      "name": "Evoq",
      "brand_id": "11"
  },
  {
      "id": "32737",
      "name": "Fleetwood",
      "brand_id": "11"
  },
  {
      "id": "1028",
      "name": "LSE",
      "brand_id": "11"
  },
  {
      "id": "66852",
      "name": "LYRIQ",
      "brand_id": "11"
  },
  {
      "id": "60872",
      "name": "Series 62",
      "brand_id": "11"
  },
  {
      "id": "107",
      "name": "Seville",
      "brand_id": "11"
  },
  {
      "id": "1029",
      "name": "SRX",
      "brand_id": "11"
  },
  {
      "id": "2374",
      "name": "STS",
      "brand_id": "11"
  },
  {
      "id": "1030",
      "name": "Vizon",
      "brand_id": "11"
  },
  {
      "id": "1031",
      "name": "XLR",
      "brand_id": "11"
  },
  {
      "id": "54122",
      "name": "XT4",
      "brand_id": "11"
  },
  {
      "id": "47630",
      "name": "XT5",
      "brand_id": "11"
  },
  {
      "id": "59871",
      "name": "XT6",
      "brand_id": "11"
  },
  {
      "id": "39212",
      "name": "XTS",
      "brand_id": "11"
  },
  {
      "id": "65564",
      "name": "A1",
      "brand_id": "190"
  },
  {
      "id": "34873",
      "name": "A13",
      "brand_id": "190"
  },
  {
      "id": "33276",
      "name": "A15",
      "brand_id": "190"
  },
  {
      "id": "65560",
      "name": "A18",
      "brand_id": "190"
  },
  {
      "id": "65567",
      "name": "A3",
      "brand_id": "190"
  },
  {
      "id": "65569",
      "name": "A5",
      "brand_id": "190"
  },
  {
      "id": "65570",
      "name": "Aika",
      "brand_id": "190"
  },
  {
      "id": "2087",
      "name": "Amulet",
      "brand_id": "190"
  },
  {
      "id": "47623",
      "name": "Arrizo 3",
      "brand_id": "190"
  },
  {
      "id": "64037",
      "name": "Arrizo 5",
      "brand_id": "190"
  },
  {
      "id": "65571",
      "name": "Arrizo 6",
      "brand_id": "190"
  },
  {
      "id": "47246",
      "name": "Arrizo 7",
      "brand_id": "190"
  },
  {
      "id": "65572",
      "name": "Arrizo 8",
      "brand_id": "190"
  },
  {
      "id": "65573",
      "name": "Arrizo GX",
      "brand_id": "190"
  },
  {
      "id": "34649",
      "name": "Beat",
      "brand_id": "190"
  },
  {
      "id": "65574",
      "name": "Bonus",
      "brand_id": "190"
  },
  {
      "id": "65575",
      "name": "Celer",
      "brand_id": "190"
  },
  {
      "id": "65576",
      "name": "Cowin",
      "brand_id": "190"
  },
  {
      "id": "2788",
      "name": "CrossEastar",
      "brand_id": "190"
  },
  {
      "id": "65577",
      "name": "E3",
      "brand_id": "190"
  },
  {
      "id": "39232",
      "name": "E5",
      "brand_id": "190"
  },
  {
      "id": "2368",
      "name": "Eastar",
      "brand_id": "190"
  },
  {
      "id": "2537",
      "name": "Elara",
      "brand_id": "190"
  },
  {
      "id": "65592",
      "name": "eQ",
      "brand_id": "190"
  },
  {
      "id": "33040",
      "name": "eQ1",
      "brand_id": "190"
  },
  {
      "id": "62534",
      "name": "eQ5",
      "brand_id": "190"
  },
  {
      "id": "65578",
      "name": "eQ7",
      "brand_id": "190"
  },
  {
      "id": "1900",
      "name": "Flagcloud",
      "brand_id": "190"
  },
  {
      "id": "44181",
      "name": "Fora",
      "brand_id": "190"
  },
  {
      "id": "65579",
      "name": "Fulwin",
      "brand_id": "190"
  },
  {
      "id": "65580",
      "name": "IndiS",
      "brand_id": "190"
  },
  {
      "id": "65565",
      "name": "J1",
      "brand_id": "190"
  },
  {
      "id": "65581",
      "name": "J2",
      "brand_id": "190"
  },
  {
      "id": "65568",
      "name": "J3",
      "brand_id": "190"
  },
  {
      "id": "2789",
      "name": "Jaggi",
      "brand_id": "190"
  },
  {
      "id": "2790",
      "name": "Karry",
      "brand_id": "190"
  },
  {
      "id": "2637",
      "name": "Kimo",
      "brand_id": "190"
  },
  {
      "id": "62959",
      "name": "Little Ant",
      "brand_id": "190"
  },
  {
      "id": "33041",
      "name": "M11",
      "brand_id": "190"
  },
  {
      "id": "65561",
      "name": "Omoda 5",
      "brand_id": "190"
  },
  {
      "id": "1901",
      "name": "Oriental Son",
      "brand_id": "190"
  },
  {
      "id": "1899",
      "name": "QQ",
      "brand_id": "190"
  },
  {
      "id": "32393",
      "name": "Riich",
      "brand_id": "190"
  },
  {
      "id": "1902",
      "name": "Tiggo",
      "brand_id": "190"
  },
  {
      "id": "53598",
      "name": "Tiggo 2",
      "brand_id": "190"
  },
  {
      "id": "63209",
      "name": "Tiggo 2 Pro",
      "brand_id": "190"
  },
  {
      "id": "49458",
      "name": "Tiggo 3",
      "brand_id": "190"
  },
  {
      "id": "61571",
      "name": "Tiggo 3x",
      "brand_id": "190"
  },
  {
      "id": "56611",
      "name": "Tiggo 4",
      "brand_id": "190"
  },
  {
      "id": "65793",
      "name": "Tiggo 4 Pro",
      "brand_id": "190"
  },
  {
      "id": "49459",
      "name": "Tiggo 5",
      "brand_id": "190"
  },
  {
      "id": "65582",
      "name": "Tiggo 5x",
      "brand_id": "190"
  },
  {
      "id": "53443",
      "name": "Tiggo 7",
      "brand_id": "190"
  },
  {
      "id": "62321",
      "name": "Tiggo 7 Pro",
      "brand_id": "190"
  },
  {
      "id": "59782",
      "name": "Tiggo 8",
      "brand_id": "190"
  },
  {
      "id": "65589",
      "name": "Tiggo 8 Plus",
      "brand_id": "190"
  },
  {
      "id": "65588",
      "name": "Tiggo 8 Pro",
      "brand_id": "190"
  },
  {
      "id": "65583",
      "name": "Tiggo 9",
      "brand_id": "190"
  },
  {
      "id": "61637",
      "name": "Tiggo e",
      "brand_id": "190"
  },
  {
      "id": "65562",
      "name": "V5",
      "brand_id": "190"
  },
  {
      "id": "63539",
      "name": "1700",
      "brand_id": "13"
  },
  {
      "id": "63540",
      "name": "2500",
      "brand_id": "13"
  },
  {
      "id": "63541",
      "name": "Agile",
      "brand_id": "13"
  },
  {
      "id": "1035",
      "name": "Alero",
      "brand_id": "13"
  },
  {
      "id": "63542",
      "name": "Apache",
      "brand_id": "13"
  },
  {
      "id": "63543",
      "name": "Ascona",
      "brand_id": "13"
  },
  {
      "id": "1036",
      "name": "Astra",
      "brand_id": "13"
  },
  {
      "id": "62143",
      "name": "Astro",
      "brand_id": "13"
  },
  {
      "id": "1854",
      "name": "Avalanche",
      "brand_id": "13"
  },
  {
      "id": "1038",
      "name": "Aveo",
      "brand_id": "13"
  },
  {
      "id": "63544",
      "name": "Beat",
      "brand_id": "13"
  },
  {
      "id": "64515",
      "name": "Beat Activ",
      "brand_id": "13"
  },
  {
      "id": "44318",
      "name": "Beauville",
      "brand_id": "13"
  },
  {
      "id": "32247",
      "name": "Bel Air",
      "brand_id": "13"
  },
  {
      "id": "1039",
      "name": "Beretta",
      "brand_id": "13"
  },
  {
      "id": "110",
      "name": "Blazer",
      "brand_id": "13"
  },
  {
      "id": "63545",
      "name": "Bolt EUV",
      "brand_id": "13"
  },
  {
      "id": "51091",
      "name": "Bolt EV",
      "brand_id": "13"
  },
  {
      "id": "52935",
      "name": "C/K Series",
      "brand_id": "13"
  },
  {
      "id": "111",
      "name": "Camaro",
      "brand_id": "13"
  },
  {
      "id": "1042",
      "name": "Caprice",
      "brand_id": "13"
  },
  {
      "id": "2544",
      "name": "Captiva",
      "brand_id": "13"
  },
  {
      "id": "1043",
      "name": "Cavalier",
      "brand_id": "13"
  },
  {
      "id": "32727",
      "name": "Celebrity",
      "brand_id": "13"
  },
  {
      "id": "1044",
      "name": "Celta",
      "brand_id": "13"
  },
  {
      "id": "45785",
      "name": "Chevelle",
      "brand_id": "13"
  },
  {
      "id": "33621",
      "name": "Citation",
      "brand_id": "13"
  },
  {
      "id": "57731",
      "name": "City Express",
      "brand_id": "13"
  },
  {
      "id": "1045",
      "name": "Classic",
      "brand_id": "13"
  },
  {
      "id": "1046",
      "name": "Cobalt",
      "brand_id": "13"
  },
  {
      "id": "1856",
      "name": "Colorado",
      "brand_id": "13"
  },
  {
      "id": "1047",
      "name": "Corsa",
      "brand_id": "13"
  },
  {
      "id": "1048",
      "name": "Corsica",
      "brand_id": "13"
  },
  {
      "id": "112",
      "name": "Corvette",
      "brand_id": "13"
  },
  {
      "id": "3588",
      "name": "Cruze",
      "brand_id": "13"
  },
  {
      "id": "30266",
      "name": "DeLuxe",
      "brand_id": "13"
  },
  {
      "id": "35380",
      "name": "El Camino",
      "brand_id": "13"
  },
  {
      "id": "2145",
      "name": "Epica",
      "brand_id": "13"
  },
  {
      "id": "1049",
      "name": "Equinox",
      "brand_id": "13"
  },
  {
      "id": "1050",
      "name": "Evanda",
      "brand_id": "13"
  },
  {
      "id": "62145",
      "name": "Express",
      "brand_id": "13"
  },
  {
      "id": "1857",
      "name": "HHR",
      "brand_id": "13"
  },
  {
      "id": "1051",
      "name": "Impala",
      "brand_id": "13"
  },
  {
      "id": "49145",
      "name": "Kalos",
      "brand_id": "13"
  },
  {
      "id": "1052",
      "name": "Lacetti",
      "brand_id": "13"
  },
  {
      "id": "3658",
      "name": "Lanos",
      "brand_id": "13"
  },
  {
      "id": "1053",
      "name": "Lumina",
      "brand_id": "13"
  },
  {
      "id": "63548",
      "name": "Lumina APV",
      "brand_id": "13"
  },
  {
      "id": "1054",
      "name": "Malibu",
      "brand_id": "13"
  },
  {
      "id": "43680",
      "name": "Master",
      "brand_id": "13"
  },
  {
      "id": "1055",
      "name": "Matiz",
      "brand_id": "13"
  },
  {
      "id": "62535",
      "name": "Menlo",
      "brand_id": "13"
  },
  {
      "id": "1056",
      "name": "Metro",
      "brand_id": "13"
  },
  {
      "id": "1057",
      "name": "Monte Carlo",
      "brand_id": "13"
  },
  {
      "id": "1058",
      "name": "Monza",
      "brand_id": "13"
  },
  {
      "id": "62902",
      "name": "Nexia",
      "brand_id": "13"
  },
  {
      "id": "1059",
      "name": "Niva",
      "brand_id": "13"
  },
  {
      "id": "55972",
      "name": "Nova",
      "brand_id": "13"
  },
  {
      "id": "1060",
      "name": "Nubira",
      "brand_id": "13"
  },
  {
      "id": "1061",
      "name": "Omega",
      "brand_id": "13"
  },
  {
      "id": "30662",
      "name": "Opala",
      "brand_id": "13"
  },
  {
      "id": "60513",
      "name": "Optra",
      "brand_id": "13"
  },
  {
      "id": "35248",
      "name": "Orlando",
      "brand_id": "13"
  },
  {
      "id": "64516",
      "name": "Prisma",
      "brand_id": "13"
  },
  {
      "id": "31143",
      "name": "Prizm",
      "brand_id": "13"
  },
  {
      "id": "35055",
      "name": "R3500",
      "brand_id": "13"
  },
  {
      "id": "45178",
      "name": "Rezzo",
      "brand_id": "13"
  },
  {
      "id": "2619",
      "name": "S-10",
      "brand_id": "13"
  },
  {
      "id": "1853",
      "name": "Silverado",
      "brand_id": "13"
  },
  {
      "id": "63538",
      "name": "Silverado EV",
      "brand_id": "13"
  },
  {
      "id": "49816",
      "name": "Sonic",
      "brand_id": "13"
  },
  {
      "id": "33345",
      "name": "Spark",
      "brand_id": "13"
  },
  {
      "id": "41017",
      "name": "Spectrum",
      "brand_id": "13"
  },
  {
      "id": "43122",
      "name": "SS",
      "brand_id": "13"
  },
  {
      "id": "1848",
      "name": "SSR",
      "brand_id": "13"
  },
  {
      "id": "62148",
      "name": "Starcraft",
      "brand_id": "13"
  },
  {
      "id": "1855",
      "name": "Suburban",
      "brand_id": "13"
  },
  {
      "id": "1663",
      "name": "Tacuma",
      "brand_id": "13"
  },
  {
      "id": "2070",
      "name": "Tahoe",
      "brand_id": "13"
  },
  {
      "id": "42012",
      "name": "Tracker",
      "brand_id": "13"
  },
  {
      "id": "32143",
      "name": "TrailBlazer",
      "brand_id": "13"
  },
  {
      "id": "39774",
      "name": "Trans Sport",
      "brand_id": "13"
  },
  {
      "id": "3229",
      "name": "Traverse",
      "brand_id": "13"
  },
  {
      "id": "49443",
      "name": "Trax",
      "brand_id": "13"
  },
  {
      "id": "37651",
      "name": "Uplander",
      "brand_id": "13"
  },
  {
      "id": "2714",
      "name": "Venture",
      "brand_id": "13"
  },
  {
      "id": "33783",
      "name": "Volt",
      "brand_id": "13"
  },
  {
      "id": "51432",
      "name": "160",
      "brand_id": "14"
  },
  {
      "id": "113",
      "name": "180",
      "brand_id": "14"
  },
  {
      "id": "40508",
      "name": "200",
      "brand_id": "14"
  },
  {
      "id": "43394",
      "name": "300",
      "brand_id": "14"
  },
  {
      "id": "44297",
      "name": "300 S",
      "brand_id": "14"
  },
  {
      "id": "43386",
      "name": "300C",
      "brand_id": "14"
  },
  {
      "id": "3230",
      "name": "300M",
      "brand_id": "14"
  },
  {
      "id": "3107",
      "name": "Aspen",
      "brand_id": "14"
  },
  {
      "id": "115",
      "name": "Avenger",
      "brand_id": "14"
  },
  {
      "id": "1063",
      "name": "Cirrus",
      "brand_id": "14"
  },
  {
      "id": "1064",
      "name": "Concorde",
      "brand_id": "14"
  },
  {
      "id": "1065",
      "name": "Crossfire",
      "brand_id": "14"
  },
  {
      "id": "1066",
      "name": "Daytona",
      "brand_id": "14"
  },
  {
      "id": "3477",
      "name": "De Soto",
      "brand_id": "14"
  },
  {
      "id": "42158",
      "name": "Dynasty",
      "brand_id": "14"
  },
  {
      "id": "39779",
      "name": "ES",
      "brand_id": "14"
  },
  {
      "id": "116",
      "name": "Grand Voyager",
      "brand_id": "14"
  },
  {
      "id": "36434",
      "name": "HHR",
      "brand_id": "14"
  },
  {
      "id": "47319",
      "name": "Horizon",
      "brand_id": "14"
  },
  {
      "id": "33361",
      "name": "Imperial",
      "brand_id": "14"
  },
  {
      "id": "1668",
      "name": "Intrepid",
      "brand_id": "14"
  },
  {
      "id": "1665",
      "name": "Jeep Cherokee",
      "brand_id": "14"
  },
  {
      "id": "42494",
      "name": "Laser",
      "brand_id": "14"
  },
  {
      "id": "1067",
      "name": "LE Baron",
      "brand_id": "14"
  },
  {
      "id": "1068",
      "name": "LHS",
      "brand_id": "14"
  },
  {
      "id": "1069",
      "name": "Neon",
      "brand_id": "14"
  },
  {
      "id": "118",
      "name": "New Yorker",
      "brand_id": "14"
  },
  {
      "id": "1070",
      "name": "Pacifica",
      "brand_id": "14"
  },
  {
      "id": "41951",
      "name": "Phantom",
      "brand_id": "14"
  },
  {
      "id": "1071",
      "name": "Prowler",
      "brand_id": "14"
  },
  {
      "id": "119",
      "name": "PT Cruiser",
      "brand_id": "14"
  },
  {
      "id": "3799",
      "name": "Reliant",
      "brand_id": "14"
  },
  {
      "id": "45840",
      "name": "Royal",
      "brand_id": "14"
  },
  {
      "id": "2737",
      "name": "Saratoga",
      "brand_id": "14"
  },
  {
      "id": "2322",
      "name": "Sebring",
      "brand_id": "14"
  },
  {
      "id": "3381",
      "name": "Simca",
      "brand_id": "14"
  },
  {
      "id": "1072",
      "name": "Stratus",
      "brand_id": "14"
  },
  {
      "id": "33194",
      "name": "Sunbeam",
      "brand_id": "14"
  },
  {
      "id": "40938",
      "name": "Tolbot",
      "brand_id": "14"
  },
  {
      "id": "1073",
      "name": "Town & Country",
      "brand_id": "14"
  },
  {
      "id": "121",
      "name": "Viper",
      "brand_id": "14"
  },
  {
      "id": "1074",
      "name": "Vision",
      "brand_id": "14"
  },
  {
      "id": "122",
      "name": "Voyager",
      "brand_id": "14"
  },
  {
      "id": "39591",
      "name": "2CV",
      "brand_id": "15"
  },
  {
      "id": "1087",
      "name": "Acadiane",
      "brand_id": "15"
  },
  {
      "id": "1086",
      "name": "AMI",
      "brand_id": "15"
  },
  {
      "id": "125",
      "name": "AX",
      "brand_id": "15"
  },
  {
      "id": "44403",
      "name": "Axel",
      "brand_id": "15"
  },
  {
      "id": "59440",
      "name": "Berlingo",
      "brand_id": "15"
  },
  {
      "id": "127",
      "name": "BX",
      "brand_id": "15"
  },
  {
      "id": "3451",
      "name": "C-Crosser",
      "brand_id": "15"
  },
  {
      "id": "40442",
      "name": "C-Elysee",
      "brand_id": "15"
  },
  {
      "id": "44826",
      "name": "C-Zero",
      "brand_id": "15"
  },
  {
      "id": "2599",
      "name": "C1",
      "brand_id": "15"
  },
  {
      "id": "1085",
      "name": "C15",
      "brand_id": "15"
  },
  {
      "id": "1084",
      "name": "C2",
      "brand_id": "15"
  },
  {
      "id": "37581",
      "name": "C25",
      "brand_id": "15"
  },
  {
      "id": "128",
      "name": "C3",
      "brand_id": "15"
  },
  {
      "id": "53478",
      "name": "C3 Aircross",
      "brand_id": "15"
  },
  {
      "id": "32931",
      "name": "C3 Picasso",
      "brand_id": "15"
  },
  {
      "id": "62038",
      "name": "C3 Pluriel",
      "brand_id": "15"
  },
  {
      "id": "1082",
      "name": "C4",
      "brand_id": "15"
  },
  {
      "id": "47790",
      "name": "C4 Aircross",
      "brand_id": "15"
  },
  {
      "id": "45630",
      "name": "C4 Cactus",
      "brand_id": "15"
  },
  {
      "id": "3487",
      "name": "C4 Picasso",
      "brand_id": "15"
  },
  {
      "id": "63555",
      "name": "C4 SpaceTourer",
      "brand_id": "15"
  },
  {
      "id": "64484",
      "name": "C4 X",
      "brand_id": "15"
  },
  {
      "id": "63554",
      "name": "C4L",
      "brand_id": "15"
  },
  {
      "id": "129",
      "name": "C5",
      "brand_id": "15"
  },
  {
      "id": "53270",
      "name": "C5 Aircross",
      "brand_id": "15"
  },
  {
      "id": "63561",
      "name": "C5 Cross",
      "brand_id": "15"
  },
  {
      "id": "63433",
      "name": "C5 X",
      "brand_id": "15"
  },
  {
      "id": "1081",
      "name": "C6",
      "brand_id": "15"
  },
  {
      "id": "130",
      "name": "C8",
      "brand_id": "15"
  },
  {
      "id": "131",
      "name": "CX",
      "brand_id": "15"
  },
  {
      "id": "41526",
      "name": "Dispatch",
      "brand_id": "15"
  },
  {
      "id": "63553",
      "name": "DS",
      "brand_id": "15"
  },
  {
      "id": "31084",
      "name": "DS3",
      "brand_id": "15"
  },
  {
      "id": "37583",
      "name": "DS4",
      "brand_id": "15"
  },
  {
      "id": "38211",
      "name": "DS5",
      "brand_id": "15"
  },
  {
      "id": "136",
      "name": "Dyane",
      "brand_id": "15"
  },
  {
      "id": "57400",
      "name": "e-Berlingo",
      "brand_id": "15"
  },
  {
      "id": "67256",
      "name": "e-C3",
      "brand_id": "15"
  },
  {
      "id": "67272",
      "name": "e-C3 Aircross",
      "brand_id": "15"
  },
  {
      "id": "63122",
      "name": "e-C4",
      "brand_id": "15"
  },
  {
      "id": "64851",
      "name": "e-C4 X",
      "brand_id": "15"
  },
  {
      "id": "63556",
      "name": "E-Mehari",
      "brand_id": "15"
  },
  {
      "id": "63562",
      "name": "e-SpaceTourer",
      "brand_id": "15"
  },
  {
      "id": "63558",
      "name": "Elysee",
      "brand_id": "15"
  },
  {
      "id": "1079",
      "name": "Evasion",
      "brand_id": "15"
  },
  {
      "id": "3486",
      "name": "Grand C4 Picasso",
      "brand_id": "15"
  },
  {
      "id": "62523",
      "name": "Grand C4 SpaceTourer",
      "brand_id": "15"
  },
  {
      "id": "1078",
      "name": "GS",
      "brand_id": "15"
  },
  {
      "id": "137",
      "name": "GSA",
      "brand_id": "15"
  },
  {
      "id": "1077",
      "name": "ID",
      "brand_id": "15"
  },
  {
      "id": "59443",
      "name": "Jumpy",
      "brand_id": "15"
  },
  {
      "id": "63557",
      "name": "LN",
      "brand_id": "15"
  },
  {
      "id": "138",
      "name": "LNA",
      "brand_id": "15"
  },
  {
      "id": "64928",
      "name": "Mehari",
      "brand_id": "15"
  },
  {
      "id": "59444",
      "name": "Nemo",
      "brand_id": "15"
  },
  {
      "id": "63559",
      "name": "Relay",
      "brand_id": "15"
  },
  {
      "id": "46861",
      "name": "Rosalie",
      "brand_id": "15"
  },
  {
      "id": "140",
      "name": "Saxo",
      "brand_id": "15"
  },
  {
      "id": "63560",
      "name": "SM",
      "brand_id": "15"
  },
  {
      "id": "50383",
      "name": "SpaceTourer",
      "brand_id": "15"
  },
  {
      "id": "141",
      "name": "Synergie",
      "brand_id": "15"
  },
  {
      "id": "48209",
      "name": "Traction Avant",
      "brand_id": "15"
  },
  {
      "id": "142",
      "name": "Visa",
      "brand_id": "15"
  },
  {
      "id": "143",
      "name": "Xantia",
      "brand_id": "15"
  },
  {
      "id": "144",
      "name": "XM",
      "brand_id": "15"
  },
  {
      "id": "145",
      "name": "Xsara",
      "brand_id": "15"
  },
  {
      "id": "146",
      "name": "Xsara Picasso",
      "brand_id": "15"
  },
  {
      "id": "147",
      "name": "ZX",
      "brand_id": "15"
  },
  {
      "id": "65531",
      "name": "1100",
      "brand_id": "17"
  },
  {
      "id": "1090",
      "name": "1300",
      "brand_id": "17"
  },
  {
      "id": "43303",
      "name": "1304",
      "brand_id": "17"
  },
  {
      "id": "65533",
      "name": "1307",
      "brand_id": "17"
  },
  {
      "id": "65532",
      "name": "1309",
      "brand_id": "17"
  },
  {
      "id": "1091",
      "name": "1310",
      "brand_id": "17"
  },
  {
      "id": "1092",
      "name": "1325",
      "brand_id": "17"
  },
  {
      "id": "1093",
      "name": "1410",
      "brand_id": "17"
  },
  {
      "id": "48542",
      "name": "Dokker",
      "brand_id": "17"
  },
  {
      "id": "65535",
      "name": "Dokker Pick-Up",
      "brand_id": "17"
  },
  {
      "id": "65534",
      "name": "Dokker Stepway",
      "brand_id": "17"
  },
  {
      "id": "157",
      "name": "Duster",
      "brand_id": "17"
  },
  {
      "id": "63439",
      "name": "Jogger",
      "brand_id": "17"
  },
  {
      "id": "45771",
      "name": "Lodgy",
      "brand_id": "17"
  },
  {
      "id": "65536",
      "name": "Lodgy Stepway",
      "brand_id": "17"
  },
  {
      "id": "1890",
      "name": "Logan",
      "brand_id": "17"
  },
  {
      "id": "53103",
      "name": "Logan MCV",
      "brand_id": "17"
  },
  {
      "id": "65537",
      "name": "Logan MCV Stepway",
      "brand_id": "17"
  },
  {
      "id": "53900",
      "name": "Logan Pick-up",
      "brand_id": "17"
  },
  {
      "id": "1094",
      "name": "Nova",
      "brand_id": "17"
  },
  {
      "id": "3166",
      "name": "Sandero",
      "brand_id": "17"
  },
  {
      "id": "50820",
      "name": "Sandero StepWay",
      "brand_id": "17"
  },
  {
      "id": "1095",
      "name": "Solenza",
      "brand_id": "17"
  },
  {
      "id": "63603",
      "name": "Spring",
      "brand_id": "17"
  },
  {
      "id": "1669",
      "name": "SuperNova",
      "brand_id": "17"
  },
  {
      "id": "61294",
      "name": "Alpheon",
      "brand_id": "18"
  },
  {
      "id": "1096",
      "name": "Arcadia",
      "brand_id": "18"
  },
  {
      "id": "42060",
      "name": "Brougham",
      "brand_id": "18"
  },
  {
      "id": "1097",
      "name": "Chairman",
      "brand_id": "18"
  },
  {
      "id": "43776",
      "name": "Cielo",
      "brand_id": "18"
  },
  {
      "id": "2510",
      "name": "Damas",
      "brand_id": "18"
  },
  {
      "id": "158",
      "name": "Espero",
      "brand_id": "18"
  },
  {
      "id": "1098",
      "name": "Evanda",
      "brand_id": "18"
  },
  {
      "id": "42642",
      "name": "Gentra",
      "brand_id": "18"
  },
  {
      "id": "159",
      "name": "Kalos",
      "brand_id": "18"
  },
  {
      "id": "160",
      "name": "Korando",
      "brand_id": "18"
  },
  {
      "id": "1099",
      "name": "Lacetti",
      "brand_id": "18"
  },
  {
      "id": "161",
      "name": "Lanos",
      "brand_id": "18"
  },
  {
      "id": "1100",
      "name": "LE Mans",
      "brand_id": "18"
  },
  {
      "id": "162",
      "name": "Leganza",
      "brand_id": "18"
  },
  {
      "id": "31130",
      "name": "Lublin",
      "brand_id": "18"
  },
  {
      "id": "1101",
      "name": "Magnus",
      "brand_id": "18"
  },
  {
      "id": "163",
      "name": "Matiz",
      "brand_id": "18"
  },
  {
      "id": "2120",
      "name": "Musso",
      "brand_id": "18"
  },
  {
      "id": "165",
      "name": "Nexia",
      "brand_id": "18"
  },
  {
      "id": "166",
      "name": "Nubira",
      "brand_id": "18"
  },
  {
      "id": "2624",
      "name": "Prince",
      "brand_id": "18"
  },
  {
      "id": "1641",
      "name": "Racer",
      "brand_id": "18"
  },
  {
      "id": "53152",
      "name": "Rezzo",
      "brand_id": "18"
  },
  {
      "id": "37592",
      "name": "Royale",
      "brand_id": "18"
  },
  {
      "id": "1642",
      "name": "Sens",
      "brand_id": "18"
  },
  {
      "id": "36104",
      "name": "Super Salon",
      "brand_id": "18"
  },
  {
      "id": "167",
      "name": "Tacuma",
      "brand_id": "18"
  },
  {
      "id": "1643",
      "name": "Tico",
      "brand_id": "18"
  },
  {
      "id": "45509",
      "name": "Tosca",
      "brand_id": "18"
  },
  {
      "id": "164",
      "name": "Winstorm",
      "brand_id": "18"
  },
  {
      "id": "37031",
      "name": "200",
      "brand_id": "115"
  },
  {
      "id": "47958",
      "name": "46",
      "brand_id": "115"
  },
  {
      "id": "40051",
      "name": "600",
      "brand_id": "115"
  },
  {
      "id": "64097",
      "name": "330",
      "brand_id": "118"
  },
  {
      "id": "64106",
      "name": "3700",
      "brand_id": "118"
  },
  {
      "id": "64098",
      "name": "400",
      "brand_id": "118"
  },
  {
      "id": "64099",
      "name": "440",
      "brand_id": "118"
  },
  {
      "id": "64105",
      "name": "600",
      "brand_id": "118"
  },
  {
      "id": "64107",
      "name": "A-Series",
      "brand_id": "118"
  },
  {
      "id": "31889",
      "name": "Aries",
      "brand_id": "118"
  },
  {
      "id": "40592",
      "name": "Aspen",
      "brand_id": "118"
  },
  {
      "id": "64108",
      "name": "Attitude",
      "brand_id": "118"
  },
  {
      "id": "1119",
      "name": "Avenger",
      "brand_id": "118"
  },
  {
      "id": "64118",
      "name": "B-Models",
      "brand_id": "118"
  },
  {
      "id": "1944",
      "name": "Caliber",
      "brand_id": "118"
  },
  {
      "id": "1120",
      "name": "Caravan",
      "brand_id": "118"
  },
  {
      "id": "3108",
      "name": "Challenger",
      "brand_id": "118"
  },
  {
      "id": "1852",
      "name": "Charger",
      "brand_id": "118"
  },
  {
      "id": "42705",
      "name": "Colt",
      "brand_id": "118"
  },
  {
      "id": "62032",
      "name": "Colt Vista",
      "brand_id": "118"
  },
  {
      "id": "64122",
      "name": "Conquest",
      "brand_id": "118"
  },
  {
      "id": "64132",
      "name": "Coronet",
      "brand_id": "118"
  },
  {
      "id": "64123",
      "name": "Custom",
      "brand_id": "118"
  },
  {
      "id": "2165",
      "name": "D6",
      "brand_id": "118"
  },
  {
      "id": "1121",
      "name": "Dakota",
      "brand_id": "118"
  },
  {
      "id": "39320",
      "name": "Dart",
      "brand_id": "118"
  },
  {
      "id": "2754",
      "name": "Daytona",
      "brand_id": "118"
  },
  {
      "id": "37673",
      "name": "Diplomat",
      "brand_id": "118"
  },
  {
      "id": "1122",
      "name": "Durango",
      "brand_id": "118"
  },
  {
      "id": "34207",
      "name": "Dynasty",
      "brand_id": "118"
  },
  {
      "id": "64128",
      "name": "Express",
      "brand_id": "118"
  },
  {
      "id": "64129",
      "name": "Forza",
      "brand_id": "118"
  },
  {
      "id": "37700",
      "name": "Grand Caravan",
      "brand_id": "118"
  },
  {
      "id": "64130",
      "name": "GTX Hardtop Coupe",
      "brand_id": "118"
  },
  {
      "id": "64131",
      "name": "Hornet",
      "brand_id": "118"
  },
  {
      "id": "1123",
      "name": "Intrepid",
      "brand_id": "118"
  },
  {
      "id": "64138",
      "name": "JC",
      "brand_id": "118"
  },
  {
      "id": "64139",
      "name": "JCUV R/T",
      "brand_id": "118"
  },
  {
      "id": "3235",
      "name": "Journey",
      "brand_id": "118"
  },
  {
      "id": "64142",
      "name": "Kingsway",
      "brand_id": "118"
  },
  {
      "id": "64150",
      "name": "La Femme",
      "brand_id": "118"
  },
  {
      "id": "64152",
      "name": "Lancer",
      "brand_id": "118"
  },
  {
      "id": "64153",
      "name": "LeBaron",
      "brand_id": "118"
  },
  {
      "id": "3142",
      "name": "M 880",
      "brand_id": "118"
  },
  {
      "id": "42130",
      "name": "M 886",
      "brand_id": "118"
  },
  {
      "id": "1124",
      "name": "Magnum",
      "brand_id": "118"
  },
  {
      "id": "64166",
      "name": "Matador",
      "brand_id": "118"
  },
  {
      "id": "64167",
      "name": "Mayfair",
      "brand_id": "118"
  },
  {
      "id": "64168",
      "name": "Meadowbrook",
      "brand_id": "118"
  },
  {
      "id": "64169",
      "name": "Mirada",
      "brand_id": "118"
  },
  {
      "id": "1125",
      "name": "Monaco",
      "brand_id": "118"
  },
  {
      "id": "1126",
      "name": "Neon",
      "brand_id": "118"
  },
  {
      "id": "2223",
      "name": "Nitro",
      "brand_id": "118"
  },
  {
      "id": "37755",
      "name": "Omni",
      "brand_id": "118"
  },
  {
      "id": "64134",
      "name": "Phoenix",
      "brand_id": "118"
  },
  {
      "id": "28294",
      "name": "Polara",
      "brand_id": "118"
  },
  {
      "id": "2530",
      "name": "Power Wagon",
      "brand_id": "118"
  },
  {
      "id": "34625",
      "name": "Raider",
      "brand_id": "118"
  },
  {
      "id": "58283",
      "name": "RAM 1500",
      "brand_id": "118"
  },
  {
      "id": "57652",
      "name": "RAM 2500",
      "brand_id": "118"
  },
  {
      "id": "48983",
      "name": "RAM 3500",
      "brand_id": "118"
  },
  {
      "id": "64137",
      "name": "Ram 50",
      "brand_id": "118"
  },
  {
      "id": "2224",
      "name": "Ram Van",
      "brand_id": "118"
  },
  {
      "id": "1128",
      "name": "Ramcharger",
      "brand_id": "118"
  },
  {
      "id": "64143",
      "name": "Rampage",
      "brand_id": "118"
  },
  {
      "id": "64149",
      "name": "Regent",
      "brand_id": "118"
  },
  {
      "id": "64151",
      "name": "Royal",
      "brand_id": "118"
  },
  {
      "id": "64154",
      "name": "Serie C",
      "brand_id": "118"
  },
  {
      "id": "1129",
      "name": "Shadow",
      "brand_id": "118"
  },
  {
      "id": "64158",
      "name": "Shelby Rampage",
      "brand_id": "118"
  },
  {
      "id": "64159",
      "name": "Sierra",
      "brand_id": "118"
  },
  {
      "id": "64160",
      "name": "Spacevan",
      "brand_id": "118"
  },
  {
      "id": "1130",
      "name": "Spirit",
      "brand_id": "118"
  },
  {
      "id": "64161",
      "name": "St.Regis",
      "brand_id": "118"
  },
  {
      "id": "1131",
      "name": "Stealth",
      "brand_id": "118"
  },
  {
      "id": "1132",
      "name": "Stratus",
      "brand_id": "118"
  },
  {
      "id": "64165",
      "name": "Valiant",
      "brand_id": "118"
  },
  {
      "id": "1133",
      "name": "Viper",
      "brand_id": "118"
  },
  {
      "id": "64184",
      "name": "Vision",
      "brand_id": "118"
  },
  {
      "id": "64170",
      "name": "Wayfarer",
      "brand_id": "118"
  },
  {
      "id": "40530",
      "name": "WC",
      "brand_id": "118"
  },
  {
      "id": "62963",
      "name": "Shuaike",
      "brand_id": "308"
  },
  {
      "id": "64018",
      "name": "C31",
      "brand_id": "308"
  },
  {
      "id": "62961",
      "name": "D60EV",
      "brand_id": "308"
  },
  {
      "id": "65080",
      "name": "E11K",
      "brand_id": "308"
  },
  {
      "id": "63154",
      "name": "EM26",
      "brand_id": "308"
  },
  {
      "id": "40144",
      "name": "EQ1021",
      "brand_id": "308"
  },
  {
      "id": "31054",
      "name": "EQ6380",
      "brand_id": "308"
  },
  {
      "id": "61573",
      "name": "ER30",
      "brand_id": "308"
  },
  {
      "id": "62962",
      "name": "EX-1",
      "brand_id": "308"
  },
  {
      "id": "62530",
      "name": "Fengshen AX3",
      "brand_id": "308"
  },
  {
      "id": "62960",
      "name": "Fengshen E70",
      "brand_id": "308"
  },
  {
      "id": "62529",
      "name": "Fengshen S30",
      "brand_id": "308"
  },
  {
      "id": "62528",
      "name": "Fengxing S50-EV",
      "brand_id": "308"
  },
  {
      "id": "64100",
      "name": "Fukang ES600",
      "brand_id": "308"
  },
  {
      "id": "45710",
      "name": "H30",
      "brand_id": "308"
  },
  {
      "id": "57412",
      "name": "Joyear S50 EV",
      "brand_id": "308"
  },
  {
      "id": "63220",
      "name": "Junfeng EK11",
      "brand_id": "308"
  },
  {
      "id": "62770",
      "name": "LingZhi M3",
      "brand_id": "308"
  },
  {
      "id": "63013",
      "name": "M5EV",
      "brand_id": "308"
  },
  {
      "id": "68023",
      "name": "Mengshi M-Hero 917",
      "brand_id": "308"
  },
  {
      "id": "63213",
      "name": "N2",
      "brand_id": "308"
  },
  {
      "id": "65540",
      "name": "Nano Box",
      "brand_id": "308"
  },
  {
      "id": "63288",
      "name": "Rich 6",
      "brand_id": "308"
  },
  {
      "id": "63219",
      "name": "S50",
      "brand_id": "308"
  },
  {
      "id": "64878",
      "name": "S60 EV",
      "brand_id": "308"
  },
  {
      "id": "64477",
      "name": "Seres 3",
      "brand_id": "308"
  },
  {
      "id": "62502",
      "name": "X-NV",
      "brand_id": "308"
  },
  {
      "id": "67657",
      "name": "Yudo K3",
      "brand_id": "308"
  },
  {
      "id": "47398",
      "name": "3",
      "brand_id": "4495"
  },
  {
      "id": "56349",
      "name": "3 Crossback",
      "brand_id": "4495"
  },
  {
      "id": "64802",
      "name": "3 e-Tense",
      "brand_id": "4495"
  },
  {
      "id": "47399",
      "name": "4",
      "brand_id": "4495"
  },
  {
      "id": "60565",
      "name": "4 Crossback",
      "brand_id": "4495"
  },
  {
      "id": "64512",
      "name": "4S",
      "brand_id": "4495"
  },
  {
      "id": "56347",
      "name": "5",
      "brand_id": "4495"
  },
  {
      "id": "64513",
      "name": "5LS",
      "brand_id": "4495"
  },
  {
      "id": "64514",
      "name": "6",
      "brand_id": "4495"
  },
  {
      "id": "56348",
      "name": "7",
      "brand_id": "4495"
  },
  {
      "id": "56350",
      "name": "7 Crossback",
      "brand_id": "4495"
  },
  {
      "id": "63243",
      "name": "9",
      "brand_id": "4495"
  },
  {
      "id": "1144",
      "name": "6350",
      "brand_id": "121"
  },
  {
      "id": "31550",
      "name": "6371 пасс.",
      "brand_id": "121"
  },
  {
      "id": "60083",
      "name": "B30",
      "brand_id": "121"
  },
  {
      "id": "1984",
      "name": "Besturn",
      "brand_id": "121"
  },
  {
      "id": "67890",
      "name": "Besturn B30",
      "brand_id": "121"
  },
  {
      "id": "63218",
      "name": "Besturn B30EV",
      "brand_id": "121"
  },
  {
      "id": "67891",
      "name": "Besturn B50",
      "brand_id": "121"
  },
  {
      "id": "67892",
      "name": "Besturn B70",
      "brand_id": "121"
  },
  {
      "id": "67893",
      "name": "Besturn B90",
      "brand_id": "121"
  },
  {
      "id": "67894",
      "name": "Besturn X40",
      "brand_id": "121"
  },
  {
      "id": "67895",
      "name": "Besturn X80",
      "brand_id": "121"
  },
  {
      "id": "17910",
      "name": "CA 6371 Cargo",
      "brand_id": "121"
  },
  {
      "id": "62965",
      "name": "Hongqi E-HS9",
      "brand_id": "121"
  },
  {
      "id": "1985",
      "name": "HQ3",
      "brand_id": "121"
  },
  {
      "id": "67896",
      "name": "Jiabao",
      "brand_id": "121"
  },
  {
      "id": "67897",
      "name": "Jumpal A50",
      "brand_id": "121"
  },
  {
      "id": "67898",
      "name": "Jumpal A70",
      "brand_id": "121"
  },
  {
      "id": "67899",
      "name": "Jumpal CX65",
      "brand_id": "121"
  },
  {
      "id": "67900",
      "name": "Jumpal D60",
      "brand_id": "121"
  },
  {
      "id": "67901",
      "name": "Kun Cheng",
      "brand_id": "121"
  },
  {
      "id": "44175",
      "name": "Oley",
      "brand_id": "121"
  },
  {
      "id": "67902",
      "name": "Senia M80",
      "brand_id": "121"
  },
  {
      "id": "67903",
      "name": "Senia R7",
      "brand_id": "121"
  },
  {
      "id": "67904",
      "name": "Senia R9",
      "brand_id": "121"
  },
  {
      "id": "67905",
      "name": "Senia S80",
      "brand_id": "121"
  },
  {
      "id": "67906",
      "name": "Sirius S80",
      "brand_id": "121"
  },
  {
      "id": "41518",
      "name": "V2",
      "brand_id": "121"
  },
  {
      "id": "41519",
      "name": "V5",
      "brand_id": "121"
  },
  {
      "id": "55062",
      "name": "V80",
      "brand_id": "121"
  },
  {
      "id": "67907",
      "name": "Vela",
      "brand_id": "121"
  },
  {
      "id": "1983",
      "name": "Vita (C1)",
      "brand_id": "121"
  },
  {
      "id": "60213",
      "name": "X40",
      "brand_id": "121"
  },
  {
      "id": "61954",
      "name": "X80",
      "brand_id": "121"
  },
  {
      "id": "67908",
      "name": "Xiali",
      "brand_id": "121"
  },
  {
      "id": "60039",
      "name": "1100",
      "brand_id": "23"
  },
  {
      "id": "2672",
      "name": "1100B",
      "brand_id": "23"
  },
  {
      "id": "64043",
      "name": "1100T",
      "brand_id": "23"
  },
  {
      "id": "64044",
      "name": "1200",
      "brand_id": "23"
  },
  {
      "id": "1151",
      "name": "124",
      "brand_id": "23"
  },
  {
      "id": "3733",
      "name": "125",
      "brand_id": "23"
  },
  {
      "id": "206",
      "name": "126",
      "brand_id": "23"
  },
  {
      "id": "207",
      "name": "127",
      "brand_id": "23"
  },
  {
      "id": "208",
      "name": "128",
      "brand_id": "23"
  },
  {
      "id": "1152",
      "name": "130",
      "brand_id": "23"
  },
  {
      "id": "53002",
      "name": "1300",
      "brand_id": "23"
  },
  {
      "id": "1153",
      "name": "131 (Mirafiori)",
      "brand_id": "23"
  },
  {
      "id": "210",
      "name": "132",
      "brand_id": "23"
  },
  {
      "id": "42890",
      "name": "133",
      "brand_id": "23"
  },
  {
      "id": "64046",
      "name": "1400",
      "brand_id": "23"
  },
  {
      "id": "64036",
      "name": "147",
      "brand_id": "23"
  },
  {
      "id": "46307",
      "name": "1500",
      "brand_id": "23"
  },
  {
      "id": "64048",
      "name": "1500 L",
      "brand_id": "23"
  },
  {
      "id": "64045",
      "name": "1600",
      "brand_id": "23"
  },
  {
      "id": "64049",
      "name": "1800",
      "brand_id": "23"
  },
  {
      "id": "64051",
      "name": "1900",
      "brand_id": "23"
  },
  {
      "id": "64050",
      "name": "2100",
      "brand_id": "23"
  },
  {
      "id": "3378",
      "name": "2300",
      "brand_id": "23"
  },
  {
      "id": "1154",
      "name": "238",
      "brand_id": "23"
  },
  {
      "id": "64038",
      "name": "241",
      "brand_id": "23"
  },
  {
      "id": "1155",
      "name": "242",
      "brand_id": "23"
  },
  {
      "id": "1156",
      "name": "500",
      "brand_id": "23"
  },
  {
      "id": "36376",
      "name": "500C",
      "brand_id": "23"
  },
  {
      "id": "56590",
      "name": "500e",
      "brand_id": "23"
  },
  {
      "id": "43013",
      "name": "500L",
      "brand_id": "23"
  },
  {
      "id": "46210",
      "name": "500X",
      "brand_id": "23"
  },
  {
      "id": "45027",
      "name": "508",
      "brand_id": "23"
  },
  {
      "id": "41917",
      "name": "600",
      "brand_id": "23"
  },
  {
      "id": "64039",
      "name": "600 T",
      "brand_id": "23"
  },
  {
      "id": "40947",
      "name": "850",
      "brand_id": "23"
  },
  {
      "id": "64025",
      "name": "8V",
      "brand_id": "23"
  },
  {
      "id": "1157",
      "name": "900",
      "brand_id": "23"
  },
  {
      "id": "1158",
      "name": "Albea",
      "brand_id": "23"
  },
  {
      "id": "212",
      "name": "Argenta",
      "brand_id": "23"
  },
  {
      "id": "64040",
      "name": "Argo",
      "brand_id": "23"
  },
  {
      "id": "64042",
      "name": "Avventura",
      "brand_id": "23"
  },
  {
      "id": "213",
      "name": "Barchetta",
      "brand_id": "23"
  },
  {
      "id": "214",
      "name": "Brava",
      "brand_id": "23"
  },
  {
      "id": "215",
      "name": "Bravo",
      "brand_id": "23"
  },
  {
      "id": "31823",
      "name": "Campagnola",
      "brand_id": "23"
  },
  {
      "id": "216",
      "name": "Cinquecento",
      "brand_id": "23"
  },
  {
      "id": "217",
      "name": "Coupe",
      "brand_id": "23"
  },
  {
      "id": "2822",
      "name": "Croma",
      "brand_id": "23"
  },
  {
      "id": "64059",
      "name": "Cronos",
      "brand_id": "23"
  },
  {
      "id": "64060",
      "name": "Dino",
      "brand_id": "23"
  },
  {
      "id": "219",
      "name": "Doblo",
      "brand_id": "23"
  },
  {
      "id": "3208",
      "name": "Doblo Panorama",
      "brand_id": "23"
  },
  {
      "id": "1160",
      "name": "Duna",
      "brand_id": "23"
  },
  {
      "id": "64832",
      "name": "E-Doblo",
      "brand_id": "23"
  },
  {
      "id": "64064",
      "name": "Egea",
      "brand_id": "23"
  },
  {
      "id": "37496",
      "name": "Elba",
      "brand_id": "23"
  },
  {
      "id": "64067",
      "name": "ESV",
      "brand_id": "23"
  },
  {
      "id": "64068",
      "name": "Fastback",
      "brand_id": "23"
  },
  {
      "id": "40443",
      "name": "Fiorino",
      "brand_id": "23"
  },
  {
      "id": "37037",
      "name": "Freemont",
      "brand_id": "23"
  },
  {
      "id": "51275",
      "name": "Fullback",
      "brand_id": "23"
  },
  {
      "id": "2635",
      "name": "Grande Punto",
      "brand_id": "23"
  },
  {
      "id": "1162",
      "name": "Idea",
      "brand_id": "23"
  },
  {
      "id": "2003",
      "name": "Linea",
      "brand_id": "23"
  },
  {
      "id": "220",
      "name": "Marea",
      "brand_id": "23"
  },
  {
      "id": "64062",
      "name": "Marengo",
      "brand_id": "23"
  },
  {
      "id": "64063",
      "name": "Mille",
      "brand_id": "23"
  },
  {
      "id": "64065",
      "name": "Mobi",
      "brand_id": "23"
  },
  {
      "id": "222",
      "name": "Multipla",
      "brand_id": "23"
  },
  {
      "id": "64066",
      "name": "Ottimo",
      "brand_id": "23"
  },
  {
      "id": "1163",
      "name": "Palio",
      "brand_id": "23"
  },
  {
      "id": "223",
      "name": "Panda",
      "brand_id": "23"
  },
  {
      "id": "64070",
      "name": "Penny",
      "brand_id": "23"
  },
  {
      "id": "64071",
      "name": "Perla",
      "brand_id": "23"
  },
  {
      "id": "65512",
      "name": "Pick-up",
      "brand_id": "23"
  },
  {
      "id": "64075",
      "name": "Pratico",
      "brand_id": "23"
  },
  {
      "id": "64077",
      "name": "Pulse",
      "brand_id": "23"
  },
  {
      "id": "224",
      "name": "Punto",
      "brand_id": "23"
  },
  {
      "id": "60435",
      "name": "Qubo",
      "brand_id": "23"
  },
  {
      "id": "225",
      "name": "Regata  (7)",
      "brand_id": "23"
  },
  {
      "id": "64081",
      "name": "Regatta",
      "brand_id": "23"
  },
  {
      "id": "1164",
      "name": "Ritmo",
      "brand_id": "23"
  },
  {
      "id": "35398",
      "name": "Scudo",
      "brand_id": "23"
  },
  {
      "id": "2018",
      "name": "Sedici",
      "brand_id": "23"
  },
  {
      "id": "226",
      "name": "Seicento",
      "brand_id": "23"
  },
  {
      "id": "1166",
      "name": "Siena",
      "brand_id": "23"
  },
  {
      "id": "64078",
      "name": "Spazio",
      "brand_id": "23"
  },
  {
      "id": "64079",
      "name": "Spider",
      "brand_id": "23"
  },
  {
      "id": "227",
      "name": "Stilo",
      "brand_id": "23"
  },
  {
      "id": "228",
      "name": "Strada",
      "brand_id": "23"
  },
  {
      "id": "57588",
      "name": "Talento",
      "brand_id": "23"
  },
  {
      "id": "229",
      "name": "Tempra",
      "brand_id": "23"
  },
  {
      "id": "230",
      "name": "Tipo",
      "brand_id": "23"
  },
  {
      "id": "62754",
      "name": "Tipo Cross",
      "brand_id": "23"
  },
  {
      "id": "2971",
      "name": "Topolino",
      "brand_id": "23"
  },
  {
      "id": "63880",
      "name": "Toro",
      "brand_id": "23"
  },
  {
      "id": "231",
      "name": "Ulysse",
      "brand_id": "23"
  },
  {
      "id": "232",
      "name": "Uno",
      "brand_id": "23"
  },
  {
      "id": "64082",
      "name": "Urban Cross",
      "brand_id": "23"
  },
  {
      "id": "64083",
      "name": "Viaggio",
      "brand_id": "23"
  },
  {
      "id": "64084",
      "name": "Vivace",
      "brand_id": "23"
  },
  {
      "id": "64085",
      "name": "Weekend",
      "brand_id": "23"
  },
  {
      "id": "233",
      "name": "X1/9",
      "brand_id": "23"
  },
  {
      "id": "1178",
      "name": "Aerostar",
      "brand_id": "24"
  },
  {
      "id": "1179",
      "name": "Aspire",
      "brand_id": "24"
  },
  {
      "id": "40406",
      "name": "B-Max",
      "brand_id": "24"
  },
  {
      "id": "2776",
      "name": "Bronco",
      "brand_id": "24"
  },
  {
      "id": "63563",
      "name": "Bronco II",
      "brand_id": "24"
  },
  {
      "id": "63432",
      "name": "Bronco Sport",
      "brand_id": "24"
  },
  {
      "id": "2036",
      "name": "C-Max",
      "brand_id": "24"
  },
  {
      "id": "234",
      "name": "Capri",
      "brand_id": "24"
  },
  {
      "id": "63566",
      "name": "Capri Barchetta",
      "brand_id": "24"
  },
  {
      "id": "1167",
      "name": "Consul",
      "brand_id": "24"
  },
  {
      "id": "63565",
      "name": "Consul Capri",
      "brand_id": "24"
  },
  {
      "id": "1180",
      "name": "Contour",
      "brand_id": "24"
  },
  {
      "id": "3133",
      "name": "Corsair",
      "brand_id": "24"
  },
  {
      "id": "235",
      "name": "Cortina",
      "brand_id": "24"
  },
  {
      "id": "236",
      "name": "Cougar",
      "brand_id": "24"
  },
  {
      "id": "1679",
      "name": "Courier",
      "brand_id": "24"
  },
  {
      "id": "1181",
      "name": "Crown Victoria",
      "brand_id": "24"
  },
  {
      "id": "3134",
      "name": "E-150",
      "brand_id": "24"
  },
  {
      "id": "3135",
      "name": "E-250",
      "brand_id": "24"
  },
  {
      "id": "3244",
      "name": "E-350",
      "brand_id": "24"
  },
  {
      "id": "3110",
      "name": "E-450",
      "brand_id": "24"
  },
  {
      "id": "30783",
      "name": "E-series",
      "brand_id": "24"
  },
  {
      "id": "67259",
      "name": "E-Tourneo Courier Active",
      "brand_id": "24"
  },
  {
      "id": "67263",
      "name": "E-Tourneo Custom",
      "brand_id": "24"
  },
  {
      "id": "67260",
      "name": "E-Transit Courier",
      "brand_id": "24"
  },
  {
      "id": "67264",
      "name": "E-Transit Custom",
      "brand_id": "24"
  },
  {
      "id": "1182",
      "name": "Econoline",
      "brand_id": "24"
  },
  {
      "id": "1168",
      "name": "Econovan",
      "brand_id": "24"
  },
  {
      "id": "45099",
      "name": "EcoSport",
      "brand_id": "24"
  },
  {
      "id": "1945",
      "name": "Edge",
      "brand_id": "24"
  },
  {
      "id": "33418",
      "name": "Eifel",
      "brand_id": "24"
  },
  {
      "id": "63568",
      "name": "Equator",
      "brand_id": "24"
  },
  {
      "id": "1183",
      "name": "Escape",
      "brand_id": "24"
  },
  {
      "id": "237",
      "name": "Escort",
      "brand_id": "24"
  },
  {
      "id": "63567",
      "name": "Everest",
      "brand_id": "24"
  },
  {
      "id": "63570",
      "name": "Evos",
      "brand_id": "24"
  },
  {
      "id": "1169",
      "name": "Excursion",
      "brand_id": "24"
  },
  {
      "id": "1170",
      "name": "Expedition",
      "brand_id": "24"
  },
  {
      "id": "238",
      "name": "Explorer",
      "brand_id": "24"
  },
  {
      "id": "63592",
      "name": "Explorer Sport Trac",
      "brand_id": "24"
  },
  {
      "id": "63569",
      "name": "F-1",
      "brand_id": "24"
  },
  {
      "id": "63571",
      "name": "F-100",
      "brand_id": "24"
  },
  {
      "id": "63574",
      "name": "F-110",
      "brand_id": "24"
  },
  {
      "id": "2103",
      "name": "F-150",
      "brand_id": "24"
  },
  {
      "id": "63572",
      "name": "F-2",
      "brand_id": "24"
  },
  {
      "id": "2291",
      "name": "F-250",
      "brand_id": "24"
  },
  {
      "id": "63582",
      "name": "F-260",
      "brand_id": "24"
  },
  {
      "id": "63573",
      "name": "F-3",
      "brand_id": "24"
  },
  {
      "id": "3771",
      "name": "F-350",
      "brand_id": "24"
  },
  {
      "id": "63581",
      "name": "F-360",
      "brand_id": "24"
  },
  {
      "id": "3770",
      "name": "F-450",
      "brand_id": "24"
  },
  {
      "id": "63580",
      "name": "F-47",
      "brand_id": "24"
  },
  {
      "id": "63576",
      "name": "F-5",
      "brand_id": "24"
  },
  {
      "id": "35934",
      "name": "F-550",
      "brand_id": "24"
  },
  {
      "id": "63577",
      "name": "F-6",
      "brand_id": "24"
  },
  {
      "id": "63584",
      "name": "F-600",
      "brand_id": "24"
  },
  {
      "id": "33329",
      "name": "F-650",
      "brand_id": "24"
  },
  {
      "id": "63578",
      "name": "F-7",
      "brand_id": "24"
  },
  {
      "id": "51332",
      "name": "F-700",
      "brand_id": "24"
  },
  {
      "id": "63585",
      "name": "F-7000",
      "brand_id": "24"
  },
  {
      "id": "63583",
      "name": "F-750",
      "brand_id": "24"
  },
  {
      "id": "63579",
      "name": "F-8",
      "brand_id": "24"
  },
  {
      "id": "63587",
      "name": "F-800",
      "brand_id": "24"
  },
  {
      "id": "36929",
      "name": "Fairlane",
      "brand_id": "24"
  },
  {
      "id": "38970",
      "name": "Fairmont",
      "brand_id": "24"
  },
  {
      "id": "40037",
      "name": "Falcon",
      "brand_id": "24"
  },
  {
      "id": "31824",
      "name": "Festiva",
      "brand_id": "24"
  },
  {
      "id": "239",
      "name": "Fiesta",
      "brand_id": "24"
  },
  {
      "id": "61789",
      "name": "Fiesta Active",
      "brand_id": "24"
  },
  {
      "id": "40515",
      "name": "Figo",
      "brand_id": "24"
  },
  {
      "id": "1186",
      "name": "Five Hundred",
      "brand_id": "24"
  },
  {
      "id": "3111",
      "name": "Flex",
      "brand_id": "24"
  },
  {
      "id": "240",
      "name": "Focus",
      "brand_id": "24"
  },
  {
      "id": "61790",
      "name": "Focus Active",
      "brand_id": "24"
  },
  {
      "id": "60475",
      "name": "Focus C-Max",
      "brand_id": "24"
  },
  {
      "id": "1188",
      "name": "Freestar",
      "brand_id": "24"
  },
  {
      "id": "39771",
      "name": "Freestyle",
      "brand_id": "24"
  },
  {
      "id": "241",
      "name": "Fusion",
      "brand_id": "24"
  },
  {
      "id": "53600",
      "name": "Futura",
      "brand_id": "24"
  },
  {
      "id": "33116",
      "name": "Galaxie",
      "brand_id": "24"
  },
  {
      "id": "242",
      "name": "Galaxy",
      "brand_id": "24"
  },
  {
      "id": "37289",
      "name": "Gran Torino",
      "brand_id": "24"
  },
  {
      "id": "243",
      "name": "Granada",
      "brand_id": "24"
  },
  {
      "id": "33614",
      "name": "Grand C-Max",
      "brand_id": "24"
  },
  {
      "id": "67257",
      "name": "Grand Tourneo Connect",
      "brand_id": "24"
  },
  {
      "id": "1189",
      "name": "GT",
      "brand_id": "24"
  },
  {
      "id": "244",
      "name": "KA",
      "brand_id": "24"
  },
  {
      "id": "3051",
      "name": "Ka+ Active",
      "brand_id": "24"
  },
  {
      "id": "2874",
      "name": "Kuga",
      "brand_id": "24"
  },
  {
      "id": "30472",
      "name": "Laser",
      "brand_id": "24"
  },
  {
      "id": "37655",
      "name": "LTD",
      "brand_id": "24"
  },
  {
      "id": "60327",
      "name": "Mainline",
      "brand_id": "24"
  },
  {
      "id": "245",
      "name": "Maverick",
      "brand_id": "24"
  },
  {
      "id": "28799",
      "name": "Mercury",
      "brand_id": "24"
  },
  {
      "id": "3132",
      "name": "Model 48",
      "brand_id": "24"
  },
  {
      "id": "36861",
      "name": "Model A",
      "brand_id": "24"
  },
  {
      "id": "41936",
      "name": "Model T",
      "brand_id": "24"
  },
  {
      "id": "246",
      "name": "Mondeo",
      "brand_id": "24"
  },
  {
      "id": "2047",
      "name": "Mustang",
      "brand_id": "24"
  },
  {
      "id": "60585",
      "name": "Mustang Mach-E",
      "brand_id": "24"
  },
  {
      "id": "247",
      "name": "Orion",
      "brand_id": "24"
  },
  {
      "id": "18506",
      "name": "Otosan P100",
      "brand_id": "24"
  },
  {
      "id": "3113",
      "name": "Perfect",
      "brand_id": "24"
  },
  {
      "id": "248",
      "name": "Probe",
      "brand_id": "24"
  },
  {
      "id": "249",
      "name": "Puma",
      "brand_id": "24"
  },
  {
      "id": "34469",
      "name": "Ranch Wagon",
      "brand_id": "24"
  },
  {
      "id": "1173",
      "name": "Ranchero",
      "brand_id": "24"
  },
  {
      "id": "1171",
      "name": "Ranger",
      "brand_id": "24"
  },
  {
      "id": "2037",
      "name": "S-Max",
      "brand_id": "24"
  },
  {
      "id": "250",
      "name": "Scorpio",
      "brand_id": "24"
  },
  {
      "id": "2970",
      "name": "Sierra",
      "brand_id": "24"
  },
  {
      "id": "1172",
      "name": "SportKa",
      "brand_id": "24"
  },
  {
      "id": "253",
      "name": "StreetKa",
      "brand_id": "24"
  },
  {
      "id": "1174",
      "name": "Taunus",
      "brand_id": "24"
  },
  {
      "id": "1193",
      "name": "Taurus",
      "brand_id": "24"
  },
  {
      "id": "63588",
      "name": "Taurus X",
      "brand_id": "24"
  },
  {
      "id": "30471",
      "name": "Telstar",
      "brand_id": "24"
  },
  {
      "id": "1175",
      "name": "Tempo",
      "brand_id": "24"
  },
  {
      "id": "62808",
      "name": "Territory",
      "brand_id": "24"
  },
  {
      "id": "254",
      "name": "Think",
      "brand_id": "24"
  },
  {
      "id": "1194",
      "name": "Thunderbird",
      "brand_id": "24"
  },
  {
      "id": "52140",
      "name": "Torino",
      "brand_id": "24"
  },
  {
      "id": "1176",
      "name": "Tourneo Connect",
      "brand_id": "24"
  },
  {
      "id": "67258",
      "name": "Tourneo Connect Active",
      "brand_id": "24"
  },
  {
      "id": "45251",
      "name": "Tourneo Courier",
      "brand_id": "24"
  },
  {
      "id": "67261",
      "name": "Tourneo Courier Active",
      "brand_id": "24"
  },
  {
      "id": "41503",
      "name": "Tourneo Custom",
      "brand_id": "24"
  },
  {
      "id": "67262",
      "name": "Tourneo Custom Active",
      "brand_id": "24"
  },
  {
      "id": "35397",
      "name": "Transit Connect",
      "brand_id": "24"
  },
  {
      "id": "41234",
      "name": "Transit Custom",
      "brand_id": "24"
  },
  {
      "id": "41753",
      "name": "V8",
      "brand_id": "24"
  },
  {
      "id": "1682",
      "name": "Windstar",
      "brand_id": "24"
  },
  {
      "id": "65800",
      "name": "Atlas",
      "brand_id": "185"
  },
  {
      "id": "63237",
      "name": "Atlas Pro",
      "brand_id": "185"
  },
  {
      "id": "1865",
      "name": "BO",
      "brand_id": "185"
  },
  {
      "id": "2533",
      "name": "CK",
      "brand_id": "185"
  },
  {
      "id": "3438",
      "name": "CK-2",
      "brand_id": "185"
  },
  {
      "id": "63238",
      "name": "Coolray",
      "brand_id": "185"
  },
  {
      "id": "64261",
      "name": "E6",
      "brand_id": "185"
  },
  {
      "id": "59447",
      "name": "Emgrand",
      "brand_id": "185"
  },
  {
      "id": "35772",
      "name": "Emgrand 7 (EC7)",
      "brand_id": "185"
  },
  {
      "id": "42863",
      "name": "Emgrand 8 (EC8)",
      "brand_id": "185"
  },
  {
      "id": "36629",
      "name": "Emgrand EC7-RV",
      "brand_id": "185"
  },
  {
      "id": "62478",
      "name": "Emgrand EV253",
      "brand_id": "185"
  },
  {
      "id": "62532",
      "name": "Emgrand EV300",
      "brand_id": "185"
  },
  {
      "id": "62488",
      "name": "Emgrand GSE",
      "brand_id": "185"
  },
  {
      "id": "42226",
      "name": "Emgrand X7",
      "brand_id": "185"
  },
  {
      "id": "46260",
      "name": "Emgrand X9",
      "brand_id": "185"
  },
  {
      "id": "64304",
      "name": "Emgrand EV Pro",
      "brand_id": "185"
  },
  {
      "id": "67430",
      "name": "Emgrand EV350",
      "brand_id": "185"
  },
  {
      "id": "63283",
      "name": "Emgrand EV500",
      "brand_id": "185"
  },
  {
      "id": "28217",
      "name": "Emgrand GL",
      "brand_id": "185"
  },
  {
      "id": "2940",
      "name": "FC",
      "brand_id": "185"
  },
  {
      "id": "42545",
      "name": "GC2",
      "brand_id": "185"
  },
  {
      "id": "44545",
      "name": "GC5",
      "brand_id": "185"
  },
  {
      "id": "44096",
      "name": "GC6",
      "brand_id": "185"
  },
  {
      "id": "45021",
      "name": "GC7",
      "brand_id": "185"
  },
  {
      "id": "62527",
      "name": "Geometry A",
      "brand_id": "185"
  },
  {
      "id": "64260",
      "name": "Geometry C",
      "brand_id": "185"
  },
  {
      "id": "42546",
      "name": "GХ2",
      "brand_id": "185"
  },
  {
      "id": "1861",
      "name": "HS",
      "brand_id": "185"
  },
  {
      "id": "63162",
      "name": "Icon",
      "brand_id": "185"
  },
  {
      "id": "61572",
      "name": "Kandi EX3",
      "brand_id": "185"
  },
  {
      "id": "39864",
      "name": "LC",
      "brand_id": "185"
  },
  {
      "id": "39865",
      "name": "LC Cross",
      "brand_id": "185"
  },
  {
      "id": "3440",
      "name": "Maple C82",
      "brand_id": "185"
  },
  {
      "id": "2534",
      "name": "MK",
      "brand_id": "185"
  },
  {
      "id": "37427",
      "name": "MK Cross",
      "brand_id": "185"
  },
  {
      "id": "1863",
      "name": "MK M303",
      "brand_id": "185"
  },
  {
      "id": "3437",
      "name": "MK-2",
      "brand_id": "185"
  },
  {
      "id": "67337",
      "name": "Monjaro",
      "brand_id": "185"
  },
  {
      "id": "31271",
      "name": "MR",
      "brand_id": "185"
  },
  {
      "id": "45950",
      "name": "Panda",
      "brand_id": "185"
  },
  {
      "id": "67985",
      "name": "Panda Mini",
      "brand_id": "185"
  },
  {
      "id": "36476",
      "name": "SL",
      "brand_id": "185"
  },
  {
      "id": "1862",
      "name": "UL",
      "brand_id": "185"
  },
  {
      "id": "40548",
      "name": "Vision",
      "brand_id": "185"
  },
  {
      "id": "36806",
      "name": "CC",
      "brand_id": "124"
  },
  {
      "id": "30549",
      "name": "Cowry",
      "brand_id": "124"
  },
  {
      "id": "1206",
      "name": "Deer",
      "brand_id": "124"
  },
  {
      "id": "32725",
      "name": "Florid",
      "brand_id": "124"
  },
  {
      "id": "66689",
      "name": "Florid Cross",
      "brand_id": "124"
  },
  {
      "id": "47946",
      "name": "H6",
      "brand_id": "124"
  },
  {
      "id": "35795",
      "name": "Haval",
      "brand_id": "124"
  },
  {
      "id": "53538",
      "name": "Haval H2",
      "brand_id": "124"
  },
  {
      "id": "45003",
      "name": "Haval H3",
      "brand_id": "124"
  },
  {
      "id": "45004",
      "name": "Haval H5",
      "brand_id": "124"
  },
  {
      "id": "45005",
      "name": "Haval H6",
      "brand_id": "124"
  },
  {
      "id": "53537",
      "name": "Haval H9",
      "brand_id": "124"
  },
  {
      "id": "45006",
      "name": "Haval M2",
      "brand_id": "124"
  },
  {
      "id": "45007",
      "name": "Haval M4",
      "brand_id": "124"
  },
  {
      "id": "1869",
      "name": "Hover",
      "brand_id": "124"
  },
  {
      "id": "3024",
      "name": "Hover F&L",
      "brand_id": "124"
  },
  {
      "id": "62494",
      "name": "Ora IQ",
      "brand_id": "124"
  },
  {
      "id": "55025",
      "name": "Ora R1",
      "brand_id": "124"
  },
  {
      "id": "1917",
      "name": "Pegasus",
      "brand_id": "124"
  },
  {
      "id": "63159",
      "name": "Poer",
      "brand_id": "124"
  },
  {
      "id": "1207",
      "name": "Safe",
      "brand_id": "124"
  },
  {
      "id": "38373",
      "name": "Sing",
      "brand_id": "124"
  },
  {
      "id": "1918",
      "name": "SoCool",
      "brand_id": "124"
  },
  {
      "id": "64031",
      "name": "Steed",
      "brand_id": "124"
  },
  {
      "id": "32503",
      "name": "SUV",
      "brand_id": "124"
  },
  {
      "id": "32277",
      "name": "Tianma",
      "brand_id": "124"
  },
  {
      "id": "49509",
      "name": "Voleex C10",
      "brand_id": "124"
  },
  {
      "id": "66691",
      "name": "Voleex C20",
      "brand_id": "124"
  },
  {
      "id": "61250",
      "name": "Voleex C30",
      "brand_id": "124"
  },
  {
      "id": "62448",
      "name": "Voleex C50",
      "brand_id": "124"
  },
  {
      "id": "66690",
      "name": "Voleex V80",
      "brand_id": "124"
  },
  {
      "id": "2007",
      "name": "Wingle",
      "brand_id": "124"
  },
  {
      "id": "46489",
      "name": "М4",
      "brand_id": "124"
  },
  {
      "id": "67594",
      "name": "Chitu",
      "brand_id": "5456"
  },
  {
      "id": "67609",
      "name": "Chulian",
      "brand_id": "5456"
  },
  {
      "id": "67610",
      "name": "Dagou",
      "brand_id": "5456"
  },
  {
      "id": "63299",
      "name": "Dargo",
      "brand_id": "5456"
  },
  {
      "id": "67595",
      "name": "F5",
      "brand_id": "5456"
  },
  {
      "id": "67596",
      "name": "F7",
      "brand_id": "5456"
  },
  {
      "id": "67597",
      "name": "F7x",
      "brand_id": "5456"
  },
  {
      "id": "67598",
      "name": "H-Dog",
      "brand_id": "5456"
  },
  {
      "id": "67599",
      "name": "H1",
      "brand_id": "5456"
  },
  {
      "id": "54304",
      "name": "H2",
      "brand_id": "5456"
  },
  {
      "id": "67600",
      "name": "H4",
      "brand_id": "5456"
  },
  {
      "id": "67601",
      "name": "H5",
      "brand_id": "5456"
  },
  {
      "id": "54305",
      "name": "H6",
      "brand_id": "5456"
  },
  {
      "id": "63300",
      "name": "H6 GT",
      "brand_id": "5456"
  },
  {
      "id": "64472",
      "name": "H6 HEV",
      "brand_id": "5456"
  },
  {
      "id": "67602",
      "name": "H7",
      "brand_id": "5456"
  },
  {
      "id": "67603",
      "name": "H8",
      "brand_id": "5456"
  },
  {
      "id": "54306",
      "name": "H9",
      "brand_id": "5456"
  },
  {
      "id": "62251",
      "name": "Jolion",
      "brand_id": "5456"
  },
  {
      "id": "67604",
      "name": "Kugou",
      "brand_id": "5456"
  },
  {
      "id": "65801",
      "name": "M6",
      "brand_id": "5456"
  },
  {
      "id": "65982",
      "name": "Ora 03",
      "brand_id": "5456"
  },
  {
      "id": "67605",
      "name": "Shenshou",
      "brand_id": "5456"
  },
  {
      "id": "67607",
      "name": "Xiaolong",
      "brand_id": "5456"
  },
  {
      "id": "67608",
      "name": "Xiaolong Max",
      "brand_id": "5456"
  },
  {
      "id": "67606",
      "name": "XY",
      "brand_id": "5456"
  },
  {
      "id": "63643",
      "name": "1300",
      "brand_id": "28"
  },
  {
      "id": "63641",
      "name": "145",
      "brand_id": "28"
  },
  {
      "id": "262",
      "name": "Accord",
      "brand_id": "28"
  },
  {
      "id": "34307",
      "name": "Acty",
      "brand_id": "28"
  },
  {
      "id": "263",
      "name": "Aerodeck",
      "brand_id": "28"
  },
  {
      "id": "63638",
      "name": "Airwave",
      "brand_id": "28"
  },
  {
      "id": "63640",
      "name": "Amaze",
      "brand_id": "28"
  },
  {
      "id": "1251",
      "name": "Ascot",
      "brand_id": "28"
  },
  {
      "id": "63648",
      "name": "Ascot Innova",
      "brand_id": "28"
  },
  {
      "id": "1230",
      "name": "Avancier",
      "brand_id": "28"
  },
  {
      "id": "63649",
      "name": "AZ600",
      "brand_id": "28"
  },
  {
      "id": "264",
      "name": "Ballade",
      "brand_id": "28"
  },
  {
      "id": "41561",
      "name": "Beat",
      "brand_id": "28"
  },
  {
      "id": "63656",
      "name": "BR-V",
      "brand_id": "28"
  },
  {
      "id": "63657",
      "name": "Breeze",
      "brand_id": "28"
  },
  {
      "id": "63658",
      "name": "Brio",
      "brand_id": "28"
  },
  {
      "id": "1231",
      "name": "Capa",
      "brand_id": "28"
  },
  {
      "id": "1232",
      "name": "City",
      "brand_id": "28"
  },
  {
      "id": "265",
      "name": "Civic",
      "brand_id": "28"
  },
  {
      "id": "267",
      "name": "Civic Shuttle",
      "brand_id": "28"
  },
  {
      "id": "54839",
      "name": "Clarity",
      "brand_id": "28"
  },
  {
      "id": "268",
      "name": "Concerto",
      "brand_id": "28"
  },
  {
      "id": "63677",
      "name": "Coupe",
      "brand_id": "28"
  },
  {
      "id": "269",
      "name": "CR-V",
      "brand_id": "28"
  },
  {
      "id": "270",
      "name": "CR-X",
      "brand_id": "28"
  },
  {
      "id": "62183",
      "name": "CR-X del Sol",
      "brand_id": "28"
  },
  {
      "id": "30566",
      "name": "CR-Z",
      "brand_id": "28"
  },
  {
      "id": "63655",
      "name": "Crider",
      "brand_id": "28"
  },
  {
      "id": "63651",
      "name": "Crossroad",
      "brand_id": "28"
  },
  {
      "id": "3896",
      "name": "Crosstour",
      "brand_id": "28"
  },
  {
      "id": "1233",
      "name": "Domani",
      "brand_id": "28"
  },
  {
      "id": "59938",
      "name": "e",
      "brand_id": "28"
  },
  {
      "id": "65501",
      "name": "e:Ny1",
      "brand_id": "28"
  },
  {
      "id": "63639",
      "name": "EA6",
      "brand_id": "28"
  },
  {
      "id": "63654",
      "name": "Edix",
      "brand_id": "28"
  },
  {
      "id": "1234",
      "name": "Element",
      "brand_id": "28"
  },
  {
      "id": "47418",
      "name": "Elysion",
      "brand_id": "28"
  },
  {
      "id": "65059",
      "name": "eNP1",
      "brand_id": "28"
  },
  {
      "id": "64096",
      "name": "eNS1",
      "brand_id": "28"
  },
  {
      "id": "63652",
      "name": "Envix",
      "brand_id": "28"
  },
  {
      "id": "63653",
      "name": "EV Plus",
      "brand_id": "28"
  },
  {
      "id": "63297",
      "name": "Everus VE-1",
      "brand_id": "28"
  },
  {
      "id": "1236",
      "name": "Fit",
      "brand_id": "28"
  },
  {
      "id": "1237",
      "name": "Fit Aria",
      "brand_id": "28"
  },
  {
      "id": "63660",
      "name": "Fit Shuttle",
      "brand_id": "28"
  },
  {
      "id": "1238",
      "name": "FR-V",
      "brand_id": "28"
  },
  {
      "id": "62469",
      "name": "Freed",
      "brand_id": "28"
  },
  {
      "id": "63661",
      "name": "Gienia",
      "brand_id": "28"
  },
  {
      "id": "63659",
      "name": "Grace",
      "brand_id": "28"
  },
  {
      "id": "63664",
      "name": "Horizon",
      "brand_id": "28"
  },
  {
      "id": "271",
      "name": "HR-V",
      "brand_id": "28"
  },
  {
      "id": "272",
      "name": "Insight",
      "brand_id": "28"
  },
  {
      "id": "1239",
      "name": "Inspire",
      "brand_id": "28"
  },
  {
      "id": "273",
      "name": "Integra",
      "brand_id": "28"
  },
  {
      "id": "31976",
      "name": "Jade",
      "brand_id": "28"
  },
  {
      "id": "274",
      "name": "Jazz",
      "brand_id": "28"
  },
  {
      "id": "62971",
      "name": "Jazz Crosstar",
      "brand_id": "28"
  },
  {
      "id": "1240",
      "name": "Lagreat",
      "brand_id": "28"
  },
  {
      "id": "275",
      "name": "Legend",
      "brand_id": "28"
  },
  {
      "id": "1241",
      "name": "Life",
      "brand_id": "28"
  },
  {
      "id": "276",
      "name": "Logo",
      "brand_id": "28"
  },
  {
      "id": "62906",
      "name": "M-NV",
      "brand_id": "28"
  },
  {
      "id": "63681",
      "name": "MDX",
      "brand_id": "28"
  },
  {
      "id": "1242",
      "name": "Mobilio",
      "brand_id": "28"
  },
  {
      "id": "63662",
      "name": "N-Box",
      "brand_id": "28"
  },
  {
      "id": "63666",
      "name": "N-One",
      "brand_id": "28"
  },
  {
      "id": "63668",
      "name": "N-Van",
      "brand_id": "28"
  },
  {
      "id": "63667",
      "name": "N-WGN",
      "brand_id": "28"
  },
  {
      "id": "63686",
      "name": "N360",
      "brand_id": "28"
  },
  {
      "id": "63684",
      "name": "N600",
      "brand_id": "28"
  },
  {
      "id": "277",
      "name": "NSX",
      "brand_id": "28"
  },
  {
      "id": "1243",
      "name": "Odyssey",
      "brand_id": "28"
  },
  {
      "id": "1244",
      "name": "Orthia",
      "brand_id": "28"
  },
  {
      "id": "1245",
      "name": "Partner",
      "brand_id": "28"
  },
  {
      "id": "1246",
      "name": "Passport",
      "brand_id": "28"
  },
  {
      "id": "1247",
      "name": "Pilot",
      "brand_id": "28"
  },
  {
      "id": "278",
      "name": "Prelude",
      "brand_id": "28"
  },
  {
      "id": "66604",
      "name": "Prologue",
      "brand_id": "28"
  },
  {
      "id": "279",
      "name": "Quintet",
      "brand_id": "28"
  },
  {
      "id": "37349",
      "name": "Rafaga",
      "brand_id": "28"
  },
  {
      "id": "2724",
      "name": "Ridgeline",
      "brand_id": "28"
  },
  {
      "id": "63663",
      "name": "S-MX",
      "brand_id": "28"
  },
  {
      "id": "280",
      "name": "S2000",
      "brand_id": "28"
  },
  {
      "id": "63665",
      "name": "S660",
      "brand_id": "28"
  },
  {
      "id": "1248",
      "name": "Saber",
      "brand_id": "28"
  },
  {
      "id": "281",
      "name": "Shuttle",
      "brand_id": "28"
  },
  {
      "id": "1249",
      "name": "SM-X",
      "brand_id": "28"
  },
  {
      "id": "63671",
      "name": "Spirior",
      "brand_id": "28"
  },
  {
      "id": "1250",
      "name": "Stepwgn",
      "brand_id": "28"
  },
  {
      "id": "282",
      "name": "Stream",
      "brand_id": "28"
  },
  {
      "id": "62166",
      "name": "Street",
      "brand_id": "28"
  },
  {
      "id": "63670",
      "name": "That's",
      "brand_id": "28"
  },
  {
      "id": "1253",
      "name": "Torneo",
      "brand_id": "28"
  },
  {
      "id": "63669",
      "name": "UR-V",
      "brand_id": "28"
  },
  {
      "id": "1254",
      "name": "Vamos",
      "brand_id": "28"
  },
  {
      "id": "63672",
      "name": "Vezel",
      "brand_id": "28"
  },
  {
      "id": "1255",
      "name": "Vigor",
      "brand_id": "28"
  },
  {
      "id": "63679",
      "name": "WR-V",
      "brand_id": "28"
  },
  {
      "id": "62480",
      "name": "X-NV",
      "brand_id": "28"
  },
  {
      "id": "63673",
      "name": "XR-V",
      "brand_id": "28"
  },
  {
      "id": "1256",
      "name": "Z",
      "brand_id": "28"
  },
  {
      "id": "63674",
      "name": "Zest",
      "brand_id": "28"
  },
  {
      "id": "63675",
      "name": "ZR-V",
      "brand_id": "28"
  },
  {
      "id": "1258",
      "name": "Accent",
      "brand_id": "29"
  },
  {
      "id": "284",
      "name": "Amica",
      "brand_id": "29"
  },
  {
      "id": "63607",
      "name": "Aslan",
      "brand_id": "29"
  },
  {
      "id": "285",
      "name": "Atos",
      "brand_id": "29"
  },
  {
      "id": "63608",
      "name": "Atos Prime",
      "brand_id": "29"
  },
  {
      "id": "2386",
      "name": "Avante",
      "brand_id": "29"
  },
  {
      "id": "2497",
      "name": "Azera",
      "brand_id": "29"
  },
  {
      "id": "63616",
      "name": "Bayon",
      "brand_id": "29"
  },
  {
      "id": "63617",
      "name": "Casper",
      "brand_id": "29"
  },
  {
      "id": "63618",
      "name": "Celesta",
      "brand_id": "29"
  },
  {
      "id": "1259",
      "name": "Centennial",
      "brand_id": "29"
  },
  {
      "id": "63619",
      "name": "Click",
      "brand_id": "29"
  },
  {
      "id": "286",
      "name": "Coupe",
      "brand_id": "29"
  },
  {
      "id": "49259",
      "name": "Creta",
      "brand_id": "29"
  },
  {
      "id": "63606",
      "name": "Custo",
      "brand_id": "29"
  },
  {
      "id": "1260",
      "name": "Dynasty",
      "brand_id": "29"
  },
  {
      "id": "3086",
      "name": "Elantra",
      "brand_id": "29"
  },
  {
      "id": "65955",
      "name": "Elantra GT",
      "brand_id": "29"
  },
  {
      "id": "62853",
      "name": "Encino EV",
      "brand_id": "29"
  },
  {
      "id": "18481",
      "name": "Entourage",
      "brand_id": "29"
  },
  {
      "id": "63609",
      "name": "Eon",
      "brand_id": "29"
  },
  {
      "id": "36796",
      "name": "Equus",
      "brand_id": "29"
  },
  {
      "id": "33898",
      "name": "Excel",
      "brand_id": "29"
  },
  {
      "id": "1261",
      "name": "Galloper",
      "brand_id": "29"
  },
  {
      "id": "2834",
      "name": "Genesis",
      "brand_id": "29"
  },
  {
      "id": "3082",
      "name": "Genesis Coupe",
      "brand_id": "29"
  },
  {
      "id": "35223",
      "name": "Getz",
      "brand_id": "29"
  },
  {
      "id": "43651",
      "name": "Grand Santa Fe",
      "brand_id": "29"
  },
  {
      "id": "41439",
      "name": "Grand Starex",
      "brand_id": "29"
  },
  {
      "id": "2186",
      "name": "Grandeur",
      "brand_id": "29"
  },
  {
      "id": "63620",
      "name": "H 100",
      "brand_id": "29"
  },
  {
      "id": "55769",
      "name": "H 200",
      "brand_id": "29"
  },
  {
      "id": "64500",
      "name": "H 300",
      "brand_id": "29"
  },
  {
      "id": "43940",
      "name": "H-1",
      "brand_id": "29"
  },
  {
      "id": "63626",
      "name": "HB20",
      "brand_id": "29"
  },
  {
      "id": "2770",
      "name": "i10",
      "brand_id": "29"
  },
  {
      "id": "2771",
      "name": "i20",
      "brand_id": "29"
  },
  {
      "id": "2772",
      "name": "i30",
      "brand_id": "29"
  },
  {
      "id": "63418",
      "name": "i30 Wagon",
      "brand_id": "29"
  },
  {
      "id": "38715",
      "name": "i40",
      "brand_id": "29"
  },
  {
      "id": "63611",
      "name": "i45",
      "brand_id": "29"
  },
  {
      "id": "64504",
      "name": "i800",
      "brand_id": "29"
  },
  {
      "id": "63614",
      "name": "iLoad",
      "brand_id": "29"
  },
  {
      "id": "63615",
      "name": "iMax",
      "brand_id": "29"
  },
  {
      "id": "50018",
      "name": "Ioniq",
      "brand_id": "29"
  },
  {
      "id": "62845",
      "name": "Ioniq 5",
      "brand_id": "29"
  },
  {
      "id": "64263",
      "name": "Ioniq 6",
      "brand_id": "29"
  },
  {
      "id": "63115",
      "name": "Ioniq Electric",
      "brand_id": "29"
  },
  {
      "id": "48040",
      "name": "ix20",
      "brand_id": "29"
  },
  {
      "id": "63621",
      "name": "ix25",
      "brand_id": "29"
  },
  {
      "id": "3901",
      "name": "ix35",
      "brand_id": "29"
  },
  {
      "id": "3670",
      "name": "ix55",
      "brand_id": "29"
  },
  {
      "id": "51933",
      "name": "Kona",
      "brand_id": "29"
  },
  {
      "id": "63077",
      "name": "Kona Electric",
      "brand_id": "29"
  },
  {
      "id": "63623",
      "name": "Lafesta",
      "brand_id": "29"
  },
  {
      "id": "62243",
      "name": "Lafesta EV",
      "brand_id": "29"
  },
  {
      "id": "289",
      "name": "Lantra",
      "brand_id": "29"
  },
  {
      "id": "38006",
      "name": "Lavita",
      "brand_id": "29"
  },
  {
      "id": "33550",
      "name": "Marcia",
      "brand_id": "29"
  },
  {
      "id": "290",
      "name": "Matrix",
      "brand_id": "29"
  },
  {
      "id": "43519",
      "name": "Maxcruz",
      "brand_id": "29"
  },
  {
      "id": "63630",
      "name": "Mistra",
      "brand_id": "29"
  },
  {
      "id": "54015",
      "name": "NEXO",
      "brand_id": "29"
  },
  {
      "id": "63631",
      "name": "NF",
      "brand_id": "29"
  },
  {
      "id": "60031",
      "name": "Palisade",
      "brand_id": "29"
  },
  {
      "id": "291",
      "name": "Pony",
      "brand_id": "29"
  },
  {
      "id": "2353",
      "name": "Presto",
      "brand_id": "29"
  },
  {
      "id": "63633",
      "name": "Reina",
      "brand_id": "29"
  },
  {
      "id": "294",
      "name": "S-Coupe",
      "brand_id": "29"
  },
  {
      "id": "63622",
      "name": "Santa Cruz",
      "brand_id": "29"
  },
  {
      "id": "293",
      "name": "Santa FE",
      "brand_id": "29"
  },
  {
      "id": "1266",
      "name": "Santamo",
      "brand_id": "29"
  },
  {
      "id": "63627",
      "name": "Santro",
      "brand_id": "29"
  },
  {
      "id": "35041",
      "name": "Solaris",
      "brand_id": "29"
  },
  {
      "id": "295",
      "name": "Sonata",
      "brand_id": "29"
  },
  {
      "id": "63634",
      "name": "Sonica",
      "brand_id": "29"
  },
  {
      "id": "28531",
      "name": "Starex",
      "brand_id": "29"
  },
  {
      "id": "63028",
      "name": "Staria",
      "brand_id": "29"
  },
  {
      "id": "296",
      "name": "Stellar",
      "brand_id": "29"
  },
  {
      "id": "1267",
      "name": "Terracan",
      "brand_id": "29"
  },
  {
      "id": "2824",
      "name": "Tiburon",
      "brand_id": "29"
  },
  {
      "id": "297",
      "name": "Trajet",
      "brand_id": "29"
  },
  {
      "id": "1268",
      "name": "Tucson",
      "brand_id": "29"
  },
  {
      "id": "36174",
      "name": "Tuscani",
      "brand_id": "29"
  },
  {
      "id": "36447",
      "name": "Veloster",
      "brand_id": "29"
  },
  {
      "id": "58455",
      "name": "Venue",
      "brand_id": "29"
  },
  {
      "id": "36010",
      "name": "Veracruz",
      "brand_id": "29"
  },
  {
      "id": "55610",
      "name": "Verna",
      "brand_id": "29"
  },
  {
      "id": "63646",
      "name": "Xcent",
      "brand_id": "29"
  },
  {
      "id": "1269",
      "name": "XG",
      "brand_id": "29"
  },
  {
      "id": "65545",
      "name": "ESQ",
      "brand_id": "128"
  },
  {
      "id": "46862",
      "name": "EX 25",
      "brand_id": "128"
  },
  {
      "id": "46762",
      "name": "EX 30",
      "brand_id": "128"
  },
  {
      "id": "46763",
      "name": "EX 35",
      "brand_id": "128"
  },
  {
      "id": "46764",
      "name": "EX 37",
      "brand_id": "128"
  },
  {
      "id": "46827",
      "name": "FX 30",
      "brand_id": "128"
  },
  {
      "id": "46829",
      "name": "FX 35",
      "brand_id": "128"
  },
  {
      "id": "46828",
      "name": "FX 37",
      "brand_id": "128"
  },
  {
      "id": "46831",
      "name": "FX 45",
      "brand_id": "128"
  },
  {
      "id": "46830",
      "name": "FX 50",
      "brand_id": "128"
  },
  {
      "id": "1271",
      "name": "G20",
      "brand_id": "128"
  },
  {
      "id": "30617",
      "name": "G25",
      "brand_id": "128"
  },
  {
      "id": "32953",
      "name": "G35",
      "brand_id": "128"
  },
  {
      "id": "35999",
      "name": "G37",
      "brand_id": "128"
  },
  {
      "id": "1273",
      "name": "I30",
      "brand_id": "128"
  },
  {
      "id": "1274",
      "name": "I35",
      "brand_id": "128"
  },
  {
      "id": "58586",
      "name": "J30",
      "brand_id": "128"
  },
  {
      "id": "62408",
      "name": "JX35",
      "brand_id": "128"
  },
  {
      "id": "32612",
      "name": "M25",
      "brand_id": "128"
  },
  {
      "id": "1276",
      "name": "M30",
      "brand_id": "128"
  },
  {
      "id": "46765",
      "name": "M35",
      "brand_id": "128"
  },
  {
      "id": "32613",
      "name": "M37",
      "brand_id": "128"
  },
  {
      "id": "1277",
      "name": "M45",
      "brand_id": "128"
  },
  {
      "id": "32611",
      "name": "M56",
      "brand_id": "128"
  },
  {
      "id": "46769",
      "name": "Q30",
      "brand_id": "128"
  },
  {
      "id": "57521",
      "name": "Q40",
      "brand_id": "128"
  },
  {
      "id": "1278",
      "name": "Q45",
      "brand_id": "128"
  },
  {
      "id": "45128",
      "name": "Q50",
      "brand_id": "128"
  },
  {
      "id": "45129",
      "name": "Q60",
      "brand_id": "128"
  },
  {
      "id": "45130",
      "name": "Q70",
      "brand_id": "128"
  },
  {
      "id": "49288",
      "name": "QX30",
      "brand_id": "128"
  },
  {
      "id": "1279",
      "name": "QX4",
      "brand_id": "128"
  },
  {
      "id": "45131",
      "name": "QX50",
      "brand_id": "128"
  },
  {
      "id": "46770",
      "name": "QX56",
      "brand_id": "128"
  },
  {
      "id": "45132",
      "name": "QX60",
      "brand_id": "128"
  },
  {
      "id": "45133",
      "name": "QX70",
      "brand_id": "128"
  },
  {
      "id": "45134",
      "name": "QX80",
      "brand_id": "128"
  },
  {
      "id": "63029",
      "name": "QX55",
      "brand_id": "128"
  },
  {
      "id": "59448",
      "name": "Daily",
      "brand_id": "175"
  },
  {
      "id": "35995",
      "name": "35S13",
      "brand_id": "175"
  },
  {
      "id": "43351",
      "name": "Daily 4x4",
      "brand_id": "175"
  },
  {
      "id": "67818",
      "name": "Fidato",
      "brand_id": "175"
  },
  {
      "id": "2195",
      "name": "Massif",
      "brand_id": "175"
  },
  {
      "id": "30323",
      "name": "Menarini",
      "brand_id": "175"
  },
  {
      "id": "2121",
      "name": "Unic",
      "brand_id": "175"
  },
  {
      "id": "67683",
      "name": "A5 Plus",
      "brand_id": "317"
  },
  {
      "id": "67691",
      "name": "A60",
      "brand_id": "317"
  },
  {
      "id": "67684",
      "name": "Binyue",
      "brand_id": "317"
  },
  {
      "id": "63365",
      "name": "e-JS4",
      "brand_id": "317"
  },
  {
      "id": "67685",
      "name": "Heyue",
      "brand_id": "317"
  },
  {
      "id": "67706",
      "name": "Heyue RS",
      "brand_id": "317"
  },
  {
      "id": "67686",
      "name": "iEV5",
      "brand_id": "317"
  },
  {
      "id": "67687",
      "name": "iEV6E",
      "brand_id": "317"
  },
  {
      "id": "67688",
      "name": "iEV6E Sport",
      "brand_id": "317"
  },
  {
      "id": "67707",
      "name": "iEV6S",
      "brand_id": "317"
  },
  {
      "id": "63236",
      "name": "iEV7L",
      "brand_id": "317"
  },
  {
      "id": "56022",
      "name": "iEV7S",
      "brand_id": "317"
  },
  {
      "id": "62966",
      "name": "iEVA50",
      "brand_id": "317"
  },
  {
      "id": "62526",
      "name": "iEVS4",
      "brand_id": "317"
  },
  {
      "id": "42671",
      "name": "J2",
      "brand_id": "317"
  },
  {
      "id": "42672",
      "name": "J3",
      "brand_id": "317"
  },
  {
      "id": "67708",
      "name": "J3 Cross",
      "brand_id": "317"
  },
  {
      "id": "67709",
      "name": "J3 Turin",
      "brand_id": "317"
  },
  {
      "id": "53373",
      "name": "J4",
      "brand_id": "317"
  },
  {
      "id": "42673",
      "name": "J5",
      "brand_id": "317"
  },
  {
      "id": "42674",
      "name": "J6",
      "brand_id": "317"
  },
  {
      "id": "62712",
      "name": "J7",
      "brand_id": "317"
  },
  {
      "id": "62711",
      "name": "JS2",
      "brand_id": "317"
  },
  {
      "id": "63349",
      "name": "JS3",
      "brand_id": "317"
  },
  {
      "id": "63364",
      "name": "JS4",
      "brand_id": "317"
  },
  {
      "id": "63366",
      "name": "JS5",
      "brand_id": "317"
  },
  {
      "id": "63367",
      "name": "JS6",
      "brand_id": "317"
  },
  {
      "id": "63368",
      "name": "JS7",
      "brand_id": "317"
  },
  {
      "id": "2478",
      "name": "M1",
      "brand_id": "317"
  },
  {
      "id": "67693",
      "name": "M3",
      "brand_id": "317"
  },
  {
      "id": "67710",
      "name": "M4",
      "brand_id": "317"
  },
  {
      "id": "67711",
      "name": "M5",
      "brand_id": "317"
  },
  {
      "id": "68011",
      "name": "N35",
      "brand_id": "317"
  },
  {
      "id": "68010",
      "name": "N80",
      "brand_id": "317"
  },
  {
      "id": "67690",
      "name": "QX",
      "brand_id": "317"
  },
  {
      "id": "67695",
      "name": "R3",
      "brand_id": "317"
  },
  {
      "id": "64290",
      "name": "Refine E3",
      "brand_id": "317"
  },
  {
      "id": "67692",
      "name": "Refine L6 Max",
      "brand_id": "317"
  },
  {
      "id": "67694",
      "name": "Refine M6",
      "brand_id": "317"
  },
  {
      "id": "67696",
      "name": "Refine S2",
      "brand_id": "317"
  },
  {
      "id": "67697",
      "name": "Refine S3",
      "brand_id": "317"
  },
  {
      "id": "67698",
      "name": "Refine S4",
      "brand_id": "317"
  },
  {
      "id": "67699",
      "name": "Refine S5",
      "brand_id": "317"
  },
  {
      "id": "67700",
      "name": "Refine S7",
      "brand_id": "317"
  },
  {
      "id": "2479",
      "name": "Rein",
      "brand_id": "317"
  },
  {
      "id": "67701",
      "name": "S1",
      "brand_id": "317"
  },
  {
      "id": "48787",
      "name": "S2",
      "brand_id": "317"
  },
  {
      "id": "67712",
      "name": "S2 Mini",
      "brand_id": "317"
  },
  {
      "id": "45165",
      "name": "S3",
      "brand_id": "317"
  },
  {
      "id": "61838",
      "name": "S4",
      "brand_id": "317"
  },
  {
      "id": "42675",
      "name": "S5",
      "brand_id": "317"
  },
  {
      "id": "63298",
      "name": "S7",
      "brand_id": "317"
  },
  {
      "id": "64110",
      "name": "SOL E20X",
      "brand_id": "317"
  },
  {
      "id": "62970",
      "name": "Sol E40X",
      "brand_id": "317"
  },
  {
      "id": "60917",
      "name": "Sunray",
      "brand_id": "317"
  },
  {
      "id": "67704",
      "name": "T40",
      "brand_id": "317"
  },
  {
      "id": "67702",
      "name": "T5",
      "brand_id": "317"
  },
  {
      "id": "55827",
      "name": "T6",
      "brand_id": "317"
  },
  {
      "id": "59790",
      "name": "T8",
      "brand_id": "317"
  },
  {
      "id": "67703",
      "name": "T9",
      "brand_id": "317"
  },
  {
      "id": "67705",
      "name": "Yttrium 3",
      "brand_id": "317"
  },
  {
      "id": "65894",
      "name": "420",
      "brand_id": "31"
  },
  {
      "id": "53223",
      "name": "E-Pace",
      "brand_id": "31"
  },
  {
      "id": "1302",
      "name": "E-Type",
      "brand_id": "31"
  },
  {
      "id": "47194",
      "name": "F-Pace",
      "brand_id": "31"
  },
  {
      "id": "41406",
      "name": "F-Type",
      "brand_id": "31"
  },
  {
      "id": "53878",
      "name": "I-Pace",
      "brand_id": "31"
  },
  {
      "id": "2701",
      "name": "Mark 1",
      "brand_id": "31"
  },
  {
      "id": "65922",
      "name": "Mark 2",
      "brand_id": "31"
  },
  {
      "id": "65923",
      "name": "Mark IV",
      "brand_id": "31"
  },
  {
      "id": "65924",
      "name": "Mark IX",
      "brand_id": "31"
  },
  {
      "id": "65925",
      "name": "Mark V",
      "brand_id": "31"
  },
  {
      "id": "65926",
      "name": "Mark VII",
      "brand_id": "31"
  },
  {
      "id": "65927",
      "name": "Mark VIII",
      "brand_id": "31"
  },
  {
      "id": "65928",
      "name": "Mark X",
      "brand_id": "31"
  },
  {
      "id": "301",
      "name": "S-Type",
      "brand_id": "31"
  },
  {
      "id": "303",
      "name": "X-Type",
      "brand_id": "31"
  },
  {
      "id": "45713",
      "name": "XE",
      "brand_id": "31"
  },
  {
      "id": "2264",
      "name": "XF",
      "brand_id": "31"
  },
  {
      "id": "304",
      "name": "XJ",
      "brand_id": "31"
  },
  {
      "id": "307",
      "name": "XJ220",
      "brand_id": "31"
  },
  {
      "id": "311",
      "name": "XJS",
      "brand_id": "31"
  },
  {
      "id": "3190",
      "name": "XK",
      "brand_id": "31"
  },
  {
      "id": "47540",
      "name": "Workmax",
      "brand_id": "1590"
  },
  {
      "id": "65087",
      "name": "Avenger",
      "brand_id": "32"
  },
  {
      "id": "314",
      "name": "Cherokee",
      "brand_id": "32"
  },
  {
      "id": "1304",
      "name": "CJ",
      "brand_id": "32"
  },
  {
      "id": "47753",
      "name": "Comanche",
      "brand_id": "32"
  },
  {
      "id": "2983",
      "name": "Commander",
      "brand_id": "32"
  },
  {
      "id": "65088",
      "name": "Commando",
      "brand_id": "32"
  },
  {
      "id": "2842",
      "name": "Compass",
      "brand_id": "32"
  },
  {
      "id": "58683",
      "name": "Gladiator",
      "brand_id": "32"
  },
  {
      "id": "315",
      "name": "Grand Cherokee",
      "brand_id": "32"
  },
  {
      "id": "65089",
      "name": "Grand Commander",
      "brand_id": "32"
  },
  {
      "id": "64473",
      "name": "Grand Wagoneer",
      "brand_id": "32"
  },
  {
      "id": "65090",
      "name": "Jeepster",
      "brand_id": "32"
  },
  {
      "id": "2126",
      "name": "Liberty",
      "brand_id": "32"
  },
  {
      "id": "65091",
      "name": "Meridian",
      "brand_id": "32"
  },
  {
      "id": "2630",
      "name": "Patriot",
      "brand_id": "32"
  },
  {
      "id": "65092",
      "name": "Pickup Truck",
      "brand_id": "32"
  },
  {
      "id": "45321",
      "name": "Renegade",
      "brand_id": "32"
  },
  {
      "id": "65093",
      "name": "Scrambler",
      "brand_id": "32"
  },
  {
      "id": "34686",
      "name": "Wagoneer",
      "brand_id": "32"
  },
  {
      "id": "316",
      "name": "Wrangler",
      "brand_id": "32"
  },
  {
      "id": "65918",
      "name": "Dashing",
      "brand_id": "55069"
  },
  {
      "id": "61870",
      "name": "X70",
      "brand_id": "55069"
  },
  {
      "id": "62024",
      "name": "X70 Coupe",
      "brand_id": "55069"
  },
  {
      "id": "67778",
      "name": "X70 Plus",
      "brand_id": "55069"
  },
  {
      "id": "62025",
      "name": "X90",
      "brand_id": "55069"
  },
  {
      "id": "62026",
      "name": "X95",
      "brand_id": "55069"
  },
  {
      "id": "31946",
      "name": "Amanti",
      "brand_id": "33"
  },
  {
      "id": "1307",
      "name": "Avella",
      "brand_id": "33"
  },
  {
      "id": "1308",
      "name": "Besta",
      "brand_id": "33"
  },
  {
      "id": "31558",
      "name": "Bongo",
      "brand_id": "33"
  },
  {
      "id": "3397",
      "name": "Borrego",
      "brand_id": "33"
  },
  {
      "id": "63676",
      "name": "Brisa",
      "brand_id": "33"
  },
  {
      "id": "3897",
      "name": "Cadenza",
      "brand_id": "33"
  },
  {
      "id": "1309",
      "name": "Capital",
      "brand_id": "33"
  },
  {
      "id": "317",
      "name": "Carens",
      "brand_id": "33"
  },
  {
      "id": "1310",
      "name": "Carnival",
      "brand_id": "33"
  },
  {
      "id": "32961",
      "name": "Carstar",
      "brand_id": "33"
  },
  {
      "id": "2033",
      "name": "Ceed",
      "brand_id": "33"
  },
  {
      "id": "1311",
      "name": "Cerato",
      "brand_id": "33"
  },
  {
      "id": "3660",
      "name": "Cerato Koup",
      "brand_id": "33"
  },
  {
      "id": "29004",
      "name": "Ceres",
      "brand_id": "33"
  },
  {
      "id": "318",
      "name": "Clarus",
      "brand_id": "33"
  },
  {
      "id": "1312",
      "name": "Concord",
      "brand_id": "33"
  },
  {
      "id": "33200",
      "name": "Credos",
      "brand_id": "33"
  },
  {
      "id": "63678",
      "name": "Elan",
      "brand_id": "33"
  },
  {
      "id": "1313",
      "name": "Enterprise",
      "brand_id": "33"
  },
  {
      "id": "67265",
      "name": "EV5",
      "brand_id": "33"
  },
  {
      "id": "63406",
      "name": "EV6",
      "brand_id": "33"
  },
  {
      "id": "64866",
      "name": "EV9",
      "brand_id": "33"
  },
  {
      "id": "49491",
      "name": "Forte",
      "brand_id": "33"
  },
  {
      "id": "63685",
      "name": "Grand VQ-R",
      "brand_id": "33"
  },
  {
      "id": "1314",
      "name": "Joice",
      "brand_id": "33"
  },
  {
      "id": "1685",
      "name": "Jumbo Titan",
      "brand_id": "33"
  },
  {
      "id": "63687",
      "name": "K2",
      "brand_id": "33"
  },
  {
      "id": "60866",
      "name": "K3",
      "brand_id": "33"
  },
  {
      "id": "63694",
      "name": "K4",
      "brand_id": "33"
  },
  {
      "id": "58260",
      "name": "K5",
      "brand_id": "33"
  },
  {
      "id": "61476",
      "name": "K7",
      "brand_id": "33"
  },
  {
      "id": "63695",
      "name": "K8",
      "brand_id": "33"
  },
  {
      "id": "63696",
      "name": "K9",
      "brand_id": "33"
  },
  {
      "id": "58971",
      "name": "K900",
      "brand_id": "33"
  },
  {
      "id": "63693",
      "name": "KX Cross",
      "brand_id": "33"
  },
  {
      "id": "63072",
      "name": "KX-3",
      "brand_id": "33"
  },
  {
      "id": "63680",
      "name": "KX1",
      "brand_id": "33"
  },
  {
      "id": "63683",
      "name": "KX5",
      "brand_id": "33"
  },
  {
      "id": "63688",
      "name": "KX7",
      "brand_id": "33"
  },
  {
      "id": "63369",
      "name": "Lotze",
      "brand_id": "33"
  },
  {
      "id": "319",
      "name": "Magentis",
      "brand_id": "33"
  },
  {
      "id": "320",
      "name": "Mentor",
      "brand_id": "33"
  },
  {
      "id": "3586",
      "name": "Mohave",
      "brand_id": "33"
  },
  {
      "id": "321",
      "name": "Morning",
      "brand_id": "33"
  },
  {
      "id": "50175",
      "name": "Niro",
      "brand_id": "33"
  },
  {
      "id": "1316",
      "name": "Opirus",
      "brand_id": "33"
  },
  {
      "id": "1840",
      "name": "Optima",
      "brand_id": "33"
  },
  {
      "id": "63697",
      "name": "Parktown",
      "brand_id": "33"
  },
  {
      "id": "63698",
      "name": "Pegas",
      "brand_id": "33"
  },
  {
      "id": "1306",
      "name": "Picanto",
      "brand_id": "33"
  },
  {
      "id": "1317",
      "name": "Potentia",
      "brand_id": "33"
  },
  {
      "id": "59587",
      "name": "Pregio",
      "brand_id": "33"
  },
  {
      "id": "322",
      "name": "Pride",
      "brand_id": "33"
  },
  {
      "id": "2794",
      "name": "ProCeed",
      "brand_id": "33"
  },
  {
      "id": "41999",
      "name": "Quoris",
      "brand_id": "33"
  },
  {
      "id": "54680",
      "name": "Ray",
      "brand_id": "33"
  },
  {
      "id": "1319",
      "name": "Retona",
      "brand_id": "33"
  },
  {
      "id": "323",
      "name": "Rio",
      "brand_id": "33"
  },
  {
      "id": "62261",
      "name": "Rio X",
      "brand_id": "33"
  },
  {
      "id": "54062",
      "name": "Rio X-Line",
      "brand_id": "33"
  },
  {
      "id": "1320",
      "name": "Roadster",
      "brand_id": "33"
  },
  {
      "id": "3672",
      "name": "Rondo",
      "brand_id": "33"
  },
  {
      "id": "324",
      "name": "Sedona",
      "brand_id": "33"
  },
  {
      "id": "31591",
      "name": "Seltos",
      "brand_id": "33"
  },
  {
      "id": "1321",
      "name": "Sephia",
      "brand_id": "33"
  },
  {
      "id": "325",
      "name": "Shuma",
      "brand_id": "33"
  },
  {
      "id": "63703",
      "name": "Soluto",
      "brand_id": "33"
  },
  {
      "id": "63704",
      "name": "Sonet",
      "brand_id": "33"
  },
  {
      "id": "326",
      "name": "Sorento",
      "brand_id": "33"
  },
  {
      "id": "3488",
      "name": "Soul",
      "brand_id": "33"
  },
  {
      "id": "54422",
      "name": "Soul EV",
      "brand_id": "33"
  },
  {
      "id": "3410",
      "name": "Spectra",
      "brand_id": "33"
  },
  {
      "id": "327",
      "name": "Sportage",
      "brand_id": "33"
  },
  {
      "id": "51264",
      "name": "Stinger",
      "brand_id": "33"
  },
  {
      "id": "51968",
      "name": "Stonic",
      "brand_id": "33"
  },
  {
      "id": "57410",
      "name": "Telluride",
      "brand_id": "33"
  },
  {
      "id": "40533",
      "name": "Towner",
      "brand_id": "33"
  },
  {
      "id": "29751",
      "name": "Venga",
      "brand_id": "33"
  },
  {
      "id": "1322",
      "name": "Visto",
      "brand_id": "33"
  },
  {
      "id": "63699",
      "name": "X-Trek",
      "brand_id": "33"
  },
  {
      "id": "60495",
      "name": "XCeed",
      "brand_id": "33"
  },
  {
      "id": "34912",
      "name": "Defender",
      "brand_id": "37"
  },
  {
      "id": "348",
      "name": "Discovery",
      "brand_id": "37"
  },
  {
      "id": "45955",
      "name": "Discovery Sport",
      "brand_id": "37"
  },
  {
      "id": "349",
      "name": "Freelander",
      "brand_id": "37"
  },
  {
      "id": "351",
      "name": "Range Rover",
      "brand_id": "37"
  },
  {
      "id": "35857",
      "name": "Range Rover Evoque",
      "brand_id": "37"
  },
  {
      "id": "3117",
      "name": "Range Rover Sport",
      "brand_id": "37"
  },
  {
      "id": "51016",
      "name": "Range Rover Velar",
      "brand_id": "37"
  },
  {
      "id": "64092",
      "name": "Series I",
      "brand_id": "37"
  },
  {
      "id": "64093",
      "name": "Series II",
      "brand_id": "37"
  },
  {
      "id": "64094",
      "name": "Series III",
      "brand_id": "37"
  },
  {
      "id": "34355",
      "name": "CT",
      "brand_id": "38"
  },
  {
      "id": "1343",
      "name": "ES",
      "brand_id": "38"
  },
  {
      "id": "352",
      "name": "GS",
      "brand_id": "38"
  },
  {
      "id": "1895",
      "name": "GX",
      "brand_id": "38"
  },
  {
      "id": "3900",
      "name": "HS",
      "brand_id": "38"
  },
  {
      "id": "354",
      "name": "IS",
      "brand_id": "38"
  },
  {
      "id": "65499",
      "name": "LBX",
      "brand_id": "38"
  },
  {
      "id": "52329",
      "name": "LC",
      "brand_id": "38"
  },
  {
      "id": "35247",
      "name": "LF",
      "brand_id": "38"
  },
  {
      "id": "63700",
      "name": "LFA",
      "brand_id": "38"
  },
  {
      "id": "58674",
      "name": "LM",
      "brand_id": "38"
  },
  {
      "id": "356",
      "name": "LS",
      "brand_id": "38"
  },
  {
      "id": "1344",
      "name": "LX",
      "brand_id": "38"
  },
  {
      "id": "44191",
      "name": "NX",
      "brand_id": "38"
  },
  {
      "id": "44709",
      "name": "RC",
      "brand_id": "38"
  },
  {
      "id": "62810",
      "name": "RC-F",
      "brand_id": "38"
  },
  {
      "id": "358",
      "name": "RX",
      "brand_id": "38"
  },
  {
      "id": "63701",
      "name": "RZ",
      "brand_id": "38"
  },
  {
      "id": "359",
      "name": "SC",
      "brand_id": "38"
  },
  {
      "id": "65524",
      "name": "TX",
      "brand_id": "38"
  },
  {
      "id": "53871",
      "name": "UX",
      "brand_id": "38"
  },
  {
      "id": "2379",
      "name": "320",
      "brand_id": "334"
  },
  {
      "id": "2707",
      "name": "520",
      "brand_id": "334"
  },
  {
      "id": "42237",
      "name": "530",
      "brand_id": "334"
  },
  {
      "id": "2378",
      "name": "620",
      "brand_id": "334"
  },
  {
      "id": "64047",
      "name": "650 EV",
      "brand_id": "334"
  },
  {
      "id": "2380",
      "name": "Breez",
      "brand_id": "334"
  },
  {
      "id": "63284",
      "name": "LF 650",
      "brand_id": "334"
  },
  {
      "id": "67671",
      "name": "Smily",
      "brand_id": "334"
  },
  {
      "id": "48389",
      "name": "Solano",
      "brand_id": "334"
  },
  {
      "id": "46832",
      "name": "X50",
      "brand_id": "334"
  },
  {
      "id": "37676",
      "name": "X60",
      "brand_id": "334"
  },
  {
      "id": "67672",
      "name": "X70",
      "brand_id": "334"
  },
  {
      "id": "1345",
      "name": "Aviator",
      "brand_id": "135"
  },
  {
      "id": "1346",
      "name": "Blackwood",
      "brand_id": "135"
  },
  {
      "id": "66007",
      "name": "Capri",
      "brand_id": "135"
  },
  {
      "id": "1347",
      "name": "Continental",
      "brand_id": "135"
  },
  {
      "id": "61887",
      "name": "Corsair",
      "brand_id": "135"
  },
  {
      "id": "66008",
      "name": "Cosmopolitan",
      "brand_id": "135"
  },
  {
      "id": "1348",
      "name": "LS",
      "brand_id": "135"
  },
  {
      "id": "1349",
      "name": "Mark",
      "brand_id": "135"
  },
  {
      "id": "66009",
      "name": "Mark LT",
      "brand_id": "135"
  },
  {
      "id": "44047",
      "name": "MKC",
      "brand_id": "135"
  },
  {
      "id": "3250",
      "name": "MKS",
      "brand_id": "135"
  },
  {
      "id": "3255",
      "name": "MKT",
      "brand_id": "135"
  },
  {
      "id": "1947",
      "name": "MKX",
      "brand_id": "135"
  },
  {
      "id": "1946",
      "name": "MKZ",
      "brand_id": "135"
  },
  {
      "id": "53276",
      "name": "Nautilus",
      "brand_id": "135"
  },
  {
      "id": "1350",
      "name": "Navigator",
      "brand_id": "135"
  },
  {
      "id": "66010",
      "name": "Premiere",
      "brand_id": "135"
  },
  {
      "id": "1351",
      "name": "Town Car",
      "brand_id": "135"
  },
  {
      "id": "43229",
      "name": "Zephyr",
      "brand_id": "135"
  },
  {
      "id": "1386",
      "name": "228",
      "brand_id": "45"
  },
  {
      "id": "380",
      "name": "3200 GT",
      "brand_id": "45"
  },
  {
      "id": "65958",
      "name": "3500 GT",
      "brand_id": "45"
  },
  {
      "id": "381",
      "name": "420/430",
      "brand_id": "45"
  },
  {
      "id": "65959",
      "name": "5000 GT",
      "brand_id": "45"
  },
  {
      "id": "1387",
      "name": "Barchetta Stradale",
      "brand_id": "45"
  },
  {
      "id": "382",
      "name": "Biturbo",
      "brand_id": "45"
  },
  {
      "id": "1388",
      "name": "Bora",
      "brand_id": "45"
  },
  {
      "id": "383",
      "name": "Coupe",
      "brand_id": "45"
  },
  {
      "id": "384",
      "name": "Ghibli",
      "brand_id": "45"
  },
  {
      "id": "41679",
      "name": "GranCabrio",
      "brand_id": "45"
  },
  {
      "id": "1390",
      "name": "GranSport",
      "brand_id": "45"
  },
  {
      "id": "3705",
      "name": "GranTurismo",
      "brand_id": "45"
  },
  {
      "id": "63445",
      "name": "Grecale",
      "brand_id": "45"
  },
  {
      "id": "1391",
      "name": "Indy",
      "brand_id": "45"
  },
  {
      "id": "1392",
      "name": "Karif",
      "brand_id": "45"
  },
  {
      "id": "1393",
      "name": "Khamsin",
      "brand_id": "45"
  },
  {
      "id": "1394",
      "name": "Kyalami",
      "brand_id": "45"
  },
  {
      "id": "47631",
      "name": "Levante",
      "brand_id": "45"
  },
  {
      "id": "33035",
      "name": "MC12",
      "brand_id": "45"
  },
  {
      "id": "62501",
      "name": "MC20",
      "brand_id": "45"
  },
  {
      "id": "1395",
      "name": "Merak",
      "brand_id": "45"
  },
  {
      "id": "1396",
      "name": "Mexico",
      "brand_id": "45"
  },
  {
      "id": "65960",
      "name": "Mistral",
      "brand_id": "45"
  },
  {
      "id": "385",
      "name": "Quattroporte",
      "brand_id": "45"
  },
  {
      "id": "1397",
      "name": "Royale",
      "brand_id": "45"
  },
  {
      "id": "386",
      "name": "Shamal",
      "brand_id": "45"
  },
  {
      "id": "387",
      "name": "Spyder",
      "brand_id": "45"
  },
  {
      "id": "63702",
      "name": "110S",
      "brand_id": "47"
  },
  {
      "id": "63705",
      "name": "1200",
      "brand_id": "47"
  },
  {
      "id": "390",
      "name": "121",
      "brand_id": "47"
  },
  {
      "id": "391",
      "name": "2",
      "brand_id": "47"
  },
  {
      "id": "1692",
      "name": "3",
      "brand_id": "47"
  },
  {
      "id": "392",
      "name": "323",
      "brand_id": "47"
  },
  {
      "id": "1912",
      "name": "5",
      "brand_id": "47"
  },
  {
      "id": "393",
      "name": "6",
      "brand_id": "47"
  },
  {
      "id": "394",
      "name": "626",
      "brand_id": "47"
  },
  {
      "id": "395",
      "name": "929",
      "brand_id": "47"
  },
  {
      "id": "63706",
      "name": "Allegro",
      "brand_id": "47"
  },
  {
      "id": "1402",
      "name": "Atenza",
      "brand_id": "47"
  },
  {
      "id": "63709",
      "name": "Axela",
      "brand_id": "47"
  },
  {
      "id": "1404",
      "name": "AZ-3",
      "brand_id": "47"
  },
  {
      "id": "63712",
      "name": "AZ-Offroad",
      "brand_id": "47"
  },
  {
      "id": "1406",
      "name": "B-series",
      "brand_id": "47"
  },
  {
      "id": "1408",
      "name": "Biante",
      "brand_id": "47"
  },
  {
      "id": "3761",
      "name": "BT-50",
      "brand_id": "47"
  },
  {
      "id": "28436",
      "name": "Capella",
      "brand_id": "47"
  },
  {
      "id": "1409",
      "name": "Carol",
      "brand_id": "47"
  },
  {
      "id": "63716",
      "name": "Chantez",
      "brand_id": "47"
  },
  {
      "id": "47557",
      "name": "Cosmo",
      "brand_id": "47"
  },
  {
      "id": "63715",
      "name": "Cosmo Sport",
      "brand_id": "47"
  },
  {
      "id": "1411",
      "name": "Cronos",
      "brand_id": "47"
  },
  {
      "id": "48041",
      "name": "CX-3",
      "brand_id": "47"
  },
  {
      "id": "60223",
      "name": "CX-30",
      "brand_id": "47"
  },
  {
      "id": "65111",
      "name": "CX-30 EV",
      "brand_id": "47"
  },
  {
      "id": "63710",
      "name": "CX-4",
      "brand_id": "47"
  },
  {
      "id": "37381",
      "name": "CX-5",
      "brand_id": "47"
  },
  {
      "id": "63726",
      "name": "CX-50",
      "brand_id": "47"
  },
  {
      "id": "63727",
      "name": "CX-60",
      "brand_id": "47"
  },
  {
      "id": "2009",
      "name": "CX-7",
      "brand_id": "47"
  },
  {
      "id": "63714",
      "name": "CX-8",
      "brand_id": "47"
  },
  {
      "id": "2010",
      "name": "CX-9",
      "brand_id": "47"
  },
  {
      "id": "64636",
      "name": "CX-90",
      "brand_id": "47"
  },
  {
      "id": "396",
      "name": "Demio",
      "brand_id": "47"
  },
  {
      "id": "63718",
      "name": "Drifter",
      "brand_id": "47"
  },
  {
      "id": "1414",
      "name": "E-series",
      "brand_id": "47"
  },
  {
      "id": "43048",
      "name": "Efini MS-6",
      "brand_id": "47"
  },
  {
      "id": "32558",
      "name": "Efini MS-8",
      "brand_id": "47"
  },
  {
      "id": "42015",
      "name": "Efini MS-9",
      "brand_id": "47"
  },
  {
      "id": "63729",
      "name": "Etude",
      "brand_id": "47"
  },
  {
      "id": "63719",
      "name": "Eunos 500",
      "brand_id": "47"
  },
  {
      "id": "63720",
      "name": "Eunos 800",
      "brand_id": "47"
  },
  {
      "id": "2867",
      "name": "Familia",
      "brand_id": "47"
  },
  {
      "id": "63732",
      "name": "Flair",
      "brand_id": "47"
  },
  {
      "id": "63735",
      "name": "Flair Wagon",
      "brand_id": "47"
  },
  {
      "id": "36293",
      "name": "Lantis",
      "brand_id": "47"
  },
  {
      "id": "63731",
      "name": "Laputa",
      "brand_id": "47"
  },
  {
      "id": "32952",
      "name": "Luce",
      "brand_id": "47"
  },
  {
      "id": "63733",
      "name": "Miata",
      "brand_id": "47"
  },
  {
      "id": "2865",
      "name": "Millenia",
      "brand_id": "47"
  },
  {
      "id": "397",
      "name": "MPV",
      "brand_id": "47"
  },
  {
      "id": "63713",
      "name": "MR90",
      "brand_id": "47"
  },
  {
      "id": "398",
      "name": "MX-3",
      "brand_id": "47"
  },
  {
      "id": "60541",
      "name": "MX-30",
      "brand_id": "47"
  },
  {
      "id": "399",
      "name": "MX-5",
      "brand_id": "47"
  },
  {
      "id": "400",
      "name": "MX-6",
      "brand_id": "47"
  },
  {
      "id": "63730",
      "name": "Navajo",
      "brand_id": "47"
  },
  {
      "id": "3757",
      "name": "Persona",
      "brand_id": "47"
  },
  {
      "id": "401",
      "name": "Premacy",
      "brand_id": "47"
  },
  {
      "id": "48202",
      "name": "Proceed",
      "brand_id": "47"
  },
  {
      "id": "3758",
      "name": "Protege",
      "brand_id": "47"
  },
  {
      "id": "63745",
      "name": "R100 Rotary Coupe",
      "brand_id": "47"
  },
  {
      "id": "63747",
      "name": "R360 Coupe",
      "brand_id": "47"
  },
  {
      "id": "63748",
      "name": "Roadpacer AP",
      "brand_id": "47"
  },
  {
      "id": "63749",
      "name": "Roadster",
      "brand_id": "47"
  },
  {
      "id": "63721",
      "name": "RX-2",
      "brand_id": "47"
  },
  {
      "id": "63722",
      "name": "RX-3",
      "brand_id": "47"
  },
  {
      "id": "63723",
      "name": "RX-4",
      "brand_id": "47"
  },
  {
      "id": "63724",
      "name": "RX-5",
      "brand_id": "47"
  },
  {
      "id": "402",
      "name": "RX-7",
      "brand_id": "47"
  },
  {
      "id": "403",
      "name": "RX-8",
      "brand_id": "47"
  },
  {
      "id": "2866",
      "name": "Sentia",
      "brand_id": "47"
  },
  {
      "id": "63725",
      "name": "Spiano",
      "brand_id": "47"
  },
  {
      "id": "404",
      "name": "Tribute",
      "brand_id": "47"
  },
  {
      "id": "63728",
      "name": "Verisa",
      "brand_id": "47"
  },
  {
      "id": "35814",
      "name": "Xedos 6",
      "brand_id": "47"
  },
  {
      "id": "405",
      "name": "Xedos 9",
      "brand_id": "47"
  },
  {
      "id": "56213",
      "name": "170V",
      "brand_id": "48"
  },
  {
      "id": "407",
      "name": "190",
      "brand_id": "48"
  },
  {
      "id": "410",
      "name": "230 Pullman",
      "brand_id": "48"
  },
  {
      "id": "64526",
      "name": "500K",
      "brand_id": "48"
  },
  {
      "id": "53354",
      "name": "540K",
      "brand_id": "48"
  },
  {
      "id": "423",
      "name": "A-Class",
      "brand_id": "48"
  },
  {
      "id": "424",
      "name": "AMG GT",
      "brand_id": "48"
  },
  {
      "id": "63469",
      "name": "AMG GT 4-Door Coupe",
      "brand_id": "48"
  },
  {
      "id": "2622",
      "name": "B-Class",
      "brand_id": "48"
  },
  {
      "id": "425",
      "name": "C-Class",
      "brand_id": "48"
  },
  {
      "id": "63149",
      "name": "C-Class All-Terrain",
      "brand_id": "48"
  },
  {
      "id": "30874",
      "name": "Citan",
      "brand_id": "48"
  },
  {
      "id": "1710",
      "name": "CL-Class",
      "brand_id": "48"
  },
  {
      "id": "40965",
      "name": "CLA-Class",
      "brand_id": "48"
  },
  {
      "id": "426",
      "name": "CLC-Class",
      "brand_id": "48"
  },
  {
      "id": "67765",
      "name": "CLE-Class",
      "brand_id": "48"
  },
  {
      "id": "427",
      "name": "CLK-Class",
      "brand_id": "48"
  },
  {
      "id": "3038",
      "name": "CLS-Class",
      "brand_id": "48"
  },
  {
      "id": "428",
      "name": "E-Class",
      "brand_id": "48"
  },
  {
      "id": "63473",
      "name": "E-Class All Terrain",
      "brand_id": "48"
  },
  {
      "id": "61332",
      "name": "EQA",
      "brand_id": "48"
  },
  {
      "id": "63150",
      "name": "EQB",
      "brand_id": "48"
  },
  {
      "id": "56268",
      "name": "EQC",
      "brand_id": "48"
  },
  {
      "id": "63151",
      "name": "EQE",
      "brand_id": "48"
  },
  {
      "id": "65983",
      "name": "EQE SUV",
      "brand_id": "48"
  },
  {
      "id": "62520",
      "name": "EQS",
      "brand_id": "48"
  },
  {
      "id": "63458",
      "name": "EQS SUV",
      "brand_id": "48"
  },
  {
      "id": "57763",
      "name": "EQV",
      "brand_id": "48"
  },
  {
      "id": "63353",
      "name": "eVito",
      "brand_id": "48"
  },
  {
      "id": "3048",
      "name": "G-Class",
      "brand_id": "48"
  },
  {
      "id": "1974",
      "name": "GL-Class",
      "brand_id": "48"
  },
  {
      "id": "43170",
      "name": "GLA-Class",
      "brand_id": "48"
  },
  {
      "id": "61400",
      "name": "GLB-Class",
      "brand_id": "48"
  },
  {
      "id": "46268",
      "name": "GLC-Class",
      "brand_id": "48"
  },
  {
      "id": "67475",
      "name": "GLC-Class Coupe",
      "brand_id": "48"
  },
  {
      "id": "45217",
      "name": "GLE-Class",
      "brand_id": "48"
  },
  {
      "id": "67474",
      "name": "GLE-Class Coupe",
      "brand_id": "48"
  },
  {
      "id": "2950",
      "name": "GLK-Class",
      "brand_id": "48"
  },
  {
      "id": "46690",
      "name": "GLS-Class",
      "brand_id": "48"
  },
  {
      "id": "54346",
      "name": "GLT-Class",
      "brand_id": "48"
  },
  {
      "id": "63474",
      "name": "Leichttransporter",
      "brand_id": "48"
  },
  {
      "id": "430",
      "name": "M-Class",
      "brand_id": "48"
  },
  {
      "id": "45537",
      "name": "Maybach",
      "brand_id": "48"
  },
  {
      "id": "1426",
      "name": "MB-Class",
      "brand_id": "48"
  },
  {
      "id": "58353",
      "name": "Metris",
      "brand_id": "48"
  },
  {
      "id": "1427",
      "name": "R-Class",
      "brand_id": "48"
  },
  {
      "id": "431",
      "name": "S-Class",
      "brand_id": "48"
  },
  {
      "id": "432",
      "name": "SL-Class",
      "brand_id": "48"
  },
  {
      "id": "48780",
      "name": "SLC-Class",
      "brand_id": "48"
  },
  {
      "id": "433",
      "name": "SLK-Class",
      "brand_id": "48"
  },
  {
      "id": "2097",
      "name": "SLR McLaren",
      "brand_id": "48"
  },
  {
      "id": "24925",
      "name": "SLS AMG",
      "brand_id": "48"
  },
  {
      "id": "63457",
      "name": "T-Class",
      "brand_id": "48"
  },
  {
      "id": "434",
      "name": "V-Class",
      "brand_id": "48"
  },
  {
      "id": "1429",
      "name": "Vaneo",
      "brand_id": "48"
  },
  {
      "id": "1431",
      "name": "Viano",
      "brand_id": "48"
  },
  {
      "id": "35252",
      "name": "Vito",
      "brand_id": "48"
  },
  {
      "id": "52183",
      "name": "X-Class",
      "brand_id": "48"
  },
  {
      "id": "67714",
      "name": "1100",
      "brand_id": "49"
  },
  {
      "id": "67715",
      "name": "1300",
      "brand_id": "49"
  },
  {
      "id": "42211",
      "name": "3",
      "brand_id": "49"
  },
  {
      "id": "42355",
      "name": "3 Cross",
      "brand_id": "49"
  },
  {
      "id": "39393",
      "name": "350",
      "brand_id": "49"
  },
  {
      "id": "67713",
      "name": "360",
      "brand_id": "49"
  },
  {
      "id": "67734",
      "name": "3SW",
      "brand_id": "49"
  },
  {
      "id": "64262",
      "name": "4",
      "brand_id": "49"
  },
  {
      "id": "42212",
      "name": "5",
      "brand_id": "49"
  },
  {
      "id": "67733",
      "name": "5 EV",
      "brand_id": "49"
  },
  {
      "id": "35111",
      "name": "550",
      "brand_id": "49"
  },
  {
      "id": "38066",
      "name": "6",
      "brand_id": "49"
  },
  {
      "id": "39392",
      "name": "6 5D",
      "brand_id": "49"
  },
  {
      "id": "63905",
      "name": "7",
      "brand_id": "49"
  },
  {
      "id": "42900",
      "name": "750",
      "brand_id": "49"
  },
  {
      "id": "67716",
      "name": "A",
      "brand_id": "49"
  },
  {
      "id": "67717",
      "name": "Astor",
      "brand_id": "49"
  },
  {
      "id": "67718",
      "name": "B",
      "brand_id": "49"
  },
  {
      "id": "67719",
      "name": "C",
      "brand_id": "49"
  },
  {
      "id": "67720",
      "name": "Cyberster",
      "brand_id": "49"
  },
  {
      "id": "67721",
      "name": "Express",
      "brand_id": "49"
  },
  {
      "id": "67722",
      "name": "Extender",
      "brand_id": "49"
  },
  {
      "id": "35607",
      "name": "F",
      "brand_id": "49"
  },
  {
      "id": "67723",
      "name": "Gloster",
      "brand_id": "49"
  },
  {
      "id": "67724",
      "name": "GS",
      "brand_id": "49"
  },
  {
      "id": "67725",
      "name": "GT",
      "brand_id": "49"
  },
  {
      "id": "67726",
      "name": "Hector",
      "brand_id": "49"
  },
  {
      "id": "63091",
      "name": "HS",
      "brand_id": "49"
  },
  {
      "id": "48048",
      "name": "Maestro",
      "brand_id": "49"
  },
  {
      "id": "67727",
      "name": "Magnette",
      "brand_id": "49"
  },
  {
      "id": "63092",
      "name": "Marvel R",
      "brand_id": "49"
  },
  {
      "id": "67728",
      "name": "Metro",
      "brand_id": "49"
  },
  {
      "id": "54076",
      "name": "MGB",
      "brand_id": "49"
  },
  {
      "id": "40908",
      "name": "Montego",
      "brand_id": "49"
  },
  {
      "id": "64820",
      "name": "Mulan",
      "brand_id": "49"
  },
  {
      "id": "67279",
      "name": "One",
      "brand_id": "49"
  },
  {
      "id": "67729",
      "name": "Pilot",
      "brand_id": "49"
  },
  {
      "id": "67730",
      "name": "RV8",
      "brand_id": "49"
  },
  {
      "id": "67731",
      "name": "RX5",
      "brand_id": "49"
  },
  {
      "id": "67732",
      "name": "RX8",
      "brand_id": "49"
  },
  {
      "id": "65528",
      "name": "T60",
      "brand_id": "49"
  },
  {
      "id": "34786",
      "name": "TF",
      "brand_id": "49"
  },
  {
      "id": "42646",
      "name": "ZR",
      "brand_id": "49"
  },
  {
      "id": "47320",
      "name": "ZS",
      "brand_id": "49"
  },
  {
      "id": "63090",
      "name": "ZS EV",
      "brand_id": "49"
  },
  {
      "id": "35422",
      "name": "ZT",
      "brand_id": "49"
  },
  {
      "id": "67735",
      "name": "ZT-T",
      "brand_id": "49"
  },
  {
      "id": "67766",
      "name": "Aceman",
      "brand_id": "147"
  },
  {
      "id": "32478",
      "name": "Classic",
      "brand_id": "147"
  },
  {
      "id": "3591",
      "name": "Clubman",
      "brand_id": "147"
  },
  {
      "id": "65929",
      "name": "Clubvan",
      "brand_id": "147"
  },
  {
      "id": "3590",
      "name": "Convertible",
      "brand_id": "147"
  },
  {
      "id": "40154",
      "name": "Countryman",
      "brand_id": "147"
  },
  {
      "id": "41897",
      "name": "Coupe",
      "brand_id": "147"
  },
  {
      "id": "65948",
      "name": "Electric",
      "brand_id": "147"
  },
  {
      "id": "51046",
      "name": "Hatch",
      "brand_id": "147"
  },
  {
      "id": "40386",
      "name": "Paceman",
      "brand_id": "147"
  },
  {
      "id": "41900",
      "name": "Roadster",
      "brand_id": "147"
  },
  {
      "id": "448",
      "name": "3000 GT",
      "brand_id": "52"
  },
  {
      "id": "49091",
      "name": "Airtrek",
      "brand_id": "52"
  },
  {
      "id": "1464",
      "name": "Aspire",
      "brand_id": "52"
  },
  {
      "id": "30805",
      "name": "ASX",
      "brand_id": "52"
  },
  {
      "id": "47401",
      "name": "Attrage",
      "brand_id": "52"
  },
  {
      "id": "63738",
      "name": "Bravo",
      "brand_id": "52"
  },
  {
      "id": "449",
      "name": "Carisma",
      "brand_id": "52"
  },
  {
      "id": "450",
      "name": "Celeste",
      "brand_id": "52"
  },
  {
      "id": "451",
      "name": "Challenger",
      "brand_id": "52"
  },
  {
      "id": "1465",
      "name": "Chariot",
      "brand_id": "52"
  },
  {
      "id": "452",
      "name": "Colt",
      "brand_id": "52"
  },
  {
      "id": "454",
      "name": "Cordia",
      "brand_id": "52"
  },
  {
      "id": "1467",
      "name": "Debonair",
      "brand_id": "52"
  },
  {
      "id": "28478",
      "name": "Delica",
      "brand_id": "52"
  },
  {
      "id": "65807",
      "name": "Destinator",
      "brand_id": "52"
  },
  {
      "id": "1468",
      "name": "Diamante",
      "brand_id": "52"
  },
  {
      "id": "63736",
      "name": "Dignity",
      "brand_id": "52"
  },
  {
      "id": "1469",
      "name": "Dingo",
      "brand_id": "52"
  },
  {
      "id": "1470",
      "name": "Dion",
      "brand_id": "52"
  },
  {
      "id": "1471",
      "name": "Eclipse",
      "brand_id": "52"
  },
  {
      "id": "53277",
      "name": "Eclipse Cross",
      "brand_id": "52"
  },
  {
      "id": "63746",
      "name": "eK",
      "brand_id": "52"
  },
  {
      "id": "63750",
      "name": "eK X EV",
      "brand_id": "52"
  },
  {
      "id": "1473",
      "name": "Emeraude",
      "brand_id": "52"
  },
  {
      "id": "1474",
      "name": "Endeavor",
      "brand_id": "52"
  },
  {
      "id": "2162",
      "name": "Eterna",
      "brand_id": "52"
  },
  {
      "id": "63737",
      "name": "Forte",
      "brand_id": "52"
  },
  {
      "id": "455",
      "name": "FTO",
      "brand_id": "52"
  },
  {
      "id": "456",
      "name": "Galant",
      "brand_id": "52"
  },
  {
      "id": "63739",
      "name": "Galant Fortis",
      "brand_id": "52"
  },
  {
      "id": "45200",
      "name": "Galloper",
      "brand_id": "52"
  },
  {
      "id": "1475",
      "name": "Grandis",
      "brand_id": "52"
  },
  {
      "id": "1476",
      "name": "GTO",
      "brand_id": "52"
  },
  {
      "id": "63742",
      "name": "i",
      "brand_id": "52"
  },
  {
      "id": "39236",
      "name": "i-MiEV",
      "brand_id": "52"
  },
  {
      "id": "1477",
      "name": "Jeep",
      "brand_id": "52"
  },
  {
      "id": "63740",
      "name": "L 100",
      "brand_id": "52"
  },
  {
      "id": "1478",
      "name": "L 200",
      "brand_id": "52"
  },
  {
      "id": "63752",
      "name": "L 300",
      "brand_id": "52"
  },
  {
      "id": "60534",
      "name": "L 400",
      "brand_id": "52"
  },
  {
      "id": "457",
      "name": "Lancer",
      "brand_id": "52"
  },
  {
      "id": "2669",
      "name": "Lancer Evolution",
      "brand_id": "52"
  },
  {
      "id": "1481",
      "name": "Legnum",
      "brand_id": "52"
  },
  {
      "id": "1482",
      "name": "Libero",
      "brand_id": "52"
  },
  {
      "id": "32791",
      "name": "Magna",
      "brand_id": "52"
  },
  {
      "id": "1483",
      "name": "Minica",
      "brand_id": "52"
  },
  {
      "id": "48211",
      "name": "Minicab",
      "brand_id": "52"
  },
  {
      "id": "1484",
      "name": "Mirage",
      "brand_id": "52"
  },
  {
      "id": "1703",
      "name": "Montero",
      "brand_id": "52"
  },
  {
      "id": "63744",
      "name": "Montero Sport",
      "brand_id": "52"
  },
  {
      "id": "2611",
      "name": "Nativa",
      "brand_id": "52"
  },
  {
      "id": "63743",
      "name": "Nimbus",
      "brand_id": "52"
  },
  {
      "id": "1485",
      "name": "Outlander",
      "brand_id": "52"
  },
  {
      "id": "60035",
      "name": "Outlander Sport",
      "brand_id": "52"
  },
  {
      "id": "2684",
      "name": "Outlander XL",
      "brand_id": "52"
  },
  {
      "id": "1486",
      "name": "Pajero",
      "brand_id": "52"
  },
  {
      "id": "63755",
      "name": "Pajero Evolution",
      "brand_id": "52"
  },
  {
      "id": "63756",
      "name": "Pajero iO",
      "brand_id": "52"
  },
  {
      "id": "63757",
      "name": "Pajero Junior",
      "brand_id": "52"
  },
  {
      "id": "63758",
      "name": "Pajero Mini",
      "brand_id": "52"
  },
  {
      "id": "43828",
      "name": "Pajero Pinin",
      "brand_id": "52"
  },
  {
      "id": "2685",
      "name": "Pajero Sport",
      "brand_id": "52"
  },
  {
      "id": "2686",
      "name": "Pajero Wagon",
      "brand_id": "52"
  },
  {
      "id": "1487",
      "name": "Pistachio",
      "brand_id": "52"
  },
  {
      "id": "63751",
      "name": "Precis",
      "brand_id": "52"
  },
  {
      "id": "32166",
      "name": "Proton",
      "brand_id": "52"
  },
  {
      "id": "1488",
      "name": "Proudia",
      "brand_id": "52"
  },
  {
      "id": "30500",
      "name": "Raider",
      "brand_id": "52"
  },
  {
      "id": "1489",
      "name": "RVR",
      "brand_id": "52"
  },
  {
      "id": "1490",
      "name": "Santamo",
      "brand_id": "52"
  },
  {
      "id": "458",
      "name": "Sapporo",
      "brand_id": "52"
  },
  {
      "id": "459",
      "name": "Shogun",
      "brand_id": "52"
  },
  {
      "id": "460",
      "name": "Shogun Pinin",
      "brand_id": "52"
  },
  {
      "id": "461",
      "name": "Shogun Sport",
      "brand_id": "52"
  },
  {
      "id": "462",
      "name": "Sigma",
      "brand_id": "52"
  },
  {
      "id": "1491",
      "name": "Space Gear",
      "brand_id": "52"
  },
  {
      "id": "463",
      "name": "Space Runner",
      "brand_id": "52"
  },
  {
      "id": "464",
      "name": "Space Star",
      "brand_id": "52"
  },
  {
      "id": "465",
      "name": "Space Wagon",
      "brand_id": "52"
  },
  {
      "id": "466",
      "name": "Starion",
      "brand_id": "52"
  },
  {
      "id": "1492",
      "name": "Toppo",
      "brand_id": "52"
  },
  {
      "id": "1493",
      "name": "Town Box",
      "brand_id": "52"
  },
  {
      "id": "467",
      "name": "Tredia",
      "brand_id": "52"
  },
  {
      "id": "63760",
      "name": "Triton",
      "brand_id": "52"
  },
  {
      "id": "63759",
      "name": "Varica",
      "brand_id": "52"
  },
  {
      "id": "63753",
      "name": "Verada",
      "brand_id": "52"
  },
  {
      "id": "30293",
      "name": "Virage",
      "brand_id": "52"
  },
  {
      "id": "63754",
      "name": "Xpander",
      "brand_id": "52"
  },
  {
      "id": "35961",
      "name": "100NS",
      "brand_id": "55"
  },
  {
      "id": "474",
      "name": "100NX",
      "brand_id": "55"
  },
  {
      "id": "480",
      "name": "180SX",
      "brand_id": "55"
  },
  {
      "id": "1494",
      "name": "200SX",
      "brand_id": "55"
  },
  {
      "id": "31528",
      "name": "240SX",
      "brand_id": "55"
  },
  {
      "id": "29432",
      "name": "300ZX",
      "brand_id": "55"
  },
  {
      "id": "486",
      "name": "350Z",
      "brand_id": "55"
  },
  {
      "id": "24931",
      "name": "370Z",
      "brand_id": "55"
  },
  {
      "id": "30789",
      "name": "70",
      "brand_id": "55"
  },
  {
      "id": "475",
      "name": "AD",
      "brand_id": "55"
  },
  {
      "id": "487",
      "name": "Almera",
      "brand_id": "55"
  },
  {
      "id": "3104",
      "name": "Almera Classic",
      "brand_id": "55"
  },
  {
      "id": "488",
      "name": "Almera Tino",
      "brand_id": "55"
  },
  {
      "id": "1495",
      "name": "Altima",
      "brand_id": "55"
  },
  {
      "id": "63762",
      "name": "Altra EV",
      "brand_id": "55"
  },
  {
      "id": "63763",
      "name": "Aprio",
      "brand_id": "55"
  },
  {
      "id": "63425",
      "name": "Ariya",
      "brand_id": "55"
  },
  {
      "id": "2481",
      "name": "Armada",
      "brand_id": "55"
  },
  {
      "id": "33636",
      "name": "Auster",
      "brand_id": "55"
  },
  {
      "id": "2868",
      "name": "Avenir",
      "brand_id": "55"
  },
  {
      "id": "477",
      "name": "Axxess",
      "brand_id": "55"
  },
  {
      "id": "31812",
      "name": "Bassara",
      "brand_id": "55"
  },
  {
      "id": "63784",
      "name": "Be-1",
      "brand_id": "55"
  },
  {
      "id": "489",
      "name": "Bluebird",
      "brand_id": "55"
  },
  {
      "id": "63783",
      "name": "Bluebird Sylphy",
      "brand_id": "55"
  },
  {
      "id": "63789",
      "name": "Caball",
      "brand_id": "55"
  },
  {
      "id": "47955",
      "name": "Caravan",
      "brand_id": "55"
  },
  {
      "id": "2928",
      "name": "Cedric",
      "brand_id": "55"
  },
  {
      "id": "2320",
      "name": "Cefiro",
      "brand_id": "55"
  },
  {
      "id": "490",
      "name": "Cherry",
      "brand_id": "55"
  },
  {
      "id": "2329",
      "name": "Cima",
      "brand_id": "55"
  },
  {
      "id": "37464",
      "name": "Clipper",
      "brand_id": "55"
  },
  {
      "id": "63822",
      "name": "Crew",
      "brand_id": "55"
  },
  {
      "id": "41512",
      "name": "Cube",
      "brand_id": "55"
  },
  {
      "id": "63786",
      "name": "Dayz",
      "brand_id": "55"
  },
  {
      "id": "63787",
      "name": "Dayz Roox",
      "brand_id": "55"
  },
  {
      "id": "63791",
      "name": "Dualis",
      "brand_id": "55"
  },
  {
      "id": "45255",
      "name": "e-NV200",
      "brand_id": "55"
  },
  {
      "id": "3150",
      "name": "Elgrand",
      "brand_id": "55"
  },
  {
      "id": "479",
      "name": "Exa",
      "brand_id": "55"
  },
  {
      "id": "63785",
      "name": "Expert",
      "brand_id": "55"
  },
  {
      "id": "42682",
      "name": "Fairlady Z",
      "brand_id": "55"
  },
  {
      "id": "63790",
      "name": "Figaro",
      "brand_id": "55"
  },
  {
      "id": "2612",
      "name": "Frontier",
      "brand_id": "55"
  },
  {
      "id": "46893",
      "name": "Fuga",
      "brand_id": "55"
  },
  {
      "id": "34847",
      "name": "Gazelle",
      "brand_id": "55"
  },
  {
      "id": "2985",
      "name": "Gloria",
      "brand_id": "55"
  },
  {
      "id": "2651",
      "name": "GT-R",
      "brand_id": "55"
  },
  {
      "id": "63794",
      "name": "Hardbody",
      "brand_id": "55"
  },
  {
      "id": "37032",
      "name": "Homy",
      "brand_id": "55"
  },
  {
      "id": "63788",
      "name": "Hypermini",
      "brand_id": "55"
  },
  {
      "id": "24932",
      "name": "Juke",
      "brand_id": "55"
  },
  {
      "id": "63793",
      "name": "Junior",
      "brand_id": "55"
  },
  {
      "id": "54621",
      "name": "Kicks",
      "brand_id": "55"
  },
  {
      "id": "31502",
      "name": "King Cab",
      "brand_id": "55"
  },
  {
      "id": "63795",
      "name": "Kix",
      "brand_id": "55"
  },
  {
      "id": "2691",
      "name": "Kubistar",
      "brand_id": "55"
  },
  {
      "id": "63797",
      "name": "Lafesta",
      "brand_id": "55"
  },
  {
      "id": "3365",
      "name": "Langley",
      "brand_id": "55"
  },
  {
      "id": "63796",
      "name": "Lannia",
      "brand_id": "55"
  },
  {
      "id": "36420",
      "name": "Largo",
      "brand_id": "55"
  },
  {
      "id": "63799",
      "name": "Latio",
      "brand_id": "55"
  },
  {
      "id": "491",
      "name": "Laurel",
      "brand_id": "55"
  },
  {
      "id": "63798",
      "name": "Laurel Spirit",
      "brand_id": "55"
  },
  {
      "id": "36565",
      "name": "Leaf",
      "brand_id": "55"
  },
  {
      "id": "3447",
      "name": "Leopard",
      "brand_id": "55"
  },
  {
      "id": "18496",
      "name": "Liberta Villa",
      "brand_id": "55"
  },
  {
      "id": "48212",
      "name": "Liberty",
      "brand_id": "55"
  },
  {
      "id": "63807",
      "name": "Livina",
      "brand_id": "55"
  },
  {
      "id": "63808",
      "name": "Lucino",
      "brand_id": "55"
  },
  {
      "id": "63809",
      "name": "Magnite",
      "brand_id": "55"
  },
  {
      "id": "35059",
      "name": "March",
      "brand_id": "55"
  },
  {
      "id": "492",
      "name": "Maxima",
      "brand_id": "55"
  },
  {
      "id": "494",
      "name": "Micra",
      "brand_id": "55"
  },
  {
      "id": "2671",
      "name": "Mistral",
      "brand_id": "55"
  },
  {
      "id": "63802",
      "name": "Moco",
      "brand_id": "55"
  },
  {
      "id": "1730",
      "name": "Murano",
      "brand_id": "55"
  },
  {
      "id": "2472",
      "name": "Navara",
      "brand_id": "55"
  },
  {
      "id": "1975",
      "name": "Note",
      "brand_id": "55"
  },
  {
      "id": "63801",
      "name": "NP200",
      "brand_id": "55"
  },
  {
      "id": "2798",
      "name": "NP300",
      "brand_id": "55"
  },
  {
      "id": "62946",
      "name": "NV1500",
      "brand_id": "55"
  },
  {
      "id": "54339",
      "name": "NV200",
      "brand_id": "55"
  },
  {
      "id": "63803",
      "name": "NV250",
      "brand_id": "55"
  },
  {
      "id": "54340",
      "name": "NV300",
      "brand_id": "55"
  },
  {
      "id": "63810",
      "name": "NV350",
      "brand_id": "55"
  },
  {
      "id": "63804",
      "name": "NX",
      "brand_id": "55"
  },
  {
      "id": "63805",
      "name": "Otti",
      "brand_id": "55"
  },
  {
      "id": "3372",
      "name": "Paladin",
      "brand_id": "55"
  },
  {
      "id": "63806",
      "name": "Pao",
      "brand_id": "55"
  },
  {
      "id": "1835",
      "name": "Pathfinder",
      "brand_id": "55"
  },
  {
      "id": "495",
      "name": "Patrol",
      "brand_id": "55"
  },
  {
      "id": "30337",
      "name": "Pickup",
      "brand_id": "55"
  },
  {
      "id": "63812",
      "name": "Pino",
      "brand_id": "55"
  },
  {
      "id": "31596",
      "name": "Pintara",
      "brand_id": "55"
  },
  {
      "id": "33504",
      "name": "Pixo",
      "brand_id": "55"
  },
  {
      "id": "63811",
      "name": "Platina",
      "brand_id": "55"
  },
  {
      "id": "497",
      "name": "Prairie",
      "brand_id": "55"
  },
  {
      "id": "38092",
      "name": "Presage",
      "brand_id": "55"
  },
  {
      "id": "3366",
      "name": "Presea",
      "brand_id": "55"
  },
  {
      "id": "63813",
      "name": "President",
      "brand_id": "55"
  },
  {
      "id": "59690",
      "name": "Primastar",
      "brand_id": "55"
  },
  {
      "id": "498",
      "name": "Primera",
      "brand_id": "55"
  },
  {
      "id": "2954",
      "name": "Pulsar",
      "brand_id": "55"
  },
  {
      "id": "2197",
      "name": "Qashqai",
      "brand_id": "55"
  },
  {
      "id": "63407",
      "name": "Qashqai e-Power",
      "brand_id": "55"
  },
  {
      "id": "2774",
      "name": "Qashqai+2",
      "brand_id": "55"
  },
  {
      "id": "3266",
      "name": "Quest",
      "brand_id": "55"
  },
  {
      "id": "3722",
      "name": "R'nessa",
      "brand_id": "55"
  },
  {
      "id": "63829",
      "name": "Rasheen",
      "brand_id": "55"
  },
  {
      "id": "2228",
      "name": "Rogue",
      "brand_id": "55"
  },
  {
      "id": "60521",
      "name": "Rogue Sport",
      "brand_id": "55"
  },
  {
      "id": "63814",
      "name": "Roox",
      "brand_id": "55"
  },
  {
      "id": "50271",
      "name": "S-Cargo",
      "brand_id": "55"
  },
  {
      "id": "63815",
      "name": "Sabre",
      "brand_id": "55"
  },
  {
      "id": "50733",
      "name": "Safari",
      "brand_id": "55"
  },
  {
      "id": "63816",
      "name": "Sakura",
      "brand_id": "55"
  },
  {
      "id": "2689",
      "name": "Sentra",
      "brand_id": "55"
  },
  {
      "id": "3139",
      "name": "Serena",
      "brand_id": "55"
  },
  {
      "id": "501",
      "name": "Silvia",
      "brand_id": "55"
  },
  {
      "id": "502",
      "name": "Skyline",
      "brand_id": "55"
  },
  {
      "id": "63821",
      "name": "Skyline Crossover",
      "brand_id": "55"
  },
  {
      "id": "33480",
      "name": "Stagea",
      "brand_id": "55"
  },
  {
      "id": "503",
      "name": "Stanza",
      "brand_id": "55"
  },
  {
      "id": "504",
      "name": "Sunny",
      "brand_id": "55"
  },
  {
      "id": "3105",
      "name": "Sylphy",
      "brand_id": "55"
  },
  {
      "id": "2034",
      "name": "Teana",
      "brand_id": "55"
  },
  {
      "id": "56868",
      "name": "Terra",
      "brand_id": "55"
  },
  {
      "id": "505",
      "name": "Terrano",
      "brand_id": "55"
  },
  {
      "id": "506",
      "name": "Terrano II",
      "brand_id": "55"
  },
  {
      "id": "2775",
      "name": "TIIDA",
      "brand_id": "55"
  },
  {
      "id": "65711",
      "name": "Tiida Latio",
      "brand_id": "55"
  },
  {
      "id": "2937",
      "name": "Titan",
      "brand_id": "55"
  },
  {
      "id": "63823",
      "name": "Townstar Combi",
      "brand_id": "55"
  },
  {
      "id": "2361",
      "name": "Trade",
      "brand_id": "55"
  },
  {
      "id": "63825",
      "name": "Truck",
      "brand_id": "55"
  },
  {
      "id": "63826",
      "name": "Tsuru",
      "brand_id": "55"
  },
  {
      "id": "2662",
      "name": "Urvan",
      "brand_id": "55"
  },
  {
      "id": "63827",
      "name": "V-Drive",
      "brand_id": "55"
  },
  {
      "id": "56205",
      "name": "Vanette",
      "brand_id": "55"
  },
  {
      "id": "2979",
      "name": "Versa",
      "brand_id": "55"
  },
  {
      "id": "63828",
      "name": "Versa Note",
      "brand_id": "55"
  },
  {
      "id": "476",
      "name": "Violet",
      "brand_id": "55"
  },
  {
      "id": "40042",
      "name": "Wingroad",
      "brand_id": "55"
  },
  {
      "id": "507",
      "name": "X-Trail",
      "brand_id": "55"
  },
  {
      "id": "65129",
      "name": "X-Trail e-Power",
      "brand_id": "55"
  },
  {
      "id": "1836",
      "name": "Xterra",
      "brand_id": "55"
  },
  {
      "id": "63833",
      "name": "Z",
      "brand_id": "55"
  },
  {
      "id": "65131",
      "name": "1200",
      "brand_id": "56"
  },
  {
      "id": "63831",
      "name": "1500",
      "brand_id": "56"
  },
  {
      "id": "63832",
      "name": "1900",
      "brand_id": "56"
  },
  {
      "id": "42987",
      "name": "Adam",
      "brand_id": "56"
  },
  {
      "id": "1504",
      "name": "Admiral",
      "brand_id": "56"
  },
  {
      "id": "1505",
      "name": "Agila",
      "brand_id": "56"
  },
  {
      "id": "45379",
      "name": "Ampera",
      "brand_id": "56"
  },
  {
      "id": "56793",
      "name": "Ampera-e",
      "brand_id": "56"
  },
  {
      "id": "3798",
      "name": "Antara",
      "brand_id": "56"
  },
  {
      "id": "1506",
      "name": "Arena",
      "brand_id": "56"
  },
  {
      "id": "1507",
      "name": "Ascona",
      "brand_id": "56"
  },
  {
      "id": "1508",
      "name": "Astra",
      "brand_id": "56"
  },
  {
      "id": "54435",
      "name": "Astra GTC",
      "brand_id": "56"
  },
  {
      "id": "3750",
      "name": "Bedford",
      "brand_id": "56"
  },
  {
      "id": "63839",
      "name": "Blazer",
      "brand_id": "56"
  },
  {
      "id": "1509",
      "name": "Calibra",
      "brand_id": "56"
  },
  {
      "id": "1510",
      "name": "Campo",
      "brand_id": "56"
  },
  {
      "id": "42059",
      "name": "Cascada",
      "brand_id": "56"
  },
  {
      "id": "59894",
      "name": "Combo",
      "brand_id": "56"
  },
  {
      "id": "61540",
      "name": "Combo Cargo",
      "brand_id": "56"
  },
  {
      "id": "61471",
      "name": "Combo Life",
      "brand_id": "56"
  },
  {
      "id": "65060",
      "name": "Combo Electric",
      "brand_id": "56"
  },
  {
      "id": "67978",
      "name": "Combo-e",
      "brand_id": "56"
  },
  {
      "id": "508",
      "name": "Commodore",
      "brand_id": "56"
  },
  {
      "id": "1512",
      "name": "Corsa",
      "brand_id": "56"
  },
  {
      "id": "65412",
      "name": "Corsa Electric",
      "brand_id": "56"
  },
  {
      "id": "46356",
      "name": "Corsa OPC",
      "brand_id": "56"
  },
  {
      "id": "2999",
      "name": "Corsa-e",
      "brand_id": "56"
  },
  {
      "id": "62045",
      "name": "Crossland",
      "brand_id": "56"
  },
  {
      "id": "52365",
      "name": "Crossland X",
      "brand_id": "56"
  },
  {
      "id": "1513",
      "name": "Diplomat",
      "brand_id": "56"
  },
  {
      "id": "1514",
      "name": "Frontera",
      "brand_id": "56"
  },
  {
      "id": "63163",
      "name": "Grandland",
      "brand_id": "56"
  },
  {
      "id": "52366",
      "name": "Grandland X",
      "brand_id": "56"
  },
  {
      "id": "41521",
      "name": "GT",
      "brand_id": "56"
  },
  {
      "id": "3121",
      "name": "Insignia",
      "brand_id": "56"
  },
  {
      "id": "43422",
      "name": "Insignia Country Tourer",
      "brand_id": "56"
  },
  {
      "id": "509",
      "name": "Kadett",
      "brand_id": "56"
  },
  {
      "id": "3599",
      "name": "Kapitan",
      "brand_id": "56"
  },
  {
      "id": "54964",
      "name": "Karl",
      "brand_id": "56"
  },
  {
      "id": "63838",
      "name": "Karl Rocks",
      "brand_id": "56"
  },
  {
      "id": "510",
      "name": "Manta",
      "brand_id": "56"
  },
  {
      "id": "1515",
      "name": "Meriva",
      "brand_id": "56"
  },
  {
      "id": "42885",
      "name": "Mokka",
      "brand_id": "56"
  },
  {
      "id": "63263",
      "name": "Mokka-e",
      "brand_id": "56"
  },
  {
      "id": "1516",
      "name": "Monterey",
      "brand_id": "56"
  },
  {
      "id": "511",
      "name": "Monza",
      "brand_id": "56"
  },
  {
      "id": "65070",
      "name": "Movano-e",
      "brand_id": "56"
  },
  {
      "id": "3454",
      "name": "Olympia",
      "brand_id": "56"
  },
  {
      "id": "1518",
      "name": "Omega",
      "brand_id": "56"
  },
  {
      "id": "28394",
      "name": "P4",
      "brand_id": "56"
  },
  {
      "id": "52257",
      "name": "Ranger",
      "brand_id": "56"
  },
  {
      "id": "512",
      "name": "Rekord",
      "brand_id": "56"
  },
  {
      "id": "63836",
      "name": "Rocks-e",
      "brand_id": "56"
  },
  {
      "id": "513",
      "name": "Senator",
      "brand_id": "56"
  },
  {
      "id": "1519",
      "name": "Signum",
      "brand_id": "56"
  },
  {
      "id": "1520",
      "name": "Sintra",
      "brand_id": "56"
  },
  {
      "id": "1521",
      "name": "Speedster",
      "brand_id": "56"
  },
  {
      "id": "28395",
      "name": "Super 6",
      "brand_id": "56"
  },
  {
      "id": "1522",
      "name": "Tigra",
      "brand_id": "56"
  },
  {
      "id": "1523",
      "name": "Vectra",
      "brand_id": "56"
  },
  {
      "id": "63837",
      "name": "Vita",
      "brand_id": "56"
  },
  {
      "id": "59772",
      "name": "Vivaro",
      "brand_id": "56"
  },
  {
      "id": "63834",
      "name": "Vivaro-e",
      "brand_id": "56"
  },
  {
      "id": "1524",
      "name": "Zafira",
      "brand_id": "56"
  },
  {
      "id": "3000",
      "name": "Zafira Life",
      "brand_id": "56"
  },
  {
      "id": "39329",
      "name": "Zafira Tourer",
      "brand_id": "56"
  },
  {
      "id": "63835",
      "name": "Zafira-e Life",
      "brand_id": "56"
  },
  {
      "id": "37443",
      "name": "1007",
      "brand_id": "58"
  },
  {
      "id": "517",
      "name": "104",
      "brand_id": "58"
  },
  {
      "id": "518",
      "name": "106",
      "brand_id": "58"
  },
  {
      "id": "2110",
      "name": "107",
      "brand_id": "58"
  },
  {
      "id": "47614",
      "name": "108",
      "brand_id": "58"
  },
  {
      "id": "43047",
      "name": "2008",
      "brand_id": "58"
  },
  {
      "id": "64518",
      "name": "202",
      "brand_id": "58"
  },
  {
      "id": "38058",
      "name": "203",
      "brand_id": "58"
  },
  {
      "id": "1525",
      "name": "204",
      "brand_id": "58"
  },
  {
      "id": "519",
      "name": "205",
      "brand_id": "58"
  },
  {
      "id": "520",
      "name": "206",
      "brand_id": "58"
  },
  {
      "id": "2108",
      "name": "207",
      "brand_id": "58"
  },
  {
      "id": "40486",
      "name": "208",
      "brand_id": "58"
  },
  {
      "id": "32556",
      "name": "3008",
      "brand_id": "58"
  },
  {
      "id": "40472",
      "name": "301",
      "brand_id": "58"
  },
  {
      "id": "522",
      "name": "304",
      "brand_id": "58"
  },
  {
      "id": "523",
      "name": "305",
      "brand_id": "58"
  },
  {
      "id": "524",
      "name": "306",
      "brand_id": "58"
  },
  {
      "id": "526",
      "name": "307",
      "brand_id": "58"
  },
  {
      "id": "2109",
      "name": "308",
      "brand_id": "58"
  },
  {
      "id": "528",
      "name": "309",
      "brand_id": "58"
  },
  {
      "id": "2658",
      "name": "4007",
      "brand_id": "58"
  },
  {
      "id": "37764",
      "name": "4008",
      "brand_id": "58"
  },
  {
      "id": "39469",
      "name": "403",
      "brand_id": "58"
  },
  {
      "id": "1911",
      "name": "404",
      "brand_id": "58"
  },
  {
      "id": "529",
      "name": "405",
      "brand_id": "58"
  },
  {
      "id": "530",
      "name": "406",
      "brand_id": "58"
  },
  {
      "id": "1526",
      "name": "407",
      "brand_id": "58"
  },
  {
      "id": "39506",
      "name": "408",
      "brand_id": "58"
  },
  {
      "id": "37765",
      "name": "5008",
      "brand_id": "58"
  },
  {
      "id": "531",
      "name": "504",
      "brand_id": "58"
  },
  {
      "id": "532",
      "name": "505",
      "brand_id": "58"
  },
  {
      "id": "37293",
      "name": "508",
      "brand_id": "58"
  },
  {
      "id": "43348",
      "name": "508 RXH",
      "brand_id": "58"
  },
  {
      "id": "533",
      "name": "604",
      "brand_id": "58"
  },
  {
      "id": "534",
      "name": "605",
      "brand_id": "58"
  },
  {
      "id": "535",
      "name": "607",
      "brand_id": "58"
  },
  {
      "id": "536",
      "name": "806",
      "brand_id": "58"
  },
  {
      "id": "537",
      "name": "807",
      "brand_id": "58"
  },
  {
      "id": "61202",
      "name": "Bipper",
      "brand_id": "58"
  },
  {
      "id": "63842",
      "name": "D3/D4",
      "brand_id": "58"
  },
  {
      "id": "60346",
      "name": "e-2008",
      "brand_id": "58"
  },
  {
      "id": "60345",
      "name": "e-208",
      "brand_id": "58"
  },
  {
      "id": "67769",
      "name": "e-3008",
      "brand_id": "58"
  },
  {
      "id": "64942",
      "name": "e-308",
      "brand_id": "58"
  },
  {
      "id": "64850",
      "name": "E-Partner",
      "brand_id": "58"
  },
  {
      "id": "63269",
      "name": "e-Rifter",
      "brand_id": "58"
  },
  {
      "id": "64941",
      "name": "e-Traveller",
      "brand_id": "58"
  },
  {
      "id": "59956",
      "name": "Expert",
      "brand_id": "58"
  },
  {
      "id": "63844",
      "name": "Hoggar",
      "brand_id": "58"
  },
  {
      "id": "46661",
      "name": "iOn",
      "brand_id": "58"
  },
  {
      "id": "63870",
      "name": "Landtrek",
      "brand_id": "58"
  },
  {
      "id": "40505",
      "name": "P4",
      "brand_id": "58"
  },
  {
      "id": "1920",
      "name": "Pars",
      "brand_id": "58"
  },
  {
      "id": "63875",
      "name": "Partner",
      "brand_id": "58"
  },
  {
      "id": "63840",
      "name": "Partner Rapid",
      "brand_id": "58"
  },
  {
      "id": "63841",
      "name": "Pick Up",
      "brand_id": "58"
  },
  {
      "id": "40304",
      "name": "Ranch",
      "brand_id": "58"
  },
  {
      "id": "30538",
      "name": "RCZ",
      "brand_id": "58"
  },
  {
      "id": "53749",
      "name": "Rifter",
      "brand_id": "58"
  },
  {
      "id": "63846",
      "name": "Roa",
      "brand_id": "58"
  },
  {
      "id": "50335",
      "name": "Traveller",
      "brand_id": "58"
  },
  {
      "id": "18498",
      "name": "356",
      "brand_id": "59"
  },
  {
      "id": "38129",
      "name": "550",
      "brand_id": "59"
  },
  {
      "id": "65493",
      "name": "718 Boxster",
      "brand_id": "59"
  },
  {
      "id": "65495",
      "name": "718 Cayman",
      "brand_id": "59"
  },
  {
      "id": "65496",
      "name": "718 Spyder",
      "brand_id": "59"
  },
  {
      "id": "539",
      "name": "911",
      "brand_id": "59"
  },
  {
      "id": "65492",
      "name": "912",
      "brand_id": "59"
  },
  {
      "id": "65494",
      "name": "914",
      "brand_id": "59"
  },
  {
      "id": "45996",
      "name": "918 Spyder",
      "brand_id": "59"
  },
  {
      "id": "540",
      "name": "924",
      "brand_id": "59"
  },
  {
      "id": "541",
      "name": "928",
      "brand_id": "59"
  },
  {
      "id": "542",
      "name": "944",
      "brand_id": "59"
  },
  {
      "id": "1541",
      "name": "959",
      "brand_id": "59"
  },
  {
      "id": "543",
      "name": "968",
      "brand_id": "59"
  },
  {
      "id": "544",
      "name": "Boxster",
      "brand_id": "59"
  },
  {
      "id": "1542",
      "name": "Carrera GT",
      "brand_id": "59"
  },
  {
      "id": "546",
      "name": "Cayenne",
      "brand_id": "59"
  },
  {
      "id": "60099",
      "name": "Cayenne Coupe",
      "brand_id": "59"
  },
  {
      "id": "1543",
      "name": "Cayman",
      "brand_id": "59"
  },
  {
      "id": "43158",
      "name": "Macan",
      "brand_id": "59"
  },
  {
      "id": "2968",
      "name": "Panamera",
      "brand_id": "59"
  },
  {
      "id": "60566",
      "name": "Panamera Sport Turismo",
      "brand_id": "59"
  },
  {
      "id": "58244",
      "name": "Taycan",
      "brand_id": "59"
  },
  {
      "id": "63102",
      "name": "Taycan Cross Turismo",
      "brand_id": "59"
  },
  {
      "id": "63234",
      "name": "Taycan Sport Turismo",
      "brand_id": "59"
  },
  {
      "id": "48738",
      "name": "Gentra",
      "brand_id": "4681"
  },
  {
      "id": "48739",
      "name": "Matiz",
      "brand_id": "4681"
  },
  {
      "id": "48737",
      "name": "Nexia R3",
      "brand_id": "4681"
  },
  {
      "id": "48736",
      "name": "R2",
      "brand_id": "4681"
  },
  {
      "id": "50565",
      "name": "R4",
      "brand_id": "4681"
  },
  {
      "id": "63484",
      "name": "10",
      "brand_id": "62"
  },
  {
      "id": "561",
      "name": "11",
      "brand_id": "62"
  },
  {
      "id": "562",
      "name": "12",
      "brand_id": "62"
  },
  {
      "id": "563",
      "name": "14",
      "brand_id": "62"
  },
  {
      "id": "564",
      "name": "15",
      "brand_id": "62"
  },
  {
      "id": "565",
      "name": "16",
      "brand_id": "62"
  },
  {
      "id": "566",
      "name": "17",
      "brand_id": "62"
  },
  {
      "id": "567",
      "name": "18",
      "brand_id": "62"
  },
  {
      "id": "568",
      "name": "19",
      "brand_id": "62"
  },
  {
      "id": "569",
      "name": "20",
      "brand_id": "62"
  },
  {
      "id": "570",
      "name": "21",
      "brand_id": "62"
  },
  {
      "id": "571",
      "name": "25",
      "brand_id": "62"
  },
  {
      "id": "63511",
      "name": "3",
      "brand_id": "62"
  },
  {
      "id": "572",
      "name": "30",
      "brand_id": "62"
  },
  {
      "id": "573",
      "name": "4",
      "brand_id": "62"
  },
  {
      "id": "574",
      "name": "5",
      "brand_id": "62"
  },
  {
      "id": "575",
      "name": "6",
      "brand_id": "62"
  },
  {
      "id": "46565",
      "name": "8",
      "brand_id": "62"
  },
  {
      "id": "576",
      "name": "9",
      "brand_id": "62"
  },
  {
      "id": "63491",
      "name": "Alaskan",
      "brand_id": "62"
  },
  {
      "id": "33778",
      "name": "Alliance",
      "brand_id": "62"
  },
  {
      "id": "61831",
      "name": "Arkana",
      "brand_id": "62"
  },
  {
      "id": "63492",
      "name": "Austral",
      "brand_id": "62"
  },
  {
      "id": "578",
      "name": "Avantime",
      "brand_id": "62"
  },
  {
      "id": "44442",
      "name": "Captur",
      "brand_id": "62"
  },
  {
      "id": "63495",
      "name": "Caravelle",
      "brand_id": "62"
  },
  {
      "id": "46513",
      "name": "City K-ZE",
      "brand_id": "62"
  },
  {
      "id": "579",
      "name": "Clio",
      "brand_id": "62"
  },
  {
      "id": "28942",
      "name": "Clio Symbol",
      "brand_id": "62"
  },
  {
      "id": "63502",
      "name": "Dauphine",
      "brand_id": "62"
  },
  {
      "id": "45357",
      "name": "Dokker",
      "brand_id": "62"
  },
  {
      "id": "63503",
      "name": "Dokker Stepway",
      "brand_id": "62"
  },
  {
      "id": "30503",
      "name": "Duster",
      "brand_id": "62"
  },
  {
      "id": "61468",
      "name": "Duster Oroch",
      "brand_id": "62"
  },
  {
      "id": "63512",
      "name": "Encore",
      "brand_id": "62"
  },
  {
      "id": "580",
      "name": "Espace",
      "brand_id": "62"
  },
  {
      "id": "1552",
      "name": "Estafette",
      "brand_id": "62"
  },
  {
      "id": "63510",
      "name": "Express",
      "brand_id": "62"
  },
  {
      "id": "46358",
      "name": "Floride",
      "brand_id": "62"
  },
  {
      "id": "3898",
      "name": "Fluence",
      "brand_id": "62"
  },
  {
      "id": "63509",
      "name": "Fluence Z.E.",
      "brand_id": "62"
  },
  {
      "id": "581",
      "name": "Fuego",
      "brand_id": "62"
  },
  {
      "id": "582",
      "name": "Grand Espace",
      "brand_id": "62"
  },
  {
      "id": "63508",
      "name": "Grand Kangoo",
      "brand_id": "62"
  },
  {
      "id": "47491",
      "name": "Grand Modus",
      "brand_id": "62"
  },
  {
      "id": "3185",
      "name": "Grand Scenic",
      "brand_id": "62"
  },
  {
      "id": "49115",
      "name": "Kadjar",
      "brand_id": "62"
  },
  {
      "id": "59145",
      "name": "Kangoo",
      "brand_id": "62"
  },
  {
      "id": "63507",
      "name": "Kaptur",
      "brand_id": "62"
  },
  {
      "id": "63506",
      "name": "Kiger",
      "brand_id": "62"
  },
  {
      "id": "2832",
      "name": "Koleos",
      "brand_id": "62"
  },
  {
      "id": "63505",
      "name": "Kwid",
      "brand_id": "62"
  },
  {
      "id": "585",
      "name": "Laguna",
      "brand_id": "62"
  },
  {
      "id": "32930",
      "name": "Latitude",
      "brand_id": "62"
  },
  {
      "id": "63504",
      "name": "Le Car",
      "brand_id": "62"
  },
  {
      "id": "42243",
      "name": "Lodgy",
      "brand_id": "62"
  },
  {
      "id": "1554",
      "name": "Logan",
      "brand_id": "62"
  },
  {
      "id": "3565",
      "name": "Logan MCV",
      "brand_id": "62"
  },
  {
      "id": "68002",
      "name": "Logan MCV Stepway",
      "brand_id": "62"
  },
  {
      "id": "18489",
      "name": "Logan Pick-Up",
      "brand_id": "62"
  },
  {
      "id": "61677",
      "name": "Logan Stepway",
      "brand_id": "62"
  },
  {
      "id": "63501",
      "name": "Lutecia",
      "brand_id": "62"
  },
  {
      "id": "63500",
      "name": "Medallion",
      "brand_id": "62"
  },
  {
      "id": "586",
      "name": "Megane",
      "brand_id": "62"
  },
  {
      "id": "63494",
      "name": "Megane E-Tech Electric",
      "brand_id": "62"
  },
  {
      "id": "56291",
      "name": "Megane Scenic",
      "brand_id": "62"
  },
  {
      "id": "1556",
      "name": "Modus",
      "brand_id": "62"
  },
  {
      "id": "63493",
      "name": "Pulse",
      "brand_id": "62"
  },
  {
      "id": "1557",
      "name": "Rapid",
      "brand_id": "62"
  },
  {
      "id": "1558",
      "name": "Rodeo",
      "brand_id": "62"
  },
  {
      "id": "587",
      "name": "Safrane",
      "brand_id": "62"
  },
  {
      "id": "3566",
      "name": "Sandero",
      "brand_id": "62"
  },
  {
      "id": "35649",
      "name": "Sandero StepWay",
      "brand_id": "62"
  },
  {
      "id": "63490",
      "name": "Scala",
      "brand_id": "62"
  },
  {
      "id": "588",
      "name": "Scenic",
      "brand_id": "62"
  },
  {
      "id": "589",
      "name": "Scenic RX4",
      "brand_id": "62"
  },
  {
      "id": "63489",
      "name": "Scenic XMOD",
      "brand_id": "62"
  },
  {
      "id": "63488",
      "name": "Siete",
      "brand_id": "62"
  },
  {
      "id": "63487",
      "name": "Sport Spider",
      "brand_id": "62"
  },
  {
      "id": "1559",
      "name": "Symbol",
      "brand_id": "62"
  },
  {
      "id": "63486",
      "name": "Taliant",
      "brand_id": "62"
  },
  {
      "id": "50777",
      "name": "Talisman",
      "brand_id": "62"
  },
  {
      "id": "34310",
      "name": "Thalia",
      "brand_id": "62"
  },
  {
      "id": "63485",
      "name": "Torino",
      "brand_id": "62"
  },
  {
      "id": "60014",
      "name": "Trafic",
      "brand_id": "62"
  },
  {
      "id": "63483",
      "name": "Triber",
      "brand_id": "62"
  },
  {
      "id": "1561",
      "name": "Twingo",
      "brand_id": "62"
  },
  {
      "id": "39078",
      "name": "Twizy Z.E.",
      "brand_id": "62"
  },
  {
      "id": "591",
      "name": "Vel Satis",
      "brand_id": "62"
  },
  {
      "id": "577",
      "name": "Viva",
      "brand_id": "62"
  },
  {
      "id": "44533",
      "name": "Wind",
      "brand_id": "62"
  },
  {
      "id": "42148",
      "name": "Zoe",
      "brand_id": "62"
  },
  {
      "id": "40043",
      "name": "124",
      "brand_id": "67"
  },
  {
      "id": "32653",
      "name": "127",
      "brand_id": "67"
  },
  {
      "id": "65593",
      "name": "128",
      "brand_id": "67"
  },
  {
      "id": "40272",
      "name": "131",
      "brand_id": "67"
  },
  {
      "id": "48696",
      "name": "132L",
      "brand_id": "67"
  },
  {
      "id": "1569",
      "name": "133",
      "brand_id": "67"
  },
  {
      "id": "65597",
      "name": "1400",
      "brand_id": "67"
  },
  {
      "id": "65598",
      "name": "1500",
      "brand_id": "67"
  },
  {
      "id": "65599",
      "name": "1800",
      "brand_id": "67"
  },
  {
      "id": "65594",
      "name": "600",
      "brand_id": "67"
  },
  {
      "id": "65595",
      "name": "800",
      "brand_id": "67"
  },
  {
      "id": "65596",
      "name": "850",
      "brand_id": "67"
  },
  {
      "id": "630",
      "name": "Alhambra",
      "brand_id": "67"
  },
  {
      "id": "2053",
      "name": "Altea",
      "brand_id": "67"
  },
  {
      "id": "3063",
      "name": "Altea Freetrack",
      "brand_id": "67"
  },
  {
      "id": "46505",
      "name": "Altea XL",
      "brand_id": "67"
  },
  {
      "id": "52247",
      "name": "Arona",
      "brand_id": "67"
  },
  {
      "id": "631",
      "name": "Arosa",
      "brand_id": "67"
  },
  {
      "id": "49222",
      "name": "Ateca",
      "brand_id": "67"
  },
  {
      "id": "632",
      "name": "Cordoba",
      "brand_id": "67"
  },
  {
      "id": "633",
      "name": "Cordoba SX",
      "brand_id": "67"
  },
  {
      "id": "634",
      "name": "Cordoba Vario",
      "brand_id": "67"
  },
  {
      "id": "61212",
      "name": "el-Born",
      "brand_id": "67"
  },
  {
      "id": "34521",
      "name": "Exeo",
      "brand_id": "67"
  },
  {
      "id": "34536",
      "name": "Exeo ST",
      "brand_id": "67"
  },
  {
      "id": "1570",
      "name": "Fura",
      "brand_id": "67"
  },
  {
      "id": "635",
      "name": "Ibiza",
      "brand_id": "67"
  },
  {
      "id": "34537",
      "name": "Ibiza ST",
      "brand_id": "67"
  },
  {
      "id": "1571",
      "name": "Inca",
      "brand_id": "67"
  },
  {
      "id": "636",
      "name": "Leon",
      "brand_id": "67"
  },
  {
      "id": "65468",
      "name": "Leon Sportstourer",
      "brand_id": "67"
  },
  {
      "id": "637",
      "name": "Malaga",
      "brand_id": "67"
  },
  {
      "id": "638",
      "name": "Marbella",
      "brand_id": "67"
  },
  {
      "id": "46713",
      "name": "Mii",
      "brand_id": "67"
  },
  {
      "id": "65614",
      "name": "Panda",
      "brand_id": "67"
  },
  {
      "id": "65615",
      "name": "Ritmo",
      "brand_id": "67"
  },
  {
      "id": "1572",
      "name": "Ronda",
      "brand_id": "67"
  },
  {
      "id": "56329",
      "name": "Tarraco",
      "brand_id": "67"
  },
  {
      "id": "639",
      "name": "Terra",
      "brand_id": "67"
  },
  {
      "id": "640",
      "name": "Toledo",
      "brand_id": "67"
  },
  {
      "id": "1573",
      "name": "100",
      "brand_id": "70"
  },
  {
      "id": "49044",
      "name": "1000",
      "brand_id": "70"
  },
  {
      "id": "645",
      "name": "105",
      "brand_id": "70"
  },
  {
      "id": "1574",
      "name": "110",
      "brand_id": "70"
  },
  {
      "id": "63635",
      "name": "1100",
      "brand_id": "70"
  },
  {
      "id": "646",
      "name": "120",
      "brand_id": "70"
  },
  {
      "id": "63636",
      "name": "1200",
      "brand_id": "70"
  },
  {
      "id": "43362",
      "name": "1201",
      "brand_id": "70"
  },
  {
      "id": "34434",
      "name": "1202",
      "brand_id": "70"
  },
  {
      "id": "647",
      "name": "130",
      "brand_id": "70"
  },
  {
      "id": "35596",
      "name": "1500 Taz",
      "brand_id": "70"
  },
  {
      "id": "42137",
      "name": "440",
      "brand_id": "70"
  },
  {
      "id": "63632",
      "name": "450",
      "brand_id": "70"
  },
  {
      "id": "42275",
      "name": "Citigo",
      "brand_id": "70"
  },
  {
      "id": "61730",
      "name": "Enyaq iV",
      "brand_id": "70"
  },
  {
      "id": "649",
      "name": "Fabia",
      "brand_id": "70"
  },
  {
      "id": "62633",
      "name": "Fabia Scout",
      "brand_id": "70"
  },
  {
      "id": "650",
      "name": "Favorit",
      "brand_id": "70"
  },
  {
      "id": "651",
      "name": "Felicia",
      "brand_id": "70"
  },
  {
      "id": "1651",
      "name": "Forman",
      "brand_id": "70"
  },
  {
      "id": "63642",
      "name": "Garde",
      "brand_id": "70"
  },
  {
      "id": "56023",
      "name": "Kamiq",
      "brand_id": "70"
  },
  {
      "id": "63949",
      "name": "Kamiq Scout",
      "brand_id": "70"
  },
  {
      "id": "51759",
      "name": "Karoq",
      "brand_id": "70"
  },
  {
      "id": "63950",
      "name": "Karoq Scout",
      "brand_id": "70"
  },
  {
      "id": "49223",
      "name": "Kodiaq",
      "brand_id": "70"
  },
  {
      "id": "63952",
      "name": "Kodiaq Scout",
      "brand_id": "70"
  },
  {
      "id": "63647",
      "name": "Kushaq",
      "brand_id": "70"
  },
  {
      "id": "63650",
      "name": "Laura",
      "brand_id": "70"
  },
  {
      "id": "652",
      "name": "Octavia",
      "brand_id": "70"
  },
  {
      "id": "3009",
      "name": "Octavia Scout",
      "brand_id": "70"
  },
  {
      "id": "41958",
      "name": "Pickup",
      "brand_id": "70"
  },
  {
      "id": "39557",
      "name": "Popular",
      "brand_id": "70"
  },
  {
      "id": "1575",
      "name": "Rapid",
      "brand_id": "70"
  },
  {
      "id": "2038",
      "name": "Roomster",
      "brand_id": "70"
  },
  {
      "id": "62632",
      "name": "Roomster Scout",
      "brand_id": "70"
  },
  {
      "id": "59874",
      "name": "Scala",
      "brand_id": "70"
  },
  {
      "id": "63637",
      "name": "Slavia",
      "brand_id": "70"
  },
  {
      "id": "43718",
      "name": "Spaceback",
      "brand_id": "70"
  },
  {
      "id": "3167",
      "name": "Superb",
      "brand_id": "70"
  },
  {
      "id": "63961",
      "name": "Superb Scout",
      "brand_id": "70"
  },
  {
      "id": "3721",
      "name": "Yeti",
      "brand_id": "70"
  },
  {
      "id": "63963",
      "name": "Yeti Scout",
      "brand_id": "70"
  },
  {
      "id": "67883",
      "name": "#1",
      "brand_id": "71"
  },
  {
      "id": "67884",
      "name": "#3",
      "brand_id": "71"
  },
  {
      "id": "1577",
      "name": "Crossblade",
      "brand_id": "71"
  },
  {
      "id": "64815",
      "name": "Elf 1",
      "brand_id": "71"
  },
  {
      "id": "64239",
      "name": "EQ Forfour",
      "brand_id": "71"
  },
  {
      "id": "48458",
      "name": "EQ Fortwo",
      "brand_id": "71"
  },
  {
      "id": "28289",
      "name": "Forfour",
      "brand_id": "71"
  },
  {
      "id": "28290",
      "name": "Fortwo",
      "brand_id": "71"
  },
  {
      "id": "1578",
      "name": "Roadster",
      "brand_id": "71"
  },
  {
      "id": "3188",
      "name": "Actyon",
      "brand_id": "73"
  },
  {
      "id": "2019",
      "name": "Actyon Sports",
      "brand_id": "73"
  },
  {
      "id": "1580",
      "name": "Chairman",
      "brand_id": "73"
  },
  {
      "id": "1581",
      "name": "Family",
      "brand_id": "73"
  },
  {
      "id": "67675",
      "name": "Grand Musso",
      "brand_id": "73"
  },
  {
      "id": "1582",
      "name": "Istana",
      "brand_id": "73"
  },
  {
      "id": "1583",
      "name": "Kallista",
      "brand_id": "73"
  },
  {
      "id": "658",
      "name": "Korando",
      "brand_id": "73"
  },
  {
      "id": "65522",
      "name": "Korando Sports",
      "brand_id": "73"
  },
  {
      "id": "64111",
      "name": "Korando Turismo",
      "brand_id": "73"
  },
  {
      "id": "3187",
      "name": "Kyron",
      "brand_id": "73"
  },
  {
      "id": "659",
      "name": "Musso",
      "brand_id": "73"
  },
  {
      "id": "1584",
      "name": "Rexton",
      "brand_id": "73"
  },
  {
      "id": "65878",
      "name": "Rexton Sports",
      "brand_id": "73"
  },
  {
      "id": "2232",
      "name": "Rodius",
      "brand_id": "73"
  },
  {
      "id": "59981",
      "name": "Stavic",
      "brand_id": "73"
  },
  {
      "id": "45627",
      "name": "Tivoli",
      "brand_id": "73"
  },
  {
      "id": "65974",
      "name": "Tivoli Grand",
      "brand_id": "73"
  },
  {
      "id": "65975",
      "name": "Torres",
      "brand_id": "73"
  },
  {
      "id": "52110",
      "name": "XLV",
      "brand_id": "73"
  },
  {
      "id": "65099",
      "name": "1000",
      "brand_id": "75"
  },
  {
      "id": "65100",
      "name": "1500",
      "brand_id": "75"
  },
  {
      "id": "65101",
      "name": "1600",
      "brand_id": "75"
  },
  {
      "id": "662",
      "name": "1800",
      "brand_id": "75"
  },
  {
      "id": "65098",
      "name": "360",
      "brand_id": "75"
  },
  {
      "id": "3741",
      "name": "Alcyone",
      "brand_id": "75"
  },
  {
      "id": "53173",
      "name": "Ascent",
      "brand_id": "75"
  },
  {
      "id": "65119",
      "name": "B9 Tribeca",
      "brand_id": "75"
  },
  {
      "id": "1585",
      "name": "Baja",
      "brand_id": "75"
  },
  {
      "id": "65102",
      "name": "Bighorn",
      "brand_id": "75"
  },
  {
      "id": "1586",
      "name": "Bistro",
      "brand_id": "75"
  },
  {
      "id": "65103",
      "name": "BRAT",
      "brand_id": "75"
  },
  {
      "id": "38347",
      "name": "BRZ",
      "brand_id": "75"
  },
  {
      "id": "65104",
      "name": "Chiffon",
      "brand_id": "75"
  },
  {
      "id": "49487",
      "name": "Crosstrek",
      "brand_id": "75"
  },
  {
      "id": "65105",
      "name": "Dex",
      "brand_id": "75"
  },
  {
      "id": "1587",
      "name": "Domingo",
      "brand_id": "75"
  },
  {
      "id": "65106",
      "name": "Exiga",
      "brand_id": "75"
  },
  {
      "id": "65109",
      "name": "Exiga Crossover 7",
      "brand_id": "75"
  },
  {
      "id": "65107",
      "name": "FF-1",
      "brand_id": "75"
  },
  {
      "id": "65108",
      "name": "Fiori",
      "brand_id": "75"
  },
  {
      "id": "663",
      "name": "Forester",
      "brand_id": "75"
  },
  {
      "id": "664",
      "name": "Impreza",
      "brand_id": "75"
  },
  {
      "id": "65110",
      "name": "Impreza Outback",
      "brand_id": "75"
  },
  {
      "id": "60433",
      "name": "Impreza WRX",
      "brand_id": "75"
  },
  {
      "id": "45344",
      "name": "Impreza WRX STI",
      "brand_id": "75"
  },
  {
      "id": "32185",
      "name": "Impreza XV",
      "brand_id": "75"
  },
  {
      "id": "665",
      "name": "Justy",
      "brand_id": "75"
  },
  {
      "id": "666",
      "name": "Legacy",
      "brand_id": "75"
  },
  {
      "id": "3023",
      "name": "Legacy Outback",
      "brand_id": "75"
  },
  {
      "id": "1588",
      "name": "Leone",
      "brand_id": "75"
  },
  {
      "id": "49534",
      "name": "Levorg",
      "brand_id": "75"
  },
  {
      "id": "1589",
      "name": "Libero",
      "brand_id": "75"
  },
  {
      "id": "65112",
      "name": "Liberty",
      "brand_id": "75"
  },
  {
      "id": "65113",
      "name": "Lucra",
      "brand_id": "75"
  },
  {
      "id": "32439",
      "name": "Mini Jumbo",
      "brand_id": "75"
  },
  {
      "id": "1720",
      "name": "Outback",
      "brand_id": "75"
  },
  {
      "id": "1590",
      "name": "Pleo",
      "brand_id": "75"
  },
  {
      "id": "65114",
      "name": "R1",
      "brand_id": "75"
  },
  {
      "id": "65115",
      "name": "R2",
      "brand_id": "75"
  },
  {
      "id": "35694",
      "name": "Rex",
      "brand_id": "75"
  },
  {
      "id": "46640",
      "name": "Sambar",
      "brand_id": "75"
  },
  {
      "id": "65116",
      "name": "Sherpa",
      "brand_id": "75"
  },
  {
      "id": "65117",
      "name": "Solterra",
      "brand_id": "75"
  },
  {
      "id": "65118",
      "name": "Stella",
      "brand_id": "75"
  },
  {
      "id": "667",
      "name": "SVX",
      "brand_id": "75"
  },
  {
      "id": "1591",
      "name": "Traviq",
      "brand_id": "75"
  },
  {
      "id": "46941",
      "name": "Trezia",
      "brand_id": "75"
  },
  {
      "id": "1847",
      "name": "Tribeca",
      "brand_id": "75"
  },
  {
      "id": "668",
      "name": "Vivio",
      "brand_id": "75"
  },
  {
      "id": "3094",
      "name": "WRX",
      "brand_id": "75"
  },
  {
      "id": "59651",
      "name": "WRX STI",
      "brand_id": "75"
  },
  {
      "id": "1592",
      "name": "XT",
      "brand_id": "75"
  },
  {
      "id": "38372",
      "name": "XV",
      "brand_id": "75"
  },
  {
      "id": "65738",
      "name": "Across",
      "brand_id": "76"
  },
  {
      "id": "1593",
      "name": "Aerio",
      "brand_id": "76"
  },
  {
      "id": "65767",
      "name": "Alivio",
      "brand_id": "76"
  },
  {
      "id": "669",
      "name": "Alto",
      "brand_id": "76"
  },
  {
      "id": "65768",
      "name": "Alto Lapin",
      "brand_id": "76"
  },
  {
      "id": "65769",
      "name": "APV",
      "brand_id": "76"
  },
  {
      "id": "670",
      "name": "Baleno",
      "brand_id": "76"
  },
  {
      "id": "65770",
      "name": "Beidouxing",
      "brand_id": "76"
  },
  {
      "id": "65771",
      "name": "Brezza",
      "brand_id": "76"
  },
  {
      "id": "671",
      "name": "Cappuccino",
      "brand_id": "76"
  },
  {
      "id": "65772",
      "name": "Cara",
      "brand_id": "76"
  },
  {
      "id": "1594",
      "name": "Carry",
      "brand_id": "76"
  },
  {
      "id": "39586",
      "name": "Celerio",
      "brand_id": "76"
  },
  {
      "id": "36348",
      "name": "Cervo",
      "brand_id": "76"
  },
  {
      "id": "65773",
      "name": "Ciaz",
      "brand_id": "76"
  },
  {
      "id": "1595",
      "name": "Cultus",
      "brand_id": "76"
  },
  {
      "id": "65774",
      "name": "CV-1",
      "brand_id": "76"
  },
  {
      "id": "65775",
      "name": "Eeco",
      "brand_id": "76"
  },
  {
      "id": "65776",
      "name": "Equator",
      "brand_id": "76"
  },
  {
      "id": "65777",
      "name": "Ertiga",
      "brand_id": "76"
  },
  {
      "id": "39718",
      "name": "Esteem",
      "brand_id": "76"
  },
  {
      "id": "1597",
      "name": "Every",
      "brand_id": "76"
  },
  {
      "id": "2127",
      "name": "Forenza",
      "brand_id": "76"
  },
  {
      "id": "39646",
      "name": "Fronte",
      "brand_id": "76"
  },
  {
      "id": "65778",
      "name": "Fun",
      "brand_id": "76"
  },
  {
      "id": "672",
      "name": "Grand Vitara",
      "brand_id": "76"
  },
  {
      "id": "60097",
      "name": "Grand Vitara XL7",
      "brand_id": "76"
  },
  {
      "id": "65779",
      "name": "Hustler",
      "brand_id": "76"
  },
  {
      "id": "673",
      "name": "Ignis",
      "brand_id": "76"
  },
  {
      "id": "674",
      "name": "Jimny",
      "brand_id": "76"
  },
  {
      "id": "1598",
      "name": "Kei",
      "brand_id": "76"
  },
  {
      "id": "33779",
      "name": "Kizashi",
      "brand_id": "76"
  },
  {
      "id": "675",
      "name": "Liana",
      "brand_id": "76"
  },
  {
      "id": "27513",
      "name": "LJ 50",
      "brand_id": "76"
  },
  {
      "id": "1599",
      "name": "LJ 80",
      "brand_id": "76"
  },
  {
      "id": "1600",
      "name": "MR Wagon",
      "brand_id": "76"
  },
  {
      "id": "45632",
      "name": "Palette",
      "brand_id": "76"
  },
  {
      "id": "37959",
      "name": "Reno",
      "brand_id": "76"
  },
  {
      "id": "63270",
      "name": "S-Cross",
      "brand_id": "76"
  },
  {
      "id": "65780",
      "name": "S-Presso",
      "brand_id": "76"
  },
  {
      "id": "677",
      "name": "Samurai",
      "brand_id": "76"
  },
  {
      "id": "678",
      "name": "SC100",
      "brand_id": "76"
  },
  {
      "id": "51839",
      "name": "Sidekick",
      "brand_id": "76"
  },
  {
      "id": "679",
      "name": "SJ",
      "brand_id": "76"
  },
  {
      "id": "65781",
      "name": "Solio",
      "brand_id": "76"
  },
  {
      "id": "65782",
      "name": "Spacia",
      "brand_id": "76"
  },
  {
      "id": "32158",
      "name": "Splash",
      "brand_id": "76"
  },
  {
      "id": "65783",
      "name": "Swace",
      "brand_id": "76"
  },
  {
      "id": "681",
      "name": "Swift",
      "brand_id": "76"
  },
  {
      "id": "2035",
      "name": "SX4",
      "brand_id": "76"
  },
  {
      "id": "65784",
      "name": "Twin",
      "brand_id": "76"
  },
  {
      "id": "65785",
      "name": "Verona",
      "brand_id": "76"
  },
  {
      "id": "682",
      "name": "Vitara",
      "brand_id": "76"
  },
  {
      "id": "683",
      "name": "Wagon R",
      "brand_id": "76"
  },
  {
      "id": "684",
      "name": "X-90",
      "brand_id": "76"
  },
  {
      "id": "65786",
      "name": "XBee",
      "brand_id": "76"
  },
  {
      "id": "1677",
      "name": "XL7",
      "brand_id": "76"
  },
  {
      "id": "47858",
      "name": "Model 3",
      "brand_id": "2233"
  },
  {
      "id": "31567",
      "name": "Model S",
      "brand_id": "2233"
  },
  {
      "id": "37711",
      "name": "Model X",
      "brand_id": "2233"
  },
  {
      "id": "60290",
      "name": "Model Y",
      "brand_id": "2233"
  },
  {
      "id": "37710",
      "name": "Roadster",
      "brand_id": "2233"
  },
  {
      "id": "36123",
      "name": "1000",
      "brand_id": "79"
  },
  {
      "id": "63859",
      "name": "1600GT (RT55)",
      "brand_id": "79"
  },
  {
      "id": "63861",
      "name": "2000GT",
      "brand_id": "79"
  },
  {
      "id": "695",
      "name": "4Runner",
      "brand_id": "79"
  },
  {
      "id": "63863",
      "name": "Agya",
      "brand_id": "79"
  },
  {
      "id": "63865",
      "name": "Allex",
      "brand_id": "79"
  },
  {
      "id": "49563",
      "name": "Allion",
      "brand_id": "79"
  },
  {
      "id": "41896",
      "name": "Alphard",
      "brand_id": "79"
  },
  {
      "id": "35108",
      "name": "Altezza",
      "brand_id": "79"
  },
  {
      "id": "57812",
      "name": "Aqua",
      "brand_id": "79"
  },
  {
      "id": "2953",
      "name": "Aristo",
      "brand_id": "79"
  },
  {
      "id": "2738",
      "name": "Aurion",
      "brand_id": "79"
  },
  {
      "id": "2040",
      "name": "Auris",
      "brand_id": "79"
  },
  {
      "id": "1832",
      "name": "Avalon",
      "brand_id": "79"
  },
  {
      "id": "3710",
      "name": "Avanza",
      "brand_id": "79"
  },
  {
      "id": "696",
      "name": "Avensis",
      "brand_id": "79"
  },
  {
      "id": "697",
      "name": "Avensis Verso",
      "brand_id": "79"
  },
  {
      "id": "2011",
      "name": "Aygo",
      "brand_id": "79"
  },
  {
      "id": "63415",
      "name": "Aygo X",
      "brand_id": "79"
  },
  {
      "id": "54343",
      "name": "bB",
      "brand_id": "79"
  },
  {
      "id": "63856",
      "name": "Belta",
      "brand_id": "79"
  },
  {
      "id": "63855",
      "name": "Blade",
      "brand_id": "79"
  },
  {
      "id": "61166",
      "name": "Blizzard",
      "brand_id": "79"
  },
  {
      "id": "36591",
      "name": "Brevis",
      "brand_id": "79"
  },
  {
      "id": "63854",
      "name": "Briska",
      "brand_id": "79"
  },
  {
      "id": "65497",
      "name": "bZ3",
      "brand_id": "79"
  },
  {
      "id": "63765",
      "name": "bZ4X",
      "brand_id": "79"
  },
  {
      "id": "49999",
      "name": "C-HR",
      "brand_id": "79"
  },
  {
      "id": "63384",
      "name": "C-HR EV",
      "brand_id": "79"
  },
  {
      "id": "3584",
      "name": "Caldina",
      "brand_id": "79"
  },
  {
      "id": "51519",
      "name": "Cami",
      "brand_id": "79"
  },
  {
      "id": "698",
      "name": "Camry",
      "brand_id": "79"
  },
  {
      "id": "1830",
      "name": "Camry Solara",
      "brand_id": "79"
  },
  {
      "id": "33430",
      "name": "Carib",
      "brand_id": "79"
  },
  {
      "id": "699",
      "name": "Carina",
      "brand_id": "79"
  },
  {
      "id": "700",
      "name": "Carina E",
      "brand_id": "79"
  },
  {
      "id": "63900",
      "name": "Carina ED",
      "brand_id": "79"
  },
  {
      "id": "36691",
      "name": "Cavalier",
      "brand_id": "79"
  },
  {
      "id": "701",
      "name": "Celica",
      "brand_id": "79"
  },
  {
      "id": "53200",
      "name": "Celica Camry",
      "brand_id": "79"
  },
  {
      "id": "42917",
      "name": "Century",
      "brand_id": "79"
  },
  {
      "id": "2573",
      "name": "Chaser",
      "brand_id": "79"
  },
  {
      "id": "63879",
      "name": "Classic",
      "brand_id": "79"
  },
  {
      "id": "53278",
      "name": "Coms",
      "brand_id": "79"
  },
  {
      "id": "1872",
      "name": "Condor",
      "brand_id": "79"
  },
  {
      "id": "702",
      "name": "Corolla",
      "brand_id": "79"
  },
  {
      "id": "63857",
      "name": "Corolla Compact",
      "brand_id": "79"
  },
  {
      "id": "64459",
      "name": "Corolla Cross",
      "brand_id": "79"
  },
  {
      "id": "63858",
      "name": "Corolla FX",
      "brand_id": "79"
  },
  {
      "id": "63864",
      "name": "Corolla II",
      "brand_id": "79"
  },
  {
      "id": "64749",
      "name": "Corolla iM",
      "brand_id": "79"
  },
  {
      "id": "36882",
      "name": "Corolla Levin",
      "brand_id": "79"
  },
  {
      "id": "63866",
      "name": "Corolla Rumion",
      "brand_id": "79"
  },
  {
      "id": "63869",
      "name": "Corolla Spacio",
      "brand_id": "79"
  },
  {
      "id": "703",
      "name": "Corolla Verso",
      "brand_id": "79"
  },
  {
      "id": "704",
      "name": "Corona",
      "brand_id": "79"
  },
  {
      "id": "41684",
      "name": "Corona Exiv",
      "brand_id": "79"
  },
  {
      "id": "32672",
      "name": "Corsa",
      "brand_id": "79"
  },
  {
      "id": "705",
      "name": "Cressida",
      "brand_id": "79"
  },
  {
      "id": "28262",
      "name": "Cresta",
      "brand_id": "79"
  },
  {
      "id": "706",
      "name": "Crown",
      "brand_id": "79"
  },
  {
      "id": "63860",
      "name": "Crown Comfort",
      "brand_id": "79"
  },
  {
      "id": "63862",
      "name": "Crown Majesta",
      "brand_id": "79"
  },
  {
      "id": "43373",
      "name": "Curren",
      "brand_id": "79"
  },
  {
      "id": "40860",
      "name": "Cynos",
      "brand_id": "79"
  },
  {
      "id": "63868",
      "name": "Deliboy",
      "brand_id": "79"
  },
  {
      "id": "51015",
      "name": "Duet",
      "brand_id": "79"
  },
  {
      "id": "63876",
      "name": "E'z",
      "brand_id": "79"
  },
  {
      "id": "1645",
      "name": "Echo",
      "brand_id": "79"
  },
  {
      "id": "63877",
      "name": "Esquire",
      "brand_id": "79"
  },
  {
      "id": "2219",
      "name": "Estima",
      "brand_id": "79"
  },
  {
      "id": "63874",
      "name": "Etios",
      "brand_id": "79"
  },
  {
      "id": "1910",
      "name": "FJ Cruiser",
      "brand_id": "79"
  },
  {
      "id": "2094",
      "name": "Fortuner",
      "brand_id": "79"
  },
  {
      "id": "63881",
      "name": "Frontlander",
      "brand_id": "79"
  },
  {
      "id": "34191",
      "name": "Funcargo",
      "brand_id": "79"
  },
  {
      "id": "2626",
      "name": "Gaia",
      "brand_id": "79"
  },
  {
      "id": "63883",
      "name": "Glanza",
      "brand_id": "79"
  },
  {
      "id": "61019",
      "name": "GR Supra",
      "brand_id": "79"
  },
  {
      "id": "63878",
      "name": "GranAce",
      "brand_id": "79"
  },
  {
      "id": "53404",
      "name": "Grand Hiace",
      "brand_id": "79"
  },
  {
      "id": "67451",
      "name": "Grand Highlander",
      "brand_id": "79"
  },
  {
      "id": "61679",
      "name": "Granvia",
      "brand_id": "79"
  },
  {
      "id": "38060",
      "name": "GT 86",
      "brand_id": "79"
  },
  {
      "id": "3512",
      "name": "Harrier",
      "brand_id": "79"
  },
  {
      "id": "31933",
      "name": "Hiace",
      "brand_id": "79"
  },
  {
      "id": "2090",
      "name": "Highlander",
      "brand_id": "79"
  },
  {
      "id": "2509",
      "name": "Hilux",
      "brand_id": "79"
  },
  {
      "id": "63885",
      "name": "Hilux Surf",
      "brand_id": "79"
  },
  {
      "id": "63884",
      "name": "i-Road",
      "brand_id": "79"
  },
  {
      "id": "63845",
      "name": "iA5",
      "brand_id": "79"
  },
  {
      "id": "63882",
      "name": "Innova",
      "brand_id": "79"
  },
  {
      "id": "37012",
      "name": "Ipsum",
      "brand_id": "79"
  },
  {
      "id": "3752",
      "name": "IQ",
      "brand_id": "79"
  },
  {
      "id": "38093",
      "name": "Isis",
      "brand_id": "79"
  },
  {
      "id": "63886",
      "name": "Ist",
      "brand_id": "79"
  },
  {
      "id": "63893",
      "name": "Izoa",
      "brand_id": "79"
  },
  {
      "id": "63894",
      "name": "Jeep BJ",
      "brand_id": "79"
  },
  {
      "id": "63895",
      "name": "JPN Taxi",
      "brand_id": "79"
  },
  {
      "id": "63896",
      "name": "Kijang",
      "brand_id": "79"
  },
  {
      "id": "63889",
      "name": "Kluger",
      "brand_id": "79"
  },
  {
      "id": "35000",
      "name": "Land Cruiser",
      "brand_id": "79"
  },
  {
      "id": "63898",
      "name": "Land Cruiser Cygnus",
      "brand_id": "79"
  },
  {
      "id": "63899",
      "name": "Land Cruiser II",
      "brand_id": "79"
  },
  {
      "id": "35004",
      "name": "Land Cruiser Prado",
      "brand_id": "79"
  },
  {
      "id": "63903",
      "name": "Levin",
      "brand_id": "79"
  },
  {
      "id": "39600",
      "name": "Lexcen",
      "brand_id": "79"
  },
  {
      "id": "63897",
      "name": "Limo",
      "brand_id": "79"
  },
  {
      "id": "3335",
      "name": "LiteAce",
      "brand_id": "79"
  },
  {
      "id": "3651",
      "name": "Mark II",
      "brand_id": "79"
  },
  {
      "id": "63901",
      "name": "Mark II Qualis",
      "brand_id": "79"
  },
  {
      "id": "63902",
      "name": "Mark X",
      "brand_id": "79"
  },
  {
      "id": "63907",
      "name": "Mark X ZiO",
      "brand_id": "79"
  },
  {
      "id": "37958",
      "name": "Master",
      "brand_id": "79"
  },
  {
      "id": "63909",
      "name": "Master Ace Surf",
      "brand_id": "79"
  },
  {
      "id": "1647",
      "name": "Matrix",
      "brand_id": "79"
  },
  {
      "id": "63915",
      "name": "Mega Cruiser",
      "brand_id": "79"
  },
  {
      "id": "63918",
      "name": "Mini Ace",
      "brand_id": "79"
  },
  {
      "id": "44656",
      "name": "Mirai",
      "brand_id": "79"
  },
  {
      "id": "63920",
      "name": "Model-F",
      "brand_id": "79"
  },
  {
      "id": "63922",
      "name": "MR-S",
      "brand_id": "79"
  },
  {
      "id": "710",
      "name": "MR2",
      "brand_id": "79"
  },
  {
      "id": "41683",
      "name": "Nadia",
      "brand_id": "79"
  },
  {
      "id": "63934",
      "name": "Noah",
      "brand_id": "79"
  },
  {
      "id": "43580",
      "name": "Opa",
      "brand_id": "79"
  },
  {
      "id": "63912",
      "name": "Origin",
      "brand_id": "79"
  },
  {
      "id": "711",
      "name": "Paseo",
      "brand_id": "79"
  },
  {
      "id": "63917",
      "name": "Passo",
      "brand_id": "79"
  },
  {
      "id": "63916",
      "name": "Passo Sette",
      "brand_id": "79"
  },
  {
      "id": "712",
      "name": "Picnic",
      "brand_id": "79"
  },
  {
      "id": "63936",
      "name": "Pixis",
      "brand_id": "79"
  },
  {
      "id": "63932",
      "name": "Pixis Epoch",
      "brand_id": "79"
  },
  {
      "id": "63926",
      "name": "Pixis Joy",
      "brand_id": "79"
  },
  {
      "id": "63928",
      "name": "Pixis Mega",
      "brand_id": "79"
  },
  {
      "id": "63925",
      "name": "Pixis Space",
      "brand_id": "79"
  },
  {
      "id": "63937",
      "name": "Platz",
      "brand_id": "79"
  },
  {
      "id": "63942",
      "name": "Porte",
      "brand_id": "79"
  },
  {
      "id": "54163",
      "name": "Premio",
      "brand_id": "79"
  },
  {
      "id": "713",
      "name": "Previa",
      "brand_id": "79"
  },
  {
      "id": "714",
      "name": "Prius",
      "brand_id": "79"
  },
  {
      "id": "49012",
      "name": "Prius C",
      "brand_id": "79"
  },
  {
      "id": "63908",
      "name": "Prius MPV",
      "brand_id": "79"
  },
  {
      "id": "62022",
      "name": "Prius Prime",
      "brand_id": "79"
  },
  {
      "id": "59623",
      "name": "Prius v",
      "brand_id": "79"
  },
  {
      "id": "50240",
      "name": "Proace",
      "brand_id": "79"
  },
  {
      "id": "62667",
      "name": "Proace City",
      "brand_id": "79"
  },
  {
      "id": "62668",
      "name": "Proace City Verso",
      "brand_id": "79"
  },
  {
      "id": "56818",
      "name": "Proace Verso",
      "brand_id": "79"
  },
  {
      "id": "63919",
      "name": "Probox",
      "brand_id": "79"
  },
  {
      "id": "2920",
      "name": "Progres",
      "brand_id": "79"
  },
  {
      "id": "63923",
      "name": "Pronard",
      "brand_id": "79"
  },
  {
      "id": "63924",
      "name": "Publica",
      "brand_id": "79"
  },
  {
      "id": "63930",
      "name": "Quantum",
      "brand_id": "79"
  },
  {
      "id": "63933",
      "name": "Ractis",
      "brand_id": "79"
  },
  {
      "id": "63943",
      "name": "Raize",
      "brand_id": "79"
  },
  {
      "id": "37465",
      "name": "Raum",
      "brand_id": "79"
  },
  {
      "id": "715",
      "name": "RAV4",
      "brand_id": "79"
  },
  {
      "id": "56916",
      "name": "RAV4 EV",
      "brand_id": "79"
  },
  {
      "id": "63116",
      "name": "RAV4 PHEV",
      "brand_id": "79"
  },
  {
      "id": "63966",
      "name": "Regius",
      "brand_id": "79"
  },
  {
      "id": "63904",
      "name": "Reiz",
      "brand_id": "79"
  },
  {
      "id": "63906",
      "name": "Roomy",
      "brand_id": "79"
  },
  {
      "id": "63910",
      "name": "Rukus",
      "brand_id": "79"
  },
  {
      "id": "63911",
      "name": "Rumion",
      "brand_id": "79"
  },
  {
      "id": "63913",
      "name": "Rush",
      "brand_id": "79"
  },
  {
      "id": "63914",
      "name": "Sai",
      "brand_id": "79"
  },
  {
      "id": "3271",
      "name": "Scepter",
      "brand_id": "79"
  },
  {
      "id": "2104",
      "name": "Sequoia",
      "brand_id": "79"
  },
  {
      "id": "39744",
      "name": "Sera",
      "brand_id": "79"
  },
  {
      "id": "1897",
      "name": "Sienna",
      "brand_id": "79"
  },
  {
      "id": "63206",
      "name": "Sienta",
      "brand_id": "79"
  },
  {
      "id": "3485",
      "name": "Soarer",
      "brand_id": "79"
  },
  {
      "id": "63938",
      "name": "Soluna",
      "brand_id": "79"
  },
  {
      "id": "716",
      "name": "Space Cruiser",
      "brand_id": "79"
  },
  {
      "id": "63939",
      "name": "Spacia",
      "brand_id": "79"
  },
  {
      "id": "63941",
      "name": "Spade",
      "brand_id": "79"
  },
  {
      "id": "63944",
      "name": "Sparky",
      "brand_id": "79"
  },
  {
      "id": "63940",
      "name": "Sports 800",
      "brand_id": "79"
  },
  {
      "id": "2652",
      "name": "Sprinter",
      "brand_id": "79"
  },
  {
      "id": "63964",
      "name": "Sprinter Carib",
      "brand_id": "79"
  },
  {
      "id": "63986",
      "name": "Sprinter Cielo",
      "brand_id": "79"
  },
  {
      "id": "63987",
      "name": "Sprinter Marino",
      "brand_id": "79"
  },
  {
      "id": "36883",
      "name": "Sprinter Trueno",
      "brand_id": "79"
  },
  {
      "id": "717",
      "name": "Starlet",
      "brand_id": "79"
  },
  {
      "id": "64001",
      "name": "Stout",
      "brand_id": "79"
  },
  {
      "id": "63931",
      "name": "Succeed",
      "brand_id": "79"
  },
  {
      "id": "718",
      "name": "Supra",
      "brand_id": "79"
  },
  {
      "id": "63935",
      "name": "SW4",
      "brand_id": "79"
  },
  {
      "id": "33908",
      "name": "T100",
      "brand_id": "79"
  },
  {
      "id": "2382",
      "name": "Tacoma",
      "brand_id": "79"
  },
  {
      "id": "63956",
      "name": "Tamaraw",
      "brand_id": "79"
  },
  {
      "id": "63957",
      "name": "Tank",
      "brand_id": "79"
  },
  {
      "id": "3274",
      "name": "Tarago",
      "brand_id": "79"
  },
  {
      "id": "63979",
      "name": "Tazz",
      "brand_id": "79"
  },
  {
      "id": "719",
      "name": "Tercel",
      "brand_id": "79"
  },
  {
      "id": "63847",
      "name": "Tiara (T20)",
      "brand_id": "79"
  },
  {
      "id": "2229",
      "name": "Town Ace",
      "brand_id": "79"
  },
  {
      "id": "37957",
      "name": "ToyoAce",
      "brand_id": "79"
  },
  {
      "id": "63998",
      "name": "Trekker",
      "brand_id": "79"
  },
  {
      "id": "2046",
      "name": "Tundra",
      "brand_id": "79"
  },
  {
      "id": "63947",
      "name": "Unser",
      "brand_id": "79"
  },
  {
      "id": "32671",
      "name": "Urban Cruiser",
      "brand_id": "79"
  },
  {
      "id": "63948",
      "name": "Vanguard",
      "brand_id": "79"
  },
  {
      "id": "61626",
      "name": "Vellfire",
      "brand_id": "79"
  },
  {
      "id": "63945",
      "name": "Venture 2200 GLE",
      "brand_id": "79"
  },
  {
      "id": "63946",
      "name": "Ventury",
      "brand_id": "79"
  },
  {
      "id": "3248",
      "name": "Venza",
      "brand_id": "79"
  },
  {
      "id": "24949",
      "name": "Verossa",
      "brand_id": "79"
  },
  {
      "id": "28487",
      "name": "Verso",
      "brand_id": "79"
  },
  {
      "id": "36828",
      "name": "Vienta",
      "brand_id": "79"
  },
  {
      "id": "63955",
      "name": "Vios",
      "brand_id": "79"
  },
  {
      "id": "2397",
      "name": "Vista",
      "brand_id": "79"
  },
  {
      "id": "61388",
      "name": "Vitz",
      "brand_id": "79"
  },
  {
      "id": "63978",
      "name": "Voltz",
      "brand_id": "79"
  },
  {
      "id": "44680",
      "name": "Voxy",
      "brand_id": "79"
  },
  {
      "id": "63958",
      "name": "Wildlander",
      "brand_id": "79"
  },
  {
      "id": "63959",
      "name": "WiLL Cypha",
      "brand_id": "79"
  },
  {
      "id": "63960",
      "name": "WiLL Vi",
      "brand_id": "79"
  },
  {
      "id": "34117",
      "name": "Will Vs",
      "brand_id": "79"
  },
  {
      "id": "2150",
      "name": "Windom",
      "brand_id": "79"
  },
  {
      "id": "63962",
      "name": "Wish",
      "brand_id": "79"
  },
  {
      "id": "1834",
      "name": "XA",
      "brand_id": "79"
  },
  {
      "id": "720",
      "name": "Yaris",
      "brand_id": "79"
  },
  {
      "id": "63202",
      "name": "Yaris Cross",
      "brand_id": "79"
  },
  {
      "id": "721",
      "name": "Yaris Verso",
      "brand_id": "79"
  },
  {
      "id": "63965",
      "name": "Zelas",
      "brand_id": "79"
  },
  {
      "id": "2026",
      "name": "A300",
      "brand_id": "206"
  },
  {
      "id": "2025",
      "name": "A303",
      "brand_id": "206"
  },
  {
      "id": "2023",
      "name": "A360",
      "brand_id": "206"
  },
  {
      "id": "2021",
      "name": "AG300T",
      "brand_id": "206"
  },
  {
      "id": "2514",
      "name": "Oplegger",
      "brand_id": "206"
  },
  {
      "id": "63984",
      "name": "1500",
      "brand_id": "84"
  },
  {
      "id": "63985",
      "name": "1600",
      "brand_id": "84"
  },
  {
      "id": "63981",
      "name": "411",
      "brand_id": "84"
  },
  {
      "id": "63982",
      "name": "412",
      "brand_id": "84"
  },
  {
      "id": "31575",
      "name": "Amarok",
      "brand_id": "84"
  },
  {
      "id": "63991",
      "name": "Ameo",
      "brand_id": "84"
  },
  {
      "id": "59688",
      "name": "Apollo",
      "brand_id": "84"
  },
  {
      "id": "51838",
      "name": "Arteon",
      "brand_id": "84"
  },
  {
      "id": "62944",
      "name": "Arteon Shooting Brake",
      "brand_id": "84"
  },
  {
      "id": "53337",
      "name": "Atlas",
      "brand_id": "84"
  },
  {
      "id": "62190",
      "name": "Atlas Cross Sport",
      "brand_id": "84"
  },
  {
      "id": "780",
      "name": "Beetle",
      "brand_id": "84"
  },
  {
      "id": "781",
      "name": "Bora",
      "brand_id": "84"
  },
  {
      "id": "63975",
      "name": "C-Trek",
      "brand_id": "84"
  },
  {
      "id": "63977",
      "name": "Cabriolet",
      "brand_id": "84"
  },
  {
      "id": "35448",
      "name": "Caddy",
      "brand_id": "84"
  },
  {
      "id": "57466",
      "name": "Caddy Alltrack",
      "brand_id": "84"
  },
  {
      "id": "59267",
      "name": "California",
      "brand_id": "84"
  },
  {
      "id": "38134",
      "name": "Carat",
      "brand_id": "84"
  },
  {
      "id": "1653",
      "name": "Caravelle",
      "brand_id": "84"
  },
  {
      "id": "3006",
      "name": "CC / Passat CC",
      "brand_id": "84"
  },
  {
      "id": "63980",
      "name": "Citi",
      "brand_id": "84"
  },
  {
      "id": "63983",
      "name": "Clasico",
      "brand_id": "84"
  },
  {
      "id": "782",
      "name": "Corrado",
      "brand_id": "84"
  },
  {
      "id": "3663",
      "name": "Cross Golf",
      "brand_id": "84"
  },
  {
      "id": "64468",
      "name": "Cross Golf Plus",
      "brand_id": "84"
  },
  {
      "id": "64024",
      "name": "Cross Lavida",
      "brand_id": "84"
  },
  {
      "id": "30380",
      "name": "Cross Polo",
      "brand_id": "84"
  },
  {
      "id": "32303",
      "name": "Cross Touran",
      "brand_id": "84"
  },
  {
      "id": "63988",
      "name": "Dasher",
      "brand_id": "84"
  },
  {
      "id": "783",
      "name": "Derby",
      "brand_id": "84"
  },
  {
      "id": "64017",
      "name": "Dune Buggy",
      "brand_id": "84"
  },
  {
      "id": "62901",
      "name": "e-Bora",
      "brand_id": "84"
  },
  {
      "id": "45152",
      "name": "e-Golf",
      "brand_id": "84"
  },
  {
      "id": "62267",
      "name": "e-Lavida",
      "brand_id": "84"
  },
  {
      "id": "63153",
      "name": "E-Tharu",
      "brand_id": "84"
  },
  {
      "id": "67974",
      "name": "e-Up",
      "brand_id": "84"
  },
  {
      "id": "2806",
      "name": "Eos",
      "brand_id": "84"
  },
  {
      "id": "35394",
      "name": "Eurovan",
      "brand_id": "84"
  },
  {
      "id": "33951",
      "name": "Fox",
      "brand_id": "84"
  },
  {
      "id": "63992",
      "name": "Fusca",
      "brand_id": "84"
  },
  {
      "id": "44914",
      "name": "Garbus",
      "brand_id": "84"
  },
  {
      "id": "18499",
      "name": "Gol",
      "brand_id": "84"
  },
  {
      "id": "35449",
      "name": "Golf",
      "brand_id": "84"
  },
  {
      "id": "59942",
      "name": "Golf Alltrack",
      "brand_id": "84"
  },
  {
      "id": "63351",
      "name": "Golf GTD",
      "brand_id": "84"
  },
  {
      "id": "64469",
      "name": "Golf GTE",
      "brand_id": "84"
  },
  {
      "id": "2813",
      "name": "Golf GTI",
      "brand_id": "84"
  },
  {
      "id": "2811",
      "name": "Golf Plus",
      "brand_id": "84"
  },
  {
      "id": "62943",
      "name": "Golf R",
      "brand_id": "84"
  },
  {
      "id": "45343",
      "name": "Golf Sportsvan",
      "brand_id": "84"
  },
  {
      "id": "61333",
      "name": "I.D. Buzz",
      "brand_id": "84"
  },
  {
      "id": "60005",
      "name": "ID.3",
      "brand_id": "84"
  },
  {
      "id": "62188",
      "name": "ID.4",
      "brand_id": "84"
  },
  {
      "id": "63711",
      "name": "ID.4 Crozz",
      "brand_id": "84"
  },
  {
      "id": "63282",
      "name": "ID.4 X",
      "brand_id": "84"
  },
  {
      "id": "63994",
      "name": "ID.5",
      "brand_id": "84"
  },
  {
      "id": "63995",
      "name": "ID.6",
      "brand_id": "84"
  },
  {
      "id": "63030",
      "name": "ID.6 Crozz",
      "brand_id": "84"
  },
  {
      "id": "62570",
      "name": "ID.6 X",
      "brand_id": "84"
  },
  {
      "id": "67670",
      "name": "ID.7",
      "brand_id": "84"
  },
  {
      "id": "67966",
      "name": "ID.7 Pro",
      "brand_id": "84"
  },
  {
      "id": "63996",
      "name": "ID.Buzz",
      "brand_id": "84"
  },
  {
      "id": "18500",
      "name": "Iltis",
      "brand_id": "84"
  },
  {
      "id": "785",
      "name": "Jetta",
      "brand_id": "84"
  },
  {
      "id": "44016",
      "name": "K70",
      "brand_id": "84"
  },
  {
      "id": "33863",
      "name": "Kafer",
      "brand_id": "84"
  },
  {
      "id": "52190",
      "name": "Karmann Ghia",
      "brand_id": "84"
  },
  {
      "id": "64023",
      "name": "Lamando",
      "brand_id": "84"
  },
  {
      "id": "62493",
      "name": "Lavida",
      "brand_id": "84"
  },
  {
      "id": "786",
      "name": "Lupo",
      "brand_id": "84"
  },
  {
      "id": "64052",
      "name": "Maggiolino",
      "brand_id": "84"
  },
  {
      "id": "64053",
      "name": "Magotan",
      "brand_id": "84"
  },
  {
      "id": "64054",
      "name": "Magotan Alltrack",
      "brand_id": "84"
  },
  {
      "id": "32103",
      "name": "Multivan",
      "brand_id": "84"
  },
  {
      "id": "64061",
      "name": "Nivus",
      "brand_id": "84"
  },
  {
      "id": "18501",
      "name": "Parati",
      "brand_id": "84"
  },
  {
      "id": "39690",
      "name": "Passat",
      "brand_id": "84"
  },
  {
      "id": "2805",
      "name": "Passat Alltrack",
      "brand_id": "84"
  },
  {
      "id": "788",
      "name": "Phaeton",
      "brand_id": "84"
  },
  {
      "id": "64034",
      "name": "Phideon",
      "brand_id": "84"
  },
  {
      "id": "1896",
      "name": "Pointer",
      "brand_id": "84"
  },
  {
      "id": "789",
      "name": "Polo",
      "brand_id": "84"
  },
  {
      "id": "64041",
      "name": "Quantum",
      "brand_id": "84"
  },
  {
      "id": "2700",
      "name": "Rabbit",
      "brand_id": "84"
  },
  {
      "id": "64002",
      "name": "Rometsch Beeskow Cabriolet",
      "brand_id": "84"
  },
  {
      "id": "53004",
      "name": "Routan",
      "brand_id": "84"
  },
  {
      "id": "64003",
      "name": "Sagitar",
      "brand_id": "84"
  },
  {
      "id": "790",
      "name": "Santana",
      "brand_id": "84"
  },
  {
      "id": "64010",
      "name": "Saveiro",
      "brand_id": "84"
  },
  {
      "id": "791",
      "name": "Scirocco",
      "brand_id": "84"
  },
  {
      "id": "792",
      "name": "Sharan",
      "brand_id": "84"
  },
  {
      "id": "64020",
      "name": "SP2",
      "brand_id": "84"
  },
  {
      "id": "64021",
      "name": "SpaceFox",
      "brand_id": "84"
  },
  {
      "id": "64005",
      "name": "Suran",
      "brand_id": "84"
  },
  {
      "id": "61993",
      "name": "T-Cross",
      "brand_id": "84"
  },
  {
      "id": "53084",
      "name": "T-Roc",
      "brand_id": "84"
  },
  {
      "id": "64004",
      "name": "Tacqua",
      "brand_id": "84"
  },
  {
      "id": "64006",
      "name": "Taigo",
      "brand_id": "84"
  },
  {
      "id": "64007",
      "name": "Taigun",
      "brand_id": "84"
  },
  {
      "id": "64008",
      "name": "Talagon",
      "brand_id": "84"
  },
  {
      "id": "63337",
      "name": "Taos",
      "brand_id": "84"
  },
  {
      "id": "33328",
      "name": "Taro",
      "brand_id": "84"
  },
  {
      "id": "57041",
      "name": "Tarok",
      "brand_id": "84"
  },
  {
      "id": "64009",
      "name": "Tayron",
      "brand_id": "84"
  },
  {
      "id": "54979",
      "name": "Teramont",
      "brand_id": "84"
  },
  {
      "id": "64011",
      "name": "Tharu",
      "brand_id": "84"
  },
  {
      "id": "2692",
      "name": "Tiguan",
      "brand_id": "84"
  },
  {
      "id": "53118",
      "name": "Tiguan Allspace",
      "brand_id": "84"
  },
  {
      "id": "793",
      "name": "Touareg",
      "brand_id": "84"
  },
  {
      "id": "63346",
      "name": "Touareg R",
      "brand_id": "84"
  },
  {
      "id": "2093",
      "name": "Touran",
      "brand_id": "84"
  },
  {
      "id": "64461",
      "name": "Transporter",
      "brand_id": "84"
  },
  {
      "id": "64012",
      "name": "Typ 147",
      "brand_id": "84"
  },
  {
      "id": "54141",
      "name": "Typ 4",
      "brand_id": "84"
  },
  {
      "id": "42605",
      "name": "Up",
      "brand_id": "84"
  },
  {
      "id": "64013",
      "name": "Variant",
      "brand_id": "84"
  },
  {
      "id": "794",
      "name": "Vento",
      "brand_id": "84"
  },
  {
      "id": "64019",
      "name": "Viloran",
      "brand_id": "84"
  },
  {
      "id": "64022",
      "name": "Virtus",
      "brand_id": "84"
  },
  {
      "id": "64014",
      "name": "Voyage",
      "brand_id": "84"
  },
  {
      "id": "29321",
      "name": "140",
      "brand_id": "85"
  },
  {
      "id": "3210",
      "name": "142",
      "brand_id": "85"
  },
  {
      "id": "3211",
      "name": "144",
      "brand_id": "85"
  },
  {
      "id": "2935",
      "name": "145",
      "brand_id": "85"
  },
  {
      "id": "37960",
      "name": "164",
      "brand_id": "85"
  },
  {
      "id": "795",
      "name": "240",
      "brand_id": "85"
  },
  {
      "id": "38585",
      "name": "242",
      "brand_id": "85"
  },
  {
      "id": "796",
      "name": "244",
      "brand_id": "85"
  },
  {
      "id": "797",
      "name": "245",
      "brand_id": "85"
  },
  {
      "id": "798",
      "name": "260",
      "brand_id": "85"
  },
  {
      "id": "65293",
      "name": "262",
      "brand_id": "85"
  },
  {
      "id": "65294",
      "name": "262C",
      "brand_id": "85"
  },
  {
      "id": "799",
      "name": "264",
      "brand_id": "85"
  },
  {
      "id": "800",
      "name": "265",
      "brand_id": "85"
  },
  {
      "id": "64101",
      "name": "300",
      "brand_id": "85"
  },
  {
      "id": "801",
      "name": "340",
      "brand_id": "85"
  },
  {
      "id": "802",
      "name": "343",
      "brand_id": "85"
  },
  {
      "id": "49886",
      "name": "344",
      "brand_id": "85"
  },
  {
      "id": "803",
      "name": "345",
      "brand_id": "85"
  },
  {
      "id": "804",
      "name": "360",
      "brand_id": "85"
  },
  {
      "id": "805",
      "name": "440",
      "brand_id": "85"
  },
  {
      "id": "806",
      "name": "460",
      "brand_id": "85"
  },
  {
      "id": "807",
      "name": "480",
      "brand_id": "85"
  },
  {
      "id": "36452",
      "name": "66",
      "brand_id": "85"
  },
  {
      "id": "808",
      "name": "740",
      "brand_id": "85"
  },
  {
      "id": "33891",
      "name": "744",
      "brand_id": "85"
  },
  {
      "id": "65301",
      "name": "745",
      "brand_id": "85"
  },
  {
      "id": "809",
      "name": "760",
      "brand_id": "85"
  },
  {
      "id": "33922",
      "name": "780",
      "brand_id": "85"
  },
  {
      "id": "810",
      "name": "850",
      "brand_id": "85"
  },
  {
      "id": "811",
      "name": "940",
      "brand_id": "85"
  },
  {
      "id": "812",
      "name": "960",
      "brand_id": "85"
  },
  {
      "id": "2705",
      "name": "C30",
      "brand_id": "85"
  },
  {
      "id": "63235",
      "name": "C40 Recharge",
      "brand_id": "85"
  },
  {
      "id": "813",
      "name": "C70",
      "brand_id": "85"
  },
  {
      "id": "65513",
      "name": "EX30",
      "brand_id": "85"
  },
  {
      "id": "65514",
      "name": "EX30 Cross Country",
      "brand_id": "85"
  },
  {
      "id": "64264",
      "name": "EX90",
      "brand_id": "85"
  },
  {
      "id": "64103",
      "name": "P120",
      "brand_id": "85"
  },
  {
      "id": "64104",
      "name": "P130",
      "brand_id": "85"
  },
  {
      "id": "64121",
      "name": "P1800",
      "brand_id": "85"
  },
  {
      "id": "64124",
      "name": "P1900",
      "brand_id": "85"
  },
  {
      "id": "64119",
      "name": "P210",
      "brand_id": "85"
  },
  {
      "id": "64120",
      "name": "P220",
      "brand_id": "85"
  },
  {
      "id": "64125",
      "name": "PV444 / PV544",
      "brand_id": "85"
  },
  {
      "id": "64126",
      "name": "PV445",
      "brand_id": "85"
  },
  {
      "id": "64127",
      "name": "PV831/832",
      "brand_id": "85"
  },
  {
      "id": "814",
      "name": "S40",
      "brand_id": "85"
  },
  {
      "id": "815",
      "name": "S60",
      "brand_id": "85"
  },
  {
      "id": "47193",
      "name": "S60 Cross Country",
      "brand_id": "85"
  },
  {
      "id": "816",
      "name": "S70",
      "brand_id": "85"
  },
  {
      "id": "817",
      "name": "S80",
      "brand_id": "85"
  },
  {
      "id": "818",
      "name": "S90",
      "brand_id": "85"
  },
  {
      "id": "64102",
      "name": "TP21 Hogster",
      "brand_id": "85"
  },
  {
      "id": "819",
      "name": "V40",
      "brand_id": "85"
  },
  {
      "id": "40798",
      "name": "V40 Cross Country",
      "brand_id": "85"
  },
  {
      "id": "3197",
      "name": "V50",
      "brand_id": "85"
  },
  {
      "id": "36922",
      "name": "V60",
      "brand_id": "85"
  },
  {
      "id": "63355",
      "name": "V60 Cross Country",
      "brand_id": "85"
  },
  {
      "id": "820",
      "name": "V70",
      "brand_id": "85"
  },
  {
      "id": "822",
      "name": "V90",
      "brand_id": "85"
  },
  {
      "id": "63446",
      "name": "V90 Cross Country",
      "brand_id": "85"
  },
  {
      "id": "52824",
      "name": "XC40",
      "brand_id": "85"
  },
  {
      "id": "63025",
      "name": "XC40 Recharge",
      "brand_id": "85"
  },
  {
      "id": "2908",
      "name": "XC60",
      "brand_id": "85"
  },
  {
      "id": "63164",
      "name": "XC60 Recharge",
      "brand_id": "85"
  },
  {
      "id": "823",
      "name": "XC70",
      "brand_id": "85"
  },
  {
      "id": "67955",
      "name": "XC70 Cross Country",
      "brand_id": "85"
  },
  {
      "id": "824",
      "name": "XC90",
      "brand_id": "85"
  },
  {
      "id": "68039",
      "name": "XC90 Recharge",
      "brand_id": "85"
  }
]

export {brands, models}
