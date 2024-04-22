import React, { FC, memo, useMemo } from "react";
import { FilterOption } from "@/types/filters";
import { useDashboardStore } from "@/stores/dashboard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { EditableSelectField } from "@/types/forms";
import { CarListing } from "@/types/listings";

type Props = {
  onChange: (...event: any[]) => void;
  value: FilterOption["id"];
  fieldMeta: EditableSelectField;
  parentValue?: number;
};
const EditSelect: FC<Props> = ({
  onChange,
  value,
  fieldMeta,
  parentValue: brandId,
}) => {
  const { editOptions } = useDashboardStore((store) => ({
    editOptions: store.editListingOptions,
  }));

  const options = useMemo(() => {
    let optns = editOptions[fieldMeta.dashboardStoreOptionsKey];

    if (!Array.isArray(optns)) {
      optns =
        (optns as Map<CarListing["brandId"], FilterOption[]>).get(
          brandId || -1
        ) || [];
    }

    return optns;
  }, [editOptions, brandId]);

  let content: JSX.Element = <></>;
  let disabled = true;
  if ((options as FilterOption[]).length === 0) content = <span>0 опцiй</span>;

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

  return (
    <Select
      disabled={disabled}
      onValueChange={onChange}
      defaultValue={`${value}`}
    >
      <SelectTrigger className="dark:text-slate-700">
        <SelectValue
          className="dark:text-slate-700"
          placeholder={`${fieldMeta.displayName}...`}
        />
      </SelectTrigger>
      <SelectContent>{content}</SelectContent>
    </Select>
  );
};

export default memo(
  EditSelect,
  (
    { parentValue: prevParentValue, value: prevValue },
    { parentValue: nextParentValue, value: nextValue }
  ) => prevParentValue === nextParentValue && prevValue === nextValue
);
