import React from "react";
import { Link } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";
import PrimaryButton from "../../shared/PrimaryButton";

const HomePage = () => {
  return (
    <HomeLayout>
      <main>
        <section className="top_sectionMain">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-8">
                <h1 className="mainHeading text-light">
                  Are you a Javascript Developer looking for a job?
                </h1>
                <PrimaryButton
                  to="/signup"
                  value="Sign Up Now!"
                  outline={false}
                />
              </div>
              <div className="col-4">
                <img
                  src="/img/right-side-img.svg"
                  alt="right side main "
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="project-detail-sec">
            <div className="">
              <h2 className="">
                Our chrome extension will apply you to 100s a week.{" "}
              </h2>
              <p className="font-weight-bold">
                Allow you to grow your portfolio and contribute to the future of
                job search software.
              </p>
            </div>
          </div>
        </section>
        <section className="community-sec">
          <div className="container">
            <div className="row">
              <h1 className="text-center text-light text-shadow">
                JobGenie Devs is the first community of software developers
                dedicated to making the job search easier.
              </h1>
              <div className="col-7 my-5">
                <ul className="content-list">
                  <li>Member privileges include</li>
                  <li>Lifetime subscription to our Chrome Extension</li>
                  <li>Apply to 100s of jobs with the click of a button.</li>
                  <PrimaryButton
                    to="/signup"
                    value="Join Now!"
                    outline={false}
                    className="ml-0"
                  />
                </ul>
              </div>
              <div className="col-5 my-5">
                <iframe
                  width="560"
                  height="315"
                  style={{ border: "none" }}
                  src="https://www.youtube.com/embed/oQX39Q3Lazs"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="developer-code">
          <div className="container py-5">
            <h2 className="text-light text-center text-shadow mb-5">
              Access to our source code & developer community
            </h2>
            <div className="row">
              <div className="col-5">
                <img
                  src="https://picsum.photos/600/300"
                  className="img-fluid"
                  alt="Challange_Image"
                />
              </div>
              <div className="col-7 pl-5">
                <ul className="content-list ,l-5">
                  <li>Member privileges include</li>
                  <li>Lifetime subscription to our Chrome Extension</li>
                  <li>Apply to 100s of jobs with the click of a button.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="find-job">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h3 className="">
                  Find a job and be part of a community improving the job
                  search.
                </h3>
                <p className="">
                  Together we will build a better way for everyone to find jobs
                  while helping you find yours.
                </p>
                <Link
                  to="/signup"
                  className="btn-own-outline d-block w-50 mx-auto "
                >
                  Sign me Up
                </Link>
              </div>
              <div className="col-5 offset-1 ">
                <h2 className="">Price $175 membership for life.</h2>
                <ul className="mt-4 list-unstyled">
                  <li>The best part is you can get your money back.</li>
                  <li>For each person you refer, you receive $5 dollars.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  );
};

export default HomePage;