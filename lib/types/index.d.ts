import { STATUS } from "@prisma/client";
export type SortOrder = "asc" | "desc";

export type SortBy =
  | {
      comments: {
        _count: SortOrder;
      };
    }
  | {
      upvotes: SortOrder;
    }
  | undefined;

export type SortOrderList = { name: string; orderBy: SortBy };

type StatusName = "Suggestion" | "Planned" | "In-Progress" | "Live";

export type Status = {
  name: StatusName;
  key: STATUS;
  bgColor: string | null;
};
