import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

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
  const APIURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${APIURL}/api/repo`)
      .then((snap) => snap.json())
      .then((res) => {
        setRepoInfo(res.data);
        console.log("I got the res here !", res);
      })
      .catch(() => alert("something went wrong"));
  }, []);

  return (
    <>
      <h1 className="text-center text-light mb-4">Source Code</h1>
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

        {/* <Grid item md={4} sm={6} xs={12} >
                    <ProjectCard />
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <ProjectCard />
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <ProjectCard />
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <ProjectCard />
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <ProjectCard />
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <ProjectCard />
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <ProjectCard />
                </Grid> */}
      </Grid>
    </>
  );
};

export default SourceCode;
