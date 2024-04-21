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
export type EditListingFormData = z.infer<ReturnType<typeof getSchema>>;

type Props = {
  listingId?: number;
  defaultValues: Pick<
    CarListing,
    "brandId" | "modelId" | "description" | "mileage" | "price" | "year"
  >;
  onEdit: (edited: Pick<CarListing, "id"> & EditListingFormData) => void;
};
const EditListingForm: FC<Props> = ({ defaultValues, onEdit }) => {
  const { filterData, editOptions } = useDashboardStore((store) => ({
    filterData: store.filterData!,
    editOptions: store.editListingOptions,
  }));

  const schema = useMemo(() => getSchema(filterData), [filterData]);

  const form = useForm<z.infer<typeof schema>>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const handleEdit = useCallback((formData: EditListingFormData) => {
    console.log("editForm submitted");
    onEdit({ id: 34346721, ...formData });
  }, []);

  const { description } = form.watch();
  useEffect(() => {
    if (defaultValues.description === description) return;

    const autosaveCb = form.handleSubmit(handleEdit);
    autosaveCb();
  }, [description]);

  const fields = useMemo(() => {
    return Object.keys(editableListingFields).map((fieldName) => {
      const key = fieldName as keyof typeof editableListingFields

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
        className="space-y-6"
      >
        {fields}
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
