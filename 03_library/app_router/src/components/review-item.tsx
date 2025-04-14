import { ReviewData } from "@/types";
import style from "./review-item.module.css";

const ReviewItem = ({ id, content, author, createdAt, bookId }: ReviewData) => {
  return (
    <div>
      <div className="">{author}</div>
      <div className="">{content}</div>
      <div className="">
        <div className="">{new Date(createdAt).toLocaleString()}</div>
        <div className="">삭제하기</div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ReviewItem;
