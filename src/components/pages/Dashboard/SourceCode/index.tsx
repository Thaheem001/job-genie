import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { useDispatch } from "react-redux";
import { changeHeading } from "../../../../features/HeaderHeading/HeaderHeadingSlice";
import DashboardLayout from "../../../layout/DashboardLayout";

type Props = {};

type RepoInfoType = {
  repoName: string;
  repoUrls: string;
  repoDesc: string;
  ownerImage: string;
  ownerName: string;
  ownerUrl: string;
  repoLanguage: string;
};

const SourceCode = (props: Props) => {
  const [repoInfo, setRepoInfo] = useState<RepoInfoType>();
  const APIURL = process.env.NODE_ENV === "development" ? "http://localhost:3001" : process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeHeading('Source Code'));
    fetch(`${APIURL}/api/repo`)
      .then((snap) => snap.json())
      .then((res) => {
        setRepoInfo(res.data);
        // console.log("I got the res here !", res);
      })
      .catch(() => alert("something went wrong"));
  }, []);

  return (
    <DashboardLayout>
      <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        {repoInfo && (
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard {...repoInfo} />
          </Grid>
        )}

      </Grid>
    </DashboardLayout>
  );
};

export default SourceCode;
