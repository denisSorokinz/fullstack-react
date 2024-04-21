"use client";

import { FormControl, FormItem, FormLabel } from "@/components/shadcn/form";
import { cn } from "@/lib/utils";
import { FC, forwardRef } from "react";
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
} from "@radix-ui/react-select";

type Props = {
  field: Omit<ControllerRenderProps<EditListingFormData>, "ref">;
  fieldMeta: EditableField;
  name: editableFieldsType;
  className?: string;
  brandId: number;
};

const EditableFormItem = forwardRef<HTMLDivElement, Props>(
  ({ field, fieldMeta, name, className, brandId }, ref) => {
    const { filterData, editOptions } = useDashboardStore((store) => ({
      filterData: store.filterData!,
      editOptions: store.editListingOptions,
    }));

    let input: JSX.Element = <></>;

    if (fieldMeta.type === "select") {
      const tMeta = fieldMeta as EditableSelectField;
      let options = editOptions[tMeta.dashboardStoreOptionsKey];
      if (!Array.isArray(options) && options.get(brandId))
        options = options.get(brandId)!;

      let content: JSX.Element = <></>;
      let disabled = true;
      if ((options as FilterOption[]).length === 0)
        content = <span>0 опцiй</span>;

      if ((options as FilterOption[]).length > 0) {
        disabled = false;
        content = (
          <>
            {(options as FilterOption[]).map((opt) => (
              <SelectItem key={opt.id} value={`${opt.id}`}>
                {opt.name}
              </SelectItem>
            ))}
          </>
        );
      }

      input = (
        <Select
          disabled={disabled}
          onValueChange={field.onChange}
          defaultValue={`${field.value}`}
        >
          <SelectTrigger className="w-[280px] dark:text-slate-700">
            <SelectValue
              className="dark:text-slate-700"
              placeholder={`${fieldMeta.displayName}...`}
            />
          </SelectTrigger>
          <SelectContent>{content}</SelectContent>
        </Select>
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

export default EditableFormItem;
