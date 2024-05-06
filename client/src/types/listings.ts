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
  bodyType: LISTING_BODY_TYPES;
}

type CarListing = ICarListing & {
  brand: string;
  model: string;
  thumbnailUrl: string;
};

type CarListingExpanded = CarListing & {
  images?: string[];
};

enum LISTING_BODY_TYPES {
  "SUV" = "SUV",
  "OTHER" = "OTHER",
}

type armyScoreGrade = "good" | "okay" | "bad" | "exclude";
type ArmyScoreMeta = {
  score: number;
  price: armyScoreGrade;
  mileage: armyScoreGrade;
  year: armyScoreGrade;
  bodyType: "good" | "bad";
};

export {
  type CarListing,
  type CarListingExpanded,
  type armyScoreGrade,
  type ArmyScoreMeta,
  LISTING_BODY_TYPES,
};
