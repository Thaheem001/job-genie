import React, { useState } from "react";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import FolderZipIcon from "@mui/icons-material/FolderZip";

type Props = {
  addComment: any;
};

const CommentInput = ({ addComment = () => {} }: Props) => {
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
    <>
      <form className="position-relative">
        {isUpload && (
          <div className="Upload-folder-name bg-success d-inline-flex ">
            <FolderZipIcon />
            {isUpload}
          </div>
        )}
        <div className="input-container-with-btn d-flex align-items-center">
          <textarea
            name="msgBox"
            id=""
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write Comment or Upload file"
          ></textarea>
          <button
            name="fileName"
            type="submit"
            className="btn-own"
            onClick={(e) => {
              e.preventDefault();
              addComment({ comment });
            }}
          >
            Send / Upload
          </button>
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
        </div>
      </form>
    </>
  );
};

export default CommentInput;
