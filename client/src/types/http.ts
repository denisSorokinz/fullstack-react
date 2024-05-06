import { ZodError } from "zod";
import { FilterOption, FiltersType } from "./filters";
import { CarListing } from "./listings";

export enum CarApiOperations {
  getFilters = "filters",
  getListing = "listing",
  getListings = "listings",
  getBrands = "brands",
  getModelsByBrand = "models",
  updateListing = "listing",
}

type PaginatedResponse = CarApiOperations.getListings;
export type PaginationMeta = {
  page: number;
  pageSize: number;
  totalItems: number;
};

export type CarApiResponse<T> =
  | { success: false; message: string }
  | {
      success: true;
      data: {
        [CarApiOperations.getFilters]?: T extends CarApiOperations.getFilters
          ? FiltersType
          : undefined;
        [CarApiOperations.getListing]?: T extends CarApiOperations.getListing
          ? CarListing
          : undefined;
        [CarApiOperations.getListings]?: T extends CarApiOperations.getListings
          ? Array<CarListing>
          : undefined;
        [CarApiOperations.getBrands]?: T extends CarApiOperations.getBrands
          ? Array<FilterOption>
          : undefined;
        [CarApiOperations.getModelsByBrand]?: T extends CarApiOperations.getModelsByBrand
          ? Array<FilterOption>
          : undefined;
        [CarApiOperations.updateListing]?: T extends CarApiOperations.updateListing
          ? CarListing
          : undefined;
      };
      pagination?: T extends PaginatedResponse ? PaginationMeta : undefined;
    };

export type AuthResponse =
  | { success: true; tokens: { accessToken: string; refreshToken: string } }
  | { success: false; message?: string; error?: ZodError };

export type UserRole = "USER" | "ADMIN";

export type AuthJWTPayload = {
  id: number;
  email: string;
  role: UserRole;
  exp: number;
  iat: number;
};
