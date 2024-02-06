import { SortOrderList, Status } from "../lib/types";

export const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

export const statusList: Status[] = [
  {
    name: "Suggestion",
    key: "SUGGESTIONS",
    bgColor: "",
    borderColor: "",
    hover: "",
    description: "",
  },
  {
    name: "Planned",
    key: "PLANNED",
    bgColor: "bg-orange",
    borderColor: "border-orange",
    hover: "hover:border-orange",
    description: "Ideas prioritized for research",
  },
  {
    name: "In-Progress",
    key: "IN_PROGRESS",
    bgColor: "bg-purple",
    borderColor: "border-purple",
    hover: "hover:border-purple",
    description: "Currently being developed",
  },
  {
    name: "Live",
    key: "LIVE",
    bgColor: "bg-blueLight",
    borderColor: "border-blueLight",
    hover: "hover:border-blueLight",
    description: "Released features",
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
