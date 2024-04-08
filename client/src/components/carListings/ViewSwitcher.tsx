import React, { Dispatch, FC, SetStateAction } from "react";
import { Cards as CardsIcon, List as ListIcon } from "@/components/icons";
import { ListViewType } from "./List";
import { cn } from "@/lib/utils";

type Props = {
  view: ListViewType;
  setView: Dispatch<SetStateAction<Props["view"]>>;
};
const ViewSwitcher: FC<Props> = ({ view, setView }) => {
  return (
    <ul className="flex items-center justify-end gap-2">
      <li>
        <button onClick={() => setView("cards")}>
          <CardsIcon
            width={32}
            height={32}
            // fill={view === "cards" ? activeColor : color}
            stroke="transparent"
            className={cn("text-slate-700 transition", {
              "text-blue-500": view === "cards",
              "hover:text-blue-900": view !== "cards",
            })}
          />
        </button>
      </li>
      <li>
        <button onClick={() => setView("list")}>
          <ListIcon
            width={32}
            height={32}
            // fill={view === "list" ? activeColor : color}
            className={cn("text-slate-700 transition ", {
              "text-blue-500": view === "list",
              "hover:text-blue-900": view !== "list",
            })}
          />
        </button>
      </li>
    </ul>
  );
};

export default ViewSwitcher;
