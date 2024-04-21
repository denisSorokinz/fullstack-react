"use client";

import { FormControl, FormItem, FormLabel } from "@/components/shadcn/form";
import { cn } from "@/lib/utils";
import { FC, forwardRef, memo, useEffect } from "react";
import {
  EditListingFormData,
  EditableField,
  EditableSelectField,
  editableFieldsType,
} from ".";
import { ControllerRenderProps } from "react-hook-form";
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

type Props = {
  field: Omit<ControllerRenderProps<EditListingFormData>, "ref">;
  fieldMeta: EditableField;
  name: editableFieldsType;
  className?: string;
  brandId: number;
};

const EditableFormItem = forwardRef<HTMLDivElement, Props>(
  ({ field, fieldMeta, name, className, brandId }, ref) => {
    console.log("formitem render");

    const { filterData, editOptions } = useDashboardStore((store) => ({
      filterData: store.filterData!,
      editOptions: store.editListingOptions,
    }));

    let input: JSX.Element = <></>;

    if (fieldMeta.type === "select") {
      input = (
        <EditSelect
          fieldMeta={fieldMeta}
          onChange={field.onChange}
          value={`${field.value}`}
          placeholder="test"
          key={fieldMeta.displayName}
          parentValue={79}
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

export default memo(EditableFormItem, () => true);
