import { FC } from "react";
import CarListing, { CarListingProps } from "./CarListing";
import FlipBox, { flipClassName } from "../FlipBox";
import { CarListing as CarListingType } from "@/types/listings";
import { cn } from "@/lib/utils";
import { Pen } from "../icons";
import EditListingForm, { EditListingFormData } from "../forms/EditListingForm";

export type ListingEditProps =
  | {
      allowEdit: false;
    }
  | {
      allowEdit: true;
      isEditing: boolean;
      onToggleEditing: (listing: CarListingType) => void;
      onEdit: (
        listing: Pick<CarListingType, "id"> & Partial<CarListingType>
      ) => void;
    };
type Props = CarListingProps & ListingEditProps;

const EditableCarListing: FC<Props> = (props) => {
  if (!props.allowEdit) return <CarListing {...props} />;

  const { isEditing, onEdit, onToggleEditing } = props;

  const handleEdit = (editedFields: EditListingFormData) => {
    const nextListing = { id: props.listing.id, ...editedFields };
    onEdit(nextListing);
  };

  return (
    <FlipBox
      isFlipped={isEditing}
      dispatchFlip={() => onToggleEditing(props.listing)}
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

          <CarListing {...props} />
        </div>
      }
      back={
        <div className={cn(flipClassName, "cursor-pointer")}>
          <EditListingForm listing={props.listing} onSubmit={handleEdit} />
        </div>
      }
    />
  );
};

export default EditableCarListing;
