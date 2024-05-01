import { cn } from "@/lib/utils";
import { PaginationMeta } from "@/types/http";
import React, { FC } from "react";

type Props = {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPaginate: (nextPage: number) => void;
};
const Pagination: FC<Props> = ({
  currentPage,
  pageSize,
  totalItems,
  onPaginate,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const pageSizeOptions = [
    { id: 1, value: 5 },
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 50 },
  ];

  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-2">
      <ul className="flex gap-2">
        {new Array(totalPages).fill(null).map((_, pageIdx) => (
          <li key={pageIdx}>
            <button
              className={cn(
                "rounded-md bg-slate-600 px-4 py-2 text-center font-bold text-slate-100 transition-colors hover:bg-slate-400",
                {
                  "cursor-default bg-blue-600 hover:bg-blue-600":
                    pageIdx + 1 === currentPage,
                }
              )}
              onClick={() => onPaginate(pageIdx + 1)}
            >
              {pageIdx + 1}
            </button>
          </li>
        ))}
      </ul>
      <span>Total: {totalItems}</span>
    </div>
  );
};

export default Pagination;
