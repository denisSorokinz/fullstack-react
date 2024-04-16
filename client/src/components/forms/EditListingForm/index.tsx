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
import { validateRange } from "@/lib/filters";
import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/stores/dashboard";
import { FILTER_NAMES, FiltersType } from "@/types/filters";
import { CarListing } from "@/types/listings";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useMemo } from "react";
import { useForm } from "react-hook-form";
import { ZodDate, ZodNumber, ZodOptional, ZodString, z } from "zod";

const getSchema = (filterData: FiltersType) =>
  z.object({
    brandId: z.number(),
    modelId: z.number(),
    description: z.string().optional(),
    createdAt: z.date().optional(),
    "year-from": validateRange(filterData, FILTER_NAMES.YEAR),
    "year-to": validateRange(filterData, FILTER_NAMES.YEAR),
    "mileage-from": validateRange(filterData, FILTER_NAMES.MILEAGE),
    "mileage-to": validateRange(filterData, FILTER_NAMES.MILEAGE),
    "price-from": validateRange(filterData, FILTER_NAMES.PRICE),
    "price-to": validateRange(filterData, FILTER_NAMES.PRICE),
  });

type Props = {
  initialListing: CarListing;
};
const EditListingForm: FC<Props> = ({ initialListing }) => {
  // filterData: props or context or zodStore?

  const { filterData } = useDashboardStore(store => ({ filterData: store.filterData! }))

  const schema = useMemo(() => getSchema(filterData), [filterData]);

  // todo: set empty strings where null
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: initialListing,
    resolver: zodResolver(schema),
  });

  function handleSubmit(formData: z.infer<typeof schema>) {
    console.log({ editFormData: formData });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="modelId"
          render={({ field }) => (
            <FormItem className={cn(noFlipClassName, 'text-slate-700')}>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>name: {field.name}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default EditListingForm;
