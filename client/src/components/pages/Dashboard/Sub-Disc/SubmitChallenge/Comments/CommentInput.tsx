import React, { useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import CommentIcon from '@mui/icons-material/Comment';

type Props = {
  addComment: any;
};

const CommentInput = ({ addComment = () => { } }: Props) => {
  const [comment, setComment] = useState<string>();
  const [isUpload, setIsUplaod] = useState<string>();
  const handleChange = (e: any) => {
    var files = e.target.files;
    setIsUplaod(files[0]?.name);
  };
  const randomId = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);

  return (
    <div className="input-comment-and-attach-file mt-3">
      <div className="d-flex"><CommentIcon /> <h6 className="text-dark ml-3">Add a comment</h6></div>
      <form className="position-relative">
        <div className="input-container-with-btn ">
          <textarea
            name="msgBox"
            id=""
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write Comment or Upload file"
          ></textarea>
          <div className="btn-box d-flex ">
            <div className="d-flex">
              <label htmlFor={randomId}>
                <UploadFileIcon /> Upload File
              </label>
              <input
                type="file"
                name=""
                id={randomId}
                style={{ display: "none" }}
                onChange={(e) => handleChange(e)}
              />
              {/* attach file  div show */}
              {isUpload && (
                <div className="Upload-folder-name bg-success d-inline-flex ml-3">
                  <FolderZipIcon />
                  <span title={isUpload}>{isUpload}</span>
                </div>
              )}
            </div>
            <button name="fileName" type="submit" className="btn-own-input"
              onClick={(e) => {
                e.preventDefault();
                addComment({ comment });
              }}
            >Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
