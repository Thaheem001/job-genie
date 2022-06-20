import React from "react";
import { CommentDocument } from "..";
import CustomTimeAgo from "../../../../../shared/CustomTimeAgo";

type ReplyCommentProp = CommentDocument & {};

const ReplyComments = ({ comment, createdAt }: ReplyCommentProp) => {
  return (
    <>
      <li>
        {/* Avatar */}
        {/* <div className="comment-avatar"><img src="https://picsum.photos/200" alt="" /></div> */}
        {/* Contenedor del Comentario */}
        <div className="comment-box">
          <div className="comment-head">
            <h6 className="comment-name ">
              <a href="https://picsum.photos/200">Test</a>
            </h6>
            <span>
              <CustomTimeAgo date={createdAt} />
            </span>
            <i className="fa fa-reply" />
            <i className="fa fa-heart" />
          </div>
          <div className="comment-content">{comment}</div>
        </div>
      </li>
    </>
  );
};

export default ReplyComments;
