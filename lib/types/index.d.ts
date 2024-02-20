import { STATUS } from "@prisma/client";
import { ExtendedComment, ExtendedFeedback } from "@/lib/types/db";
import { ButtonHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
import { FieldError, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { CreateCommentType } from "../validators/comment";

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
  bgColor: string;
  borderColor: string;
  hover: string;
  description: string;
};

export interface FeedbackPageProps {
  params: { id: string };
}

export interface SuggestionsPageProps {
  searchParams: { [key: string]: string | undefined };
}

export interface ActionBarProps {
  totalFeedbacks: number;
}

export interface SortByButtonProps {
  noSuggestions: boolean;
}

export interface CommentCardProps {
  comment: ExtendedComment;
  replyToUsername?: string;
}

export interface CommentReplyProps {
  feedbackId: string;
  commentId: string;
  className?: string;
}

export interface CommentsSectionProps {
  feedbackId: string;
  replyToComment?: ExtendedComment;
  replyToUsername?: string;
}

export interface FeedbackCardProps {
  feedback: ExtendedFeedback;
  isDetailPage?: boolean;
}

export interface UserUpvotesProps {
  votesAmount: number;
  className?: string;
  feedback: ExtendedFeedback;
}

export interface AddCommentFormProps {
  feedbackId: string;
  replyToId?: string;
  onReply?: () => void;
}

export interface EditFeedbackFormProps {
  feedback: ExtendedFeedback;
}

export interface FilterProps {
  onCloseMenu?: () => void;
}

export type StatusList = Status & {
  feedbacks: ExtendedFeedback[];
};

export interface FeedbackListConatinerProps {
  statusList: StatusList[];
}

export interface RoadmapFeedbackCardProps {
  status: StatusList;
  feedback: ExtendedFeedback;
}

export interface FormWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  image: string;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface FormDropdownProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  itemsList: string[];
  label: string;
  description?: string;
  name: string;
  error?: FieldError;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: FieldError;
}

export interface TextFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: FieldError;
}

export interface LabelProps {
  label?: string;
  description?: string;
}

export interface createCommentProps {
  formData: CreateCommentType;
  feedbackId: string;
  replyToId?: string;
}
