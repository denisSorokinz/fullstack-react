import { cn } from "@/lib/utils";
import { flipClassName } from "../FlipBox";
import EditListingForm from "../forms/EditListingForm";
import { CarListing } from "@/types/listings";
import { FC } from "react";
import { FiltersType } from "@/types/filters";

type Props = {
  listing: CarListing;
};
const EditListing: FC<Props> = ({ listing }) => {
  return (
    <div className={cn(flipClassName, "cursor-pointer")}>
      <EditListingForm listing={listing} />
    </div>
  );
};

export default EditListing;
