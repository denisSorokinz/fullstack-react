interface ICarListing {
  id: string;
  brand: string;
  model: string;
  year: string;
  priceUsd: string;
  mileage: string;
  slug: string;
}

type CarListing = ICarListing & {
  thumbnailUrl: string;
}

type CarListingExpanded = CarListing & {
  description: string,
  images: string[]
}

type CarListingSchema = {
  '@context': string;
  '@type': string;
  additionalType: string;
  '@id': string;
  mileageFromOdometer: {
    '@type': string;
    unitCode: string;
    value: number;
  };
  name: string;
  brand: {
    '@type': string;
    name: string;
  };
  vehicleIdentificationNumber: string;
  model: string;
  url: string;
  mainEntityOfPage: string;
  productionDate: number;
  description: string;
  bodyType: string;
  color: string;
  fuelType: string;
  vehicleTransmission: string;
  offers: {
    '@type': string;
    priceCurrency: string;
    price: string;
    itemCondition: string;
    availability: string;
  };
  numberOfDoors: string;
  driveWheelConfiguration: string;
  numberOfPreviousOwners: number;
  purchaseDate: string;
  seatingCapacity: number;
  vehicleConfiguration: string;
  vehicleEngine: {
    '@type': string;
    fuelType: string;
    engineDisplacement: {
      '@type': string;
      value: number;
      unitText: string;
    };
    enginePower: {
      '@type': string;
      value: number;
      unitCode: string;
    };
  };
  aggregateRating: {
    '@type': string;
    ratingValue: number;
    bestRating: number;
    ratingCount: number;
  };
};

export { CarListing, CarListingExpanded, CarListingSchema };
