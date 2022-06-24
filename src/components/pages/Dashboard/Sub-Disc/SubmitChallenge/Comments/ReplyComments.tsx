import React, { useState } from "react";
import { CommentDocument } from "..";
import CustomTimeAgo from "../../../../../shared/CustomTimeAgo";
import UserProfileModal from "./UserProfileModal";

export type ReplyCommentProp = CommentDocument & {};

const ReplyComments = ({ comment, createdAt, commentedBy, userName }: ReplyCommentProp) => {
  // console.log(commentedBy?.fullName)

  // show user info modal 
  const [openChangePass, setOpenChangePass] = useState<boolean>(false);
  const ShowUserModal = () => setOpenChangePass(true);
  const HideUserModal = () => setOpenChangePass(false);
  return (
    <>
      <li>
        {/* Avatar */}
        {/* <div className="comment-avatar"><img src="https://picsum.photos/200" alt="" /></div> */}
        {/* Contenedor del Comentario */}
        <div className="comment-box">
          <div className="comment-head">
            <h6 className="comment-name pointer" onClick={ShowUserModal}>{commentedBy?.fullName ? commentedBy?.fullName : userName}</h6>
            <span>
              <CustomTimeAgo date={createdAt} />
            </span>
            <i className="fa fa-reply" />
            <i className="fa fa-heart" />
          </div>
          <div className="comment-content">{comment}</div>
          <UserProfileModal openModal={openChangePass} hideModal={HideUserModal} userInfo={commentedBy} />
        </div>
      </li>
    </>
  );
};

export default ReplyComments;
