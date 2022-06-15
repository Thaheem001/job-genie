import React, { useState } from "react";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import CommentInput from "./CommentInput";
import ReplyComments from "./ReplyComments";

type Props = {
  comment: string;
  media?: string;
  commentedBy: string;
  childId: string[];
  replyCount: number;
  challengeId?: string;
};
type childArray = [any, any, any]

const SingleComment = ({ comment }: Props) => {
  const [isVisibleComment, setIsVisibleComment] = useState<boolean>(false);
  const [childComments, setChildComments] = useState<childArray>([1, 2, 3]);


  const addComment = async (dataToAdd: any) => {
    const dataSnap = await fetch("/api/addComment", {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        ...dataToAdd,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const cmData = await dataSnap.json();

    const newCommentToAdd = cmData.data.commentToAdd;

  };


  return (
    <>
      <li>
        <div className="comment-main-level">
          {/* Avatar */}
          {/* <div className="comment-avatar"><img src="https://picsum.photos/200" alt="" /></div> */}
          {/* Contenedor del Comentario */}
          <div className="comment-box">
            <div className="comment-head">
              <h6 className="comment-name ">
                <a href="#" className="d-inline-block">Test</a>
              </h6>
              <span>20 minutos</span>
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
          {childComments?.length > 0 &&
            childComments?.map((key) => (
              <ReplyComments key={key} />
            ))}
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
