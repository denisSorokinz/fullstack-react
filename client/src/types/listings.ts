interface ICarListing {
  id: number;
  brandId: number;
  modelId: number;
  year: number;
  price: number;
  mileage: number;
  createdAt: Date;
  slug: string;
  thumbnailUrl: string;
  brand: string;
  model: string;
}

type CarListing = ICarListing & {
  thumbnailUrl: string;
};

type CarListingExpanded = CarListing & {
  description: string;
  images: string[];
};

export { type CarListing, type CarListingExpanded };
