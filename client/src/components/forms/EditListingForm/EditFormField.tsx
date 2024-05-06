"use client";

import { FormControl, FormItem, FormLabel } from "@/components/shadcn/form";
import { cn } from "@/lib/utils";
import { FC, forwardRef, memo, useEffect, useMemo } from "react";
import { EditListingFormData } from ".";
import { Control, ControllerRenderProps } from "react-hook-form";
import { Textarea } from "@/components/shadcn/textarea";
import { useDashboardStore } from "@/stores/dashboard";
import { Input } from "@/components/shadcn/input";
import { FilterOption } from "@/types/filters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import EditSelect from "./EditSelect";
import { EditableField, EditableSelectField } from "@/types/forms";
import { editableListingFields } from "@/constants";
import { CarListing } from "@/types/listings";

type Props = {
  field: Omit<ControllerRenderProps<EditListingFormData>, "ref">;
  fieldMeta: EditableField;
  name: keyof typeof editableListingFields;
  parentValue?: number;
  className?: string;
  control: Control<EditListingFormData>;
  clearDependency?: (() => void) | null;
  populateModelOptions?: (brandId: number) => void;
  selectOptions?: FilterOption[];
};

const EditFormField = forwardRef<HTMLElement, Props>(
  (
    {
      field,
      fieldMeta,
      name,
      className,
      parentValue,
      populateModelOptions,
      clearDependency,
    },
    ref
  ) => {
    const brandId = Number(parentValue || -1);

    const { filterData, editOptions } = useDashboardStore((store) => ({
      filterData: store.filterData!,
      editOptions: store.editListingOptions,
    }));

    // logger(debugId, { selectOptions });

    let input: JSX.Element = <></>;

    let selectOptions: any;
    if (fieldMeta.type === "select") {
      selectOptions = editOptions[fieldMeta.dashboardStoreOptionsKey];

      if (!Array.isArray(selectOptions)) {
        selectOptions =
          (selectOptions as Map<CarListing["brandId"], FilterOption[]>).get(
            brandId
          ) || [];
      }

      input = (
        <EditSelect
          key={`${name}-select`}
          value={field.value as number}
          fieldMeta={fieldMeta}
          options={selectOptions || []}
          onChange={async (nextValue: string) => {
            if (populateModelOptions) {
              console.log("populating options for:", nextValue);
              await populateModelOptions(+nextValue);
            }
            // populateModelOptions && ();

            field.onChange(nextValue);

            clearDependency && clearDependency();
          }}
        />
      );
    }

    if (fieldMeta.type === "number") {
      let min: number | undefined = undefined;
      let max: number | undefined = undefined;

      const filter = Object.values(filterData).find(
        (filter) => filter.slug === name
      );
      if (filter?.type === "range") {
        min = filter.from;
        max = filter.to;
      }

      input = (
        <Input
          placeholder={`${fieldMeta.displayName}...`}
          type={fieldMeta.type}
          min={min}
          max={max}
          {...field}
          ref={ref as any}
        />
      );
    }

    if (fieldMeta.type === "textarea") {
      input = <Textarea rows={10} {...field} ref={ref as any} />;
    }
    return (
      <FormItem className={className}>
        <FormLabel>{fieldMeta.displayName}</FormLabel>
        <FormControl>{input}</FormControl>
      </FormItem>
    );
  }
);

export default EditFormField;
