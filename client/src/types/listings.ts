interface ICarListing {
  id: number;
  brandId: number;
  modelId: number;
  year: number;
  price: number;
  mileage?: number;
  createdAt: Date;
  slug: string;
  thumbnailUrl?: string;
  description?: string;
}

type CarListing = ICarListing & {
  brand: string;
  model: string;
  thumbnailUrl: string;
};

type CarListingExpanded = CarListing & {
  images?: string[];
};

export { type CarListing, type CarListingExpanded };
