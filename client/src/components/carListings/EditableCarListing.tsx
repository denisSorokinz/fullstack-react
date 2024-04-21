import { FC, useEffect, useMemo } from "react";
import CarListing, { CarListingProps } from "./CarListing";
import FlipBox, { flipClassName } from "../FlipBox";
import { CarListing as CarListingType } from "@/types/listings";
import { cn } from "@/lib/utils";
import { Pen } from "../icons";
import EditListingForm, { EditListingFormData } from "../forms/EditListingForm";
import { OnlyPropertiesLens } from "@/lib/lenses";

// export type ListingEditProps =
//   | {
//       allowEdit: false;
//     }
//   | {
//       allowEdit: true;
//       isEditing: boolean;
//       onToggleEditing: (listing: CarListingType) => void;
//       onEdit: (
//         listing: Pick<CarListingType, "id"> & Partial<CarListingType>
//       ) => void;
//     };
type Props = CarListingProps & {
  allowEdit?: boolean;
  isEditing?: boolean;
  onToggleEditing?: (listing: CarListingType) => void;
  onEdit?: (
    listing: Pick<CarListingType, "id"> & Partial<CarListingType>
  ) => void;
};

const EditableCarListing: FC<Props> = ({
  listing,
  view,
  armyScore,
  allowEdit,
  isEditing,
  onEdit,
  onToggleEditing,
}) => {
  if (!allowEdit)
    return <CarListing listing={listing} view={view} armyScore={armyScore} />;

  const handleEdit = (editedFields: EditListingFormData) => {
    const nextListing = { id: listing.id, ...editedFields };
    onEdit && onEdit(nextListing);
  };

  const formDefaultValues = useMemo(() => {
    const lens = OnlyPropertiesLens.from([
      "brandId",
      "modelId",
      "description",
      "mileage",
      "price",
      "year",
    ] as Array<keyof EditListingFormData>);
    const values = lens.view(listing);

    return values;
  }, []);

  return (
    <FlipBox
      isFlipped={isEditing}
      dispatchFlip={() => onToggleEditing && onToggleEditing(listing)}
      front={
        <div className="relative h-full">
          <div
            className={`${cn(
              flipClassName,
              "absolute left-2 top-2 z-10 flex h-8 cursor-pointer items-center gap-2 rounded-lg bg-amber-500 px-2 py-1 font-bold shadow-2xl shadow-black"
            )}`}
          >
            <i>
              <Pen width={20} height={20} />
            </i>
          </div>

          <CarListing listing={listing} view={view} armyScore={armyScore} />
        </div>
      }
      back={
        <div className={cn(flipClassName, "cursor-pointer")}>
          <EditListingForm defaultValues={formDefaultValues} onEdit={onEdit as any} />
        </div>
      }
    />
  );
};

export default EditableCarListing;
