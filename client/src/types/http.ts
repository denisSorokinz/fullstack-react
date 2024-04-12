import { ZodError } from "zod";
import { FiltersType } from "./filters";
import { CarListing } from "./listings";

export enum CarApiOperations {
  getFilters = 'filters',
  getListing = 'listing',
  getListings = 'listings',
}
export type CarApiResponse<T> = { success: false, message: string } | {
  success: true;
  data: {
    [CarApiOperations.getFilters]: T extends CarApiOperations.getFilters ? FiltersType : undefined;
    [CarApiOperations.getListing]: T extends CarApiOperations.getListing ? CarListing : undefined;
    [CarApiOperations.getListings]: T extends CarApiOperations.getListings ? Array<CarListing> : undefined;
  };
};

export type AuthResponse =
  | { success: true; tokens: { accessToken: string; refreshToken: string } }
  | { success: false; message?: string; error?: ZodError };

export type AuthJWTPayload = {
  id: number;
  email: string;
  exp: number;
  iat: number;
};
