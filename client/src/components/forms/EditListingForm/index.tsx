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
import { OnlyPropertiesLens } from "@/lib/lenses";
import { cn } from "@/lib/utils";
import { DashboardStoreState, useDashboardStore } from "@/stores/dashboard";
import { FILTER_NAMES, FilterOption, FiltersType } from "@/types/filters";
import { CarListing } from "@/types/listings";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, memo, useCallback, useEffect, useMemo, useRef } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { ZodDate, ZodNumber, ZodOptional, ZodString, z } from "zod";
import EditableFormItem from "./EditFormItem";

export type editableFieldsType =
  | "brandId"
  | "modelId"
  | "year"
  | "mileage"
  | "price"
  | "description";
const editableFieldsNames = [
  "description",
  'year',
  'mileage',
  'price',
  'brandId',
  'modelId'
];
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
  [k in editableFieldsType]?: EditableTextField | EditableSelectField;
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
export type EditListingFormData = z.infer<ReturnType<typeof getSchema>>;

const TestCmp = memo(
  ({ fieldName }: { fieldName: editableFieldsType }) => (
    <FormField
      key={`field-${fieldName}`}
      // control={form.control}
      name={fieldName as editableFieldsType}
      render={({ field: { ref, ...field } }) => (
        <EditableFormItem
          field={field}
          ref={ref}
          brandId={79}
          fieldMeta={editableFields[fieldName] as any}
          name={fieldName as editableFieldsType}
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
  ),
  () => true
);

type Props = {
  listingId?: number,
  defaultValues: Pick<
    CarListing,
    "brandId" | "modelId" | "description" | "mileage" | "price" | "year"
  >;
  onEdit: (edited: Pick<CarListing, "id"> & EditListingFormData) => void;
};
const EditListingForm: FC<Props> = ({ defaultValues, onEdit }) => {
  // filterData: props or context or zodStore?

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

  const mapped = useMemo(() => {
    console.log("list-render");

    return editableFieldsNames.map((fieldName: any) => (
      <FormField
        key={`field-${fieldName}`}
        control={form.control}
        name={fieldName}
        render={({ field: { ref, ...field } }) => (
          <EditableFormItem
            field={field}
            ref={ref}
            brandId={defaultValues.brandId}
            fieldMeta={(editableFields[fieldName] as any)!}
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
    ));
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleEdit, (err) => {
          console.log("edit form validation errors:", err);
        })}
        className="space-y-6"
      >
        {mapped}
        {/* <FormField
          key={`field-description`}
          control={form.control}
          name={"description"}
          render={({ field: { ref, ...field } }) => (
            <EditableFormItem
              field={field}
              ref={ref}
              brandId={defaultValues.brandId}
              fieldMeta={editableFields["description"]!}
              name={"description"}
              className={cn(noFlipClassName, "dark:text-slate-700")}
            />
            // <FormItem
            //   className={cn(noFlipClassName, "dark:text-slate-700")}
            // >
            //   <FormLabel>{editMetadata.displayName}</FormLabel>
            //   <FormControl>{input}</FormControl>
            // </FormItem>
          )}
        ></FormField> */}
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

export default memo(EditListingForm, () => true)
