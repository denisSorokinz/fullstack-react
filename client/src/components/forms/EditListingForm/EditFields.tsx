"use client";

import { DashboardStoreState } from "@/stores/dashboard";
import { CarListing } from "@/types/listings";
import { FC } from "react";
import { EditListingFormData, editableFieldsType } from ".";
import { FormField } from "@/components/shadcn/form";
import EditableFormItem from "./EditFormItem";
import { Control } from "react-hook-form";
import { cn } from "@/lib/utils";
import { noFlipClassName } from "@/components/FlipBox";

const editableFieldsNames = [
  "brandId",
  "modelId",
  "year",
  "mileage",
  "price",
  "description",
] as editableFieldsType[];
type EditableTextField = {
  type: "textarea" | "number";
  displayName: string;
};
export type EditableSelectField = {
  type: "select";
  displayName: string;
  dashboardStoreOptionsKey: keyof DashboardStoreState["editListingOptions"];
};
export type EditableField = EditableTextField | EditableSelectField;
const editableFields: {
  [k in (typeof editableFieldsNames)[number]]?:
    | EditableTextField
    | EditableSelectField;
} = {
  brandId: {
    type: "select",
    displayName: "Марка",
    dashboardStoreOptionsKey: "brands",
  },
  modelId: {
    type: "select",
    displayName: "Модель",
    dashboardStoreOptionsKey: "models",
  },
  year: {
    type: "number",
    displayName: "Рiк",
  },
  mileage: {
    type: "number",
    displayName: "Пробiг",
  },
  price: {
    type: "number",
    displayName: "Цiна",
  },
  description: {
    type: "textarea",
    displayName: "Iнформацiя",
  },
};

type Props = {
  listing: CarListing;
  formData: EditListingFormData;
  control: Control<EditListingFormData>;
};
const EditFields: FC<Props> = ({ listing, formData, control }) => {
  return editableFieldsNames.map((field) => {
    if (!(editableFields as any)[field]) return null;

    const fieldName = field as keyof typeof editableFields;
    const editMetadata = editableFields[fieldName]!;

    console.log("fn");

    return (
      <FormField
        key={field}
        control={control}
        name={fieldName}
        render={({ field: { ref, ...field } }) => (
          <EditableFormItem
            field={field}
            ref={ref}
            brandId={listing.brandId}
            fieldMeta={editMetadata}
            name={fieldName}
            className={cn(noFlipClassName, "dark:text-slate-700")}
          />
          // <FormItem
          //   className={cn(noFlipClassName, "dark:text-slate-700")}
          // >
          //   <FormLabel>{editMetadata.displayName}</FormLabel>
          //   <FormControl>{input}</FormControl>
          // </FormItem>
        )}
      ></FormField>
    );
  });
};

export default EditFields;
