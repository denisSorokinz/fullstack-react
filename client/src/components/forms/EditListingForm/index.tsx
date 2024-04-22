"use client";

import { noFlipClassName } from "@/components/FlipBox";
import { Button } from "@/components/shadcn/button";
import { Form, FormField } from "@/components/shadcn/form";
import { validateRange } from "@/lib/filters";
import { cn } from "@/lib/utils";
import { DashboardStoreState, useDashboardStore } from "@/stores/dashboard";
import { FILTER_NAMES, FilterOption, FiltersType } from "@/types/filters";
import { CarListing } from "@/types/listings";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, memo, useCallback, useEffect, useMemo, useRef } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { ZodDate, ZodNumber, ZodOptional, ZodString, z } from "zod";
import EditFormField from "./EditFormField";
import { editableListingFields } from "@/constants";
import { LoadingSpinner, Trash } from "@/components/icons";

const getSchema = (filterData: FiltersType) =>
  z.object({
    brandId: z.coerce.number(),
    modelId: z.coerce.number(),
    description: z.string().optional(),
    // createdAt: z.date().optional(),
    year: validateRange(filterData, FILTER_NAMES.YEAR),
    mileage: validateRange(filterData, FILTER_NAMES.MILEAGE),
    price: validateRange(filterData, FILTER_NAMES.PRICE),
  });
export type EditListingFormData = z.infer<ReturnType<typeof getSchema>>;

type Props = {
  listingId: number;
  defaultValues: Pick<
    CarListing,
    "brandId" | "modelId" | "description" | "mileage" | "price" | "year"
  >;
  onEdit: (edited: Pick<CarListing, "id"> & EditListingFormData) => void;
  onDelete: () => void;
};
const EditListingForm: FC<Props> = ({ listingId, defaultValues, onEdit, onDelete }) => {
  const { filterData, isPendingEdit } = useDashboardStore((store) => ({
    filterData: store.filterData!,
    isPendingEdit: store.editListingOptions.isPending,
  }));

  const schema = useMemo(() => getSchema(filterData), [filterData]);

  const form = useForm<z.infer<typeof schema>>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const handleEdit = useCallback((formData: EditListingFormData) => {
    console.log("editForm submitted");
    onEdit({ id: listingId, ...formData });
  }, []);

  const { brandId, modelId, year, price, mileage, description } = form.watch();
  useEffect(() => {
    if (
      defaultValues.brandId === brandId &&
      defaultValues.modelId === modelId &&
      defaultValues.year === year &&
      defaultValues.price === price &&
      defaultValues.mileage === mileage &&
      defaultValues.description === description
    ) {
      return;
    }

    const autosaveCb = form.handleSubmit(handleEdit);
    autosaveCb();
  }, [brandId, modelId, year, price, mileage, description]);

  const fields = useMemo(() => {
    return Object.keys(editableListingFields).map((fieldName) => {
      const key = fieldName as keyof typeof editableListingFields;

      return (
        <FormField
          key={`field-${fieldName}`}
          control={form.control}
          name={key}
          render={({ field: { ref, ...field } }) => (
            <EditFormField
              control={form.control}
              field={field}
              ref={ref}
              parentValue={defaultValues.brandId}
              fieldMeta={(editableListingFields[key] as any)!}
              name={key}
              className={cn(noFlipClassName, "dark:text-slate-700")}
            />
          )}
        ></FormField>
      );
    });
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleEdit, (err) => {
          console.log("edit form validation errors:", err);
        })}
        className="relative space-y-4"
      >
        {fields}
        <Button className="flex w-full items-center gap-2 rounded-md bg-slate-600 p-2 uppercase tracking-wide text-slate-100 hover:bg-slate-700" onClick={onDelete}>
          <i className="flex items-center">
            <Trash width={18} height={18} stroke="#fff" />
          </i>
          <span className="relative top-[1px]">Delete</span>
        </Button>
        {isPendingEdit && (
          <span className="absolute bottom-0 left-0 flex w-full items-center justify-center gap-2 bg-slate-500 px-2 py-4  text-slate-100 shadow-lg">
            <i className="flex items-center">
              <LoadingSpinner width={16} height={16} />
            </i>
            autosaving...
          </span>
        )}
      </form>
    </Form>
  );
};

export default memo(
  EditListingForm,
  (prev, next) => prev.listingId === next.listingId
);
