import { SortOrderList } from "../lib/types";

export const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

export const status = [
  {
    name: "Suggestion",
    key: "SUGGESTIONS",
    bgColor: null,
  },
  {
    name: "Planned",
    key: "PLANNED",
    bgColor: "bg-orange",
  },
  {
    name: "In-Progress",
    key: "IN_PROGRESS",
    bgColor: "bg-purple",
  },
  {
    name: "Live",
    key: "LIVE",
    bgColor: "bg-blueLight",
  },
];

export const sortOrderList: SortOrderList[] = [
  {
    name: "Most Upvotes",
    orderBy: { upvotes: "desc" },
  },
  {
    name: "Least Upvotes",
    orderBy: { upvotes: "asc" },
  },
  {
    name: "Most Comments",
    orderBy: { comments: { _count: "desc" } },
  },
  {
    name: "Least Comments",
    orderBy: { comments: { _count: "asc" } },
  },
];
