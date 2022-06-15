import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../../layout/DashboardLayout";
import CommentsHistory from "./Comments";
import SingleComment from "./Comments/SingleComment";
// import ReplyComments from "./Comments/ReplyComments";
import ProfileDetails from "./ProfileDetails";
import CommentInput from "./Comments/CommentInput";

type CommentDocument = {
  comment: string;
  media?: string;
  commentedBy: string;
  childId: string[];
  replyCount: number;
  challengeId?: string;
};

type Props = {
  comments?: CommentDocument[];
};

const SubmitChallenge = ({ comments = [] }: Props) => {
  const fetchComments = async () => {
    try {
      const commentsSnap = await fetch("/api/getChallengeComments");
      const oldComments = await commentsSnap.json();

      console.log(oldComments);

      setCommentsState(oldComments.data);
    } catch (error) {
      console.log(error);
    }
    setLoadingComments(false);
  };

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
                          {/* <SingleComment>
                          <>
                            <ReplyComments />
                            <ReplyComments />
                            <ReplyComments />
                          </>
                        </SingleComment>
                        <SingleComment />
                        <SingleComment />
                        <SingleComment>
                          <>
                            <ReplyComments />
                            <ReplyComments />
                            <ReplyComments />
                          </>
                        </SingleComment>
                        <SingleComment /> */}
                        </>
                      </CommentsHistory>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-3 text-center overflow-auto h-100">
                            <h4 className="text-light">Other Challenges</h4>
                            <Link to={'#'} className="d-inline-block my-3">
                                <ProjectCard />
                            </Link>
                            <Link to={'#'} className="d-inline-block my-3">
                                <ProjectCard />
                            </Link>
                            <Link to={'#'} className="d-inline-block my-3">
                                <ProjectCard />
                            </Link>
                        </div> */}
          </div>
        </div>
      </>
    </DashboardLayout>
  );
};

export default SubmitChallenge;
