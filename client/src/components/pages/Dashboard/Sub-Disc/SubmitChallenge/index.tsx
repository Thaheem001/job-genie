import React from "react";
import DashboardLayout from "../../../../layout/DashboardLayout";
import CommentsHistory from "./Comments";
import SingleComment from "./Comments/SingleComment";
import ReplyComments from "./Comments/ReplyComments";
import ProfileDetails from "./ProfileDetails";
import CommentInput from "./Comments/CommentInput";

type Props = {};

const SubmitChallenge = (props: Props) => {
  return (
    <DashboardLayout>
      <>
        <h1 className="text-light text-center">Submit Challenge</h1>
        <div className="container-fluid text-light mt-3">
          <div className="row">
            <div className="col-9">
              <div className="row">
                <ProfileDetails />
                <div className="col-12 my-3">
                  {/* Contenedor Principal */}
                  <div className="comments-container">
                    <h4 className="text-light">Comments & Feedback :</h4>
                    {/* comment input box start  */}
                    <CommentInput />
                    {/* comment input box end */}
                    <CommentsHistory>
                      <>
                        <SingleComment>
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
                        <SingleComment />
                      </>
                    </CommentsHistory>
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
