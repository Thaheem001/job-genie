import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const ProjectCard = () => {

    return (
        <Card className='repoCard'>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        A
                    </Avatar>
                }
                title="Project Title "
                // subheader="June 10, 2022"
            />
            <CardContent>
                <h1 className="repoName text-center font-weight-bold my-3">Repository Name</h1>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
                <div className="button-container">
                    <Link to='/home/source-code/signgle-card' className='btn-own' >View Code</Link>
                    <a href='https://codeload.github.com/DaudSamim/JS_Job_Genie_Dashboard/zip/refs/heads/main' className='btn-own-outline' target={'_blank'} download>Download Code</a>
                </div>
                {/* <div className="language-tech">
                    <div className="w-100 text-dark">Technology:</div>
                    <div className="tags">
                        <div className="tag">Html</div>
                        <div className="tag">css</div>
                        <div className="tag">Javascript</div>
                        <div className="tag">php</div>
                        <div className="tag">React</div>
                        <div className="tag">Laravel</div>
                    </div>
                </div> */}
            </CardContent>
        </Card>
    )
}

export default ProjectCard