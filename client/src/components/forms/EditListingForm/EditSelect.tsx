import React, { FC, memo } from "react";
import { EditableSelectField } from ".";
import { Select, SelectItem, SelectTrigger } from "@radix-ui/react-select";
import { FilterOption } from "@/types/filters";
import { useDashboardStore } from "@/stores/dashboard";
import { SelectContent, SelectValue } from "@/components/shadcn/select";

type Props = {
  onChange: (...event: any[]) => void;
  value: string;
  placeholder: string;
  fieldMeta: EditableSelectField;
  parentValue?: number;
};
const EditSelect: FC<Props> = ({
  onChange,
  value,
  placeholder,
  fieldMeta,
  parentValue: brandId,
}) => {
  const { editOptions } = useDashboardStore((store) => ({
    editOptions: store.editListingOptions,
  }));

  const tMeta = fieldMeta as EditableSelectField;
  let options = editOptions[tMeta.dashboardStoreOptionsKey];
  if (!Array.isArray(options)) options = options.get(brandId || -1)! || [];

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
      <SelectTrigger className="w-[280px] dark:text-slate-700">
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
  ({ parentValue: prevValue }, { parentValue: nextValue }) =>
    prevValue === nextValue
);
