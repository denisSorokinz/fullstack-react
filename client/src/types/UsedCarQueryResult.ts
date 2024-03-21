type UsedCarQueryResult = {
  userId: number;
  userBlocked: any[];
  chipsCount: number;
  locationCityName: string;
  cityLocative: string;
  auctionPossible: boolean;
  exchangePossible: boolean;
  realtyExchange: boolean;
  exchangeType: string;
  exchangeTypeId: number;
  addDate: Date;
  updateDate: Date;
  expireDate: Date;
  soldDate: string;
  userHideADSStatus: boolean;
  userPhoneData: UserPhoneData;
  USD: number;
  UAH: number;
  EUR: number;
  isAutoAddedByPartner: boolean;
  partnerId: number;
  levelData: LevelData;
  color: Color;
  autoData: AutoData;
  autoInfoBar: AutoInfoBar;
  markName: string;
  markNameEng: string;
  markId: number;
  modelName: string;
  modelNameEng: string;
  modelId: number;
  subCategoryName: string;
  photoData: PhotoData;
  linkToView: string;
  title: string;
  stateData: StateData;
  canSetSpecificPhoneToAdvert: boolean;
  dontComment: number;
  sendComments: number;
  badges: any[];
  VIN: string;
  haveInfotechReport: boolean;
  checkedVin: CheckedVin;
  hasWebP: number;
  moderatedAbroad: boolean;
  secureKey: string;
  firstTime: boolean;
  technicalChecked: boolean;
  videoMessages: VideoMessages;
  videoMessageID: string;
  isLeasing: number;
  plateNumberData: PlateNumberData;
  plateNumber: string;
  agreeShowVIN: number;
  dealer: Dealer;
  withInfoBar: boolean;
  infoBarText: string;
  optionStyles: any[];
};

export type AutoData = {
  active: boolean;
  vat: boolean;
  description: string;
  version: string;
  onModeration: boolean;
  year: number;
  autoId: number;
  bodyId: number;
  statusId: number;
  withVideo: boolean;
  race: string;
  raceInt: number;
  fuelId: number;
  fuelName: string;
  fuelNameEng: string;
  gearBoxId: number;
  gearboxName: string;
  driveId: number;
  driveName: string;
  isSold: boolean;
  mainCurrency: string;
  fromArchive: boolean;
  categoryId: number;
  categoryNameEng: string;
  subCategoryNameEng: string;
  custom: number;
  withVideoMessages: boolean;
};

export type AutoInfoBar = {
  custom: boolean;
  abroad: boolean;
  onRepairParts: boolean;
  damage: boolean;
  underCredit: boolean;
  confiscatedCar: boolean;
};

export type CheckedVin = {
  orderId: number;
  vin: string;
  isShow: boolean;
};

export type Color = {
  name: string;
  eng: string;
  hex: string;
};

export type Dealer = {
  link: string;
  logo: string;
  type: string;
  id: number;
  name: string;
  packageId: number;
  typeId: number;
  verified: boolean;
};

export type LevelData = {
  level: number;
  label: number;
  hotType: string;
  expireDate: string;
};

export type PhotoData = {
  all: number[];
  count: number;
  seoLinkM: string;
  seoLinkSX: string;
  seoLinkB: string;
  seoLinkF: string;
};

export type PlateNumberData = {
  text: string;
};

export type StateData = {
  name: string;
  regionName: string;
  regionNameEng: string;
  linkToCatalog: string;
  title: string;
  stateId: number;
  cityId: number;
};

export type UserPhoneData = {
  phoneId: string;
  phone: string;
};

export type VideoMessages = {};

export default UsedCarQueryResult;
