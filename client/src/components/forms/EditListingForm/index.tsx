"use client";

import { noFlipClassName } from "@/components/FlipBox";
import { Button } from "@/components/shadcn/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { Textarea } from "@/components/shadcn/textarea";
import { validateRange } from "@/lib/filters";
import { cn } from "@/lib/utils";
import { DashboardStoreState, useDashboardStore } from "@/stores/dashboard";
import { FILTER_NAMES, FilterOption, FiltersType } from "@/types/filters";
import { CarListing } from "@/types/listings";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useMemo } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { ZodDate, ZodNumber, ZodOptional, ZodString, z } from "zod";

type editableFields =
  | "brandId"
  | "modelId"
  | "year"
  | "mileage"
  | "price"
  | "description";
type EditableField = {
  type: "textarea" | "number";
  displayName: string;
};
type EditableSelectField = {
  type: "select";
  displayName: string;
  dashboardStoreOptionsKey: keyof DashboardStoreState["editListingOptions"];
};
const editableFields: {
  [k in editableFields]?: EditableField | EditableSelectField;
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
const getSchema = (filterData: FiltersType) =>
  z.object({
    brandId: z.number(),
    modelId: z.number(),
    description: z.string().optional(),
    // createdAt: z.date().optional(),
    year: validateRange(filterData, FILTER_NAMES.YEAR),
    mileage: validateRange(filterData, FILTER_NAMES.MILEAGE),
    price: validateRange(filterData, FILTER_NAMES.PRICE),
  });

type Props = {
  listing: CarListing;
};
const EditListingForm: FC<Props> = ({ listing }) => {
  // filterData: props or context or zodStore?

  const { filterData, editOptions } = useDashboardStore((store) => ({
    filterData: store.filterData!,
    editOptions: store.editListingOptions,
  }));

  const schema = useMemo(() => getSchema(filterData), [filterData]);

  // todo: set empty strings where null
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: listing,
    resolver: zodResolver(schema),
  });

  function handleSubmit(formData: z.infer<typeof schema>) {
    console.log({ editFormData: formData });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {Object.keys(listing).map((field) => {
          if (!(editableFields as any)[field]) return null;

          const key = field as keyof typeof editableFields;
          const editMetadata = editableFields[key]!;

          const editableProperty = field as keyof typeof editableFields;

          let input: (
            field?: ControllerRenderProps<
              z.infer<typeof schema>,
              typeof editableProperty
            >
          ) => JSX.Element | null = () => null;

          if (editMetadata.type === "select") {
            const tMeta = editMetadata as EditableSelectField;
            let options = editOptions[tMeta.dashboardStoreOptionsKey];
            if (!Array.isArray(options) && options.get(listing.brandId))
              options = options.get(listing.brandId)!;

            let content: JSX.Element;
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

            input = () => (
              <Select
                disabled={disabled}
                onValueChange={() => {
                  // todo: handle change
                }}
                value={`${listing[editableProperty]}`}
              >
                <SelectTrigger className="w-[280px] dark:text-slate-700">
                  <SelectValue
                    className="dark:text-slate-700"
                    placeholder={`${editMetadata.displayName}...`}
                  />
                </SelectTrigger>
                <SelectContent>{content}</SelectContent>
              </Select>
            );
          }

          if (editMetadata.type === "number") {
            let min: number;
            let max: number;

            const filter = Object.values(filterData).find(
              (filter) => filter.slug === editableProperty
            );
            if (filter?.type === "range") {
              min = filter.from;
              max = filter.to;
            }

            input = (field) => (
              <Input
                placeholder={`${editMetadata.displayName}...`}
                type={editMetadata.type}
                min={min}
                max={max}
                {...field}
              />
            );
          }

          if (editMetadata.type === "textarea") {
            input = (field) => {
              let rows;
              if (field && field.value && typeof field.value === "string")
                rows = 10;

              return <Textarea rows={rows} {...field} />;
            };
          }

          return (
            <FormField
              control={form.control}
              name={editableProperty}
              render={({ field }) => (
                <FormItem
                  className={cn(noFlipClassName, "dark:text-slate-700")}
                >
                  <FormLabel>{editMetadata.displayName}</FormLabel>
                  <FormControl>{input(field)}</FormControl>
                </FormItem>
              )}
            ></FormField>
          );
        })}
        <Button
          type="submit"
          className={cn(
            noFlipClassName,
            "bg-slate-700 text-slate-100 hover:bg-slate-600"
          )}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default EditListingForm;
