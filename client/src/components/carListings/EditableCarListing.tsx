import { FC, memo, useMemo } from "react";
import CarListing, { CarListingProps } from "./CarListing";
import FlipBox, { flipClassName } from "../FlipBox";
import { CarListing as CarListingType } from "@/types/listings";
import { cn } from "@/lib/utils";
import { Pen } from "../icons";
import EditListingForm, { EditListingFormData } from "../forms/EditListingForm";
import { OnlyPropertiesLens } from "@/lib/lenses";

type Props = CarListingProps & {
  allowEdit?: boolean;
  isEditing?: boolean;
  isFavorited?: boolean;
  onToggleEditing?: (listing: CarListingType) => void;
  onEdit?: (
    listing: Pick<CarListingType, "id"> & Partial<CarListingType>
  ) => void;
  onDelete?: (listingId: CarListingType["id"]) => void;
  onToggleFavorite?: (listingId: CarListingType["id"]) => void;
};

const EditableCarListing: FC<Props> = ({
  listing,
  view,
  armyScore,
  allowEdit,
  isFavorited,
  isEditing,
  onToggleEditing,
  onEdit,
  onDelete,
  onToggleFavorite,
}) => {
  if (listing.id === 35542291)
    console.log({
      editableCarListingDebug: { id: listing.id, isFavorited },
    });

  if (!allowEdit)
    return (
      <CarListing
        listing={listing}
        view={view}
        armyScore={armyScore}
        isFavorited={isFavorited}
      />
    );

  const handleEdit = (editedFields: EditListingFormData) => {
    const nextListing = { id: listing.id, ...editedFields };
    onEdit && onEdit(nextListing);
  };
  const handleDelete = () => onDelete && onDelete(listing.id);

  const formDefaultValues = useMemo(() => {
    const lens = OnlyPropertiesLens.from([
      "brandId",
      "modelId",
      "description",
      "mileage",
      "price",
      "year",
    ] as Array<keyof EditListingFormData>);
    const values = lens.view(listing) as Pick<
      CarListingType,
      "brandId" | "modelId" | "description" | "mileage" | "price" | "year"
    >;

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
              "absolute left-2 top-2 z-10 flex h-8 cursor-pointer items-center gap-2 rounded-lg bg-amber-500 px-2 py-1 font-bold shadow-2xl shadow-black",
              flipClassName
            )}`}
          >
            <i>
              <Pen width={20} height={20} />
            </i>
          </div>
          <CarListing
            listing={listing}
            view={view}
            armyScore={armyScore}
            isFavorited={isFavorited}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      }
      back={
        <div className={cn(flipClassName, "cursor-pointer")}>
          <EditListingForm
            defaultValues={formDefaultValues}
            listingId={listing.id}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      }
      childProps={[
        listing.brandId,
        listing.modelId,
        listing.price,
        listing.description,
        listing.mileage,
        isFavorited,
      ].toString()}
    />
  );
};

export default EditableCarListing;
