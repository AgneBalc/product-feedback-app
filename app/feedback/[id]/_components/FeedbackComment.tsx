import Image from "next/image";
import Button from "@/components/ui/Button";
import { Comment, User } from "@prisma/client";

type ExtendedComment = Comment & {
  author: User;
};

interface CommentProps {
  comment: ExtendedComment;
  feedbackId: string;
}

const FeedbackComment = ({ comment, feedbackId }: CommentProps) => {
  return (
    <div className="flex flex-col gap-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image
            src={
              comment.author.image ||
              "https://cdn.imgbin.com/3/5/9/imgbin-computer-icons-user-profile-user-account-avatar-TfT3FkAEbgD76My1GynmW5KzT.jpg"
            }
            alt={comment.author.name}
            width={40}
            height={40}
            className="rounded-[40px]"
          />
          <div className="text-[13px]">
            <h4 className="font-bold">{comment.author.name}</h4>
            <span className="text-gray">{comment.author.username}</span>
          </div>
        </div>
        <Button className="text-blue hover:underline">Reply</Button>
      </div>
      <p className="text-gray text-[13px]">{comment.content}</p>
    </div>
  );
};

export default FeedbackComment;
