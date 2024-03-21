"use client";

// import SearchForm from "@/components/SearchForm";
// import { FILTER_NAMES, FilterType, FILTER_SLUGS } from "@/constants";
// import { fetchCarListings, fetchFilterOptions, fetchRiaApi } from "@/lib";
// import { formValuesToQuery } from "@/utils";
// import React, { FC, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import UsedCarQueryResult from "@/types/UsedCarQueryResult";
// import CarListingList from "@/components/CarListingList";

// export type SearchFormValues = {
//   [k in FILTER_NAMES]: number | "";
// };

// const Home: FC<{
//   initialFilters: Array<FilterType>;
//   formValues: SearchFormValues;
//   searchParams: { [k in FILTER_SLUGS | string]: string };
// }> = ({ initialFilters, searchParams, formValues }) => {
//   const router = useRouter();
//   const [filters, setFilters] = useState(initialFilters);

//   // Car listings
//   const [listings, setListings] = useState<UsedCarQueryResult[] | []>([]);

//   // Form handlers
//   const handleFilterChange = async (changedFilter: FilterType, value: number) => {
//     const newFilters = [...filters];
//     const dependencyFilter = newFilters.find((ft) => ft.dependency === changedFilter.id);
//     if (!dependencyFilter) return;

//     const options = await fetchFilterOptions(dependencyFilter, value);
//     dependencyFilter.options = options;

//     setFilters(newFilters);
//   };

//   const handleSubmit = async (formValues: SearchFormValues) => {
//     const query = formValuesToQuery(formValues);
//     router.push(`?${query}`);
//   };

//   useEffect(() => {
//     const selectedFilters = {} as { [k in FILTER_SLUGS]: string };
//     Object.keys(searchParams).forEach((queryParam) => {
//       if (!Object.keys(FILTER_SLUGS).includes(queryParam)) return;

//       const typedQueryParam = queryParam as FILTER_SLUGS;
//       selectedFilters[typedQueryParam] = searchParams[queryParam];
//     });
//     fetchCarListings(selectedFilters).then((listings) => setListings(listings));
//   }, [searchParams]);

//   return (
//     <>
//       <SearchForm
//         filters={filters}
//         defaultValues={formValues}
//         handleFilterChange={handleFilterChange}
//         handleSubmit={handleSubmit}
//       />
//       {listings.length > 0 && <CarListingList listings={listings} />}
//     </>
//   );
// };

// export default Home;
