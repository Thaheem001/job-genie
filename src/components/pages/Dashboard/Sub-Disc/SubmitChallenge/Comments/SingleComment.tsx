import React, { useState } from "react";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import CommentInput from "./CommentInput";
import ReplyComments from "./ReplyComments";
import { CommentDocument } from "..";
import CustomTimeAgo from "../../../../../shared/CustomTimeAgo";
import { useSelector } from "react-redux";

type SingleCommentProp = CommentDocument & {};

const SingleComment = ({ comment, createdAt, childId, _id, commentedBy }: SingleCommentProp) => {
  const [isVisibleComment, setIsVisibleComment] = useState<boolean>(false);
  const [hasChild, setHasChild] = useState<boolean>(true);
  const [childComments, setChildComments] = useState<CommentDocument[]>();
  const state: any = useSelector<any>(state => state.UserInfo.userTokken)

  const addComment = async (dataToAdd: any) => {
    const APIURL = process.env.NODE_ENV === "development" ? "http://localhost:3001" : process.env.REACT_APP_API_URL;
    try {
      const commentToAdd = {
        comment: {
          comment: dataToAdd.comment,
          commentedBy: dataToAdd.commentedBy,
        },
        replyToId: _id,
      };

      const dataSnap = await fetch(`${APIURL}/api/replyToComment`, {
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify(commentToAdd),
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const { data }: any = await dataSnap.json();
      // setChildComments((prev) => [data.addedComment, ...prev]);
    } catch (error) {
      console.log(error);
    }

    setIsVisibleComment(false);
  };
  return (
    <>
      <li className={`${hasChild && "has-child"} `}>
        <div className="comment-main-level">
          {/* Avatar */}
          {/* <div className="comment-avatar"><img src="https://picsum.photos/200" alt="" /></div> */}
          {/* Contenedor del Comentario */}
          <div className="comment-box">
            <div className="comment-head">
              <h6 className="comment-name ">{commentedBy?.fullName ? commentedBy?.fullName : state?.fullName}</h6>
              <span>
                <CustomTimeAgo date={createdAt} />
              </span>
              <i className="fa fa-reply" />
              <i className="fa fa-heart" />
              <button
                className="replyButton"
                title="Reply to this Comment"
                onClick={() =>
                  isVisibleComment
                    ? setIsVisibleComment(false)
                    : setIsVisibleComment(true)
                }
              >
                <ReplyAllIcon />
              </button>
            </div>
            <div className="comment-content">{comment}</div>
          </div>
        </div>
        {/* Respuestas de los comentarios */}

        <ul className="comments-list reply-list">
          {childId?.length > 0 &&
            childId?.map((item: CommentDocument, index: number) => {
              // console.log(item);
              return (
                (
                  <ReplyComments {...item} key={index} userName={state?.fullName} />
                )
              )
            })}
        </ul>
      </li>
      {isVisibleComment && (
        <div className="inner-comment mb-3">
          <CommentInput addComment={addComment} />
        </div>
      )}
    </>
  );
};

export default SingleComment;
