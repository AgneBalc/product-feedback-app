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
