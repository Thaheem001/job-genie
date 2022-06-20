import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../../layout/DashboardLayout";
import CommentsHistory from "./Comments";
import SingleComment from "./Comments/SingleComment";
// import ReplyComments from "./Comments/ReplyComments";
import ProfileDetails from "./ProfileDetails";
import CommentInput from "./Comments/CommentInput";
import { Link } from "react-router-dom";
import ProjectCard from "../../SourceCode/ProjectCard";

export type CommentDocument = {
  _id: string;
  comment: string;
  media?: string;
  commentedBy: string;
  childId: CommentDocument[];
  replyCount: number;
  challengeId?: string;
  createdAt: number;
  updatedAt: number;
};

type Props = {
  comments?: CommentDocument[];
};

const SubmitChallenge = ({ comments = [] }: Props) => {
  const APIURL = process.env.REACT_APP_API_URL;
  const fetchComments = async () => {
    try {
      const commentsSnap = await fetch(`${APIURL}/api/getChallengeComments`);
      const oldComments = await commentsSnap.json();

      setCommentsState(oldComments.data);
    } catch (error) {
      console.log(error);
    }
    setLoadingComments(false);
  };

  const addComment = async (dataToAdd: any) => {
    const dataSnap = await fetch(`${APIURL}/api/addComment`, {
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

    const newCommentToAdd = cmData.data.addedComment;

    setCommentsState((prev) => [...prev, newCommentToAdd]);
  };

  const [loadingComments, setLoadingComments] = useState<boolean>(true);

  const [commentsState, setCommentsState] = useState<CommentDocument[]>(
    comments
  );

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <DashboardLayout>
      <>
        <h1 className="text-light text-center">Submit Challenge</h1>
        <div className="container-fluid text-light mt-3">
          <div className="row">
            <div className="col-lg-9 ">
              <div className="row">
                <ProfileDetails />
                <div className="col-12 my-3">
                  {/* Contenedor Principal */}
                  <div className="comments-container">
                    <h4 className="text-light">Comments & Feedback :</h4>
                    {/* comment input box start  */}
                    <CommentInput addComment={addComment} />
                    {/* comment input box end */}
                    {!loadingComments && (
                      <CommentsHistory>
                        <>
                          {commentsState?.length > 0 &&
                            commentsState?.map((comment, key) => (
                              <SingleComment {...comment} key={key} />
                            ))}
                        </>
                      </CommentsHistory>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 text-center overflow-auto h-100">
              <h4 className="text-light">Other Challenges</h4>
              <div className="d-inline-block my-3">
                <ProjectCard
                  ownerImage="https://avatars.githubusercontent.com/u/73527767?v=4"
                  ownerName="DaudSamim"
                  ownerUrl=""
                  repoDesc="This is Javascript built dashboard like topCoder platform"
                  repoLanguage=""
                  repoName="JS_Job_Genie_Dashboard"
                  repoUrls="https://github.com/DaudSamim/JS_Job_Genie_Dashboard"
                />
              </div>
              <div className="d-inline-block my-3">
                <ProjectCard
                  ownerImage="https://avatars.githubusercontent.com/u/73527767?v=4"
                  ownerName="DaudSamim"
                  ownerUrl=""
                  repoDesc="This is Javascript built dashboard like topCoder platform"
                  repoLanguage=""
                  repoName="JS_Job_Genie_Dashboard"
                  repoUrls="https://github.com/DaudSamim/JS_Job_Genie_Dashboard"
                />
              </div>
              <div className="d-inline-block my-3">
                <ProjectCard
                  ownerImage="https://avatars.githubusercontent.com/u/73527767?v=4"
                  ownerName="DaudSamim"
                  ownerUrl=""
                  repoDesc="This is Javascript built dashboard like topCoder platform"
                  repoLanguage=""
                  repoName="JS_Job_Genie_Dashboard"
                  repoUrls="https://github.com/DaudSamim/JS_Job_Genie_Dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </DashboardLayout>
  );
};

export default SubmitChallenge;
