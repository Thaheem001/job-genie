import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../../layout/DashboardLayout";
import CommentsHistory from "./Comments";
import SingleComment from "./Comments/SingleComment";
import ProfileDetails from "./ProfileDetails";
import CommentInput from "./Comments/CommentInput";
import { useDispatch } from "react-redux";
import { changeHeading } from "../../../../../features/HeaderHeading/HeaderHeadingSlice";

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
  const APIURL = process.env.NODE_ENV === "development" ? "http://localhost:3001" : process.env.REACT_APP_API_URL;
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
      method: "POST",
      body: JSON.stringify({
        ...dataToAdd,
      }),
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
  // dispatch update 
  const dispatch = useDispatch();
  dispatch(changeHeading('Submit Challenge'));

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <DashboardLayout>
      <>
        {/* <h1 className="text-light text-center">Submit Challenge</h1> */}
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


              {/* <div className="challenge-card-sidebar">
                <div className="level-or-price">
                  <div className="text-danger text-right">Level : Easy</div>
                </div>
                <div className="top-img">
                  <img src={'https://picsum.photos/600'} alt="task_logo" className='card-logo' draggable={false} />
                </div>

              </div> */}




            </div>
          </div>
        </div>
      </>
    </DashboardLayout>
  );
};

export default SubmitChallenge;
