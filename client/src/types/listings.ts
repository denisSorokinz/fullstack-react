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
};

type CarListingExpanded = CarListing & {
  description: string;
  images: string[];
};

export { type CarListing, type CarListingExpanded };
