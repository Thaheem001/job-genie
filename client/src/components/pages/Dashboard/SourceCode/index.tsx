import React from 'react'
import { Grid } from '@mui/material'
import ProjectCard from './ProjectCard'

type Props = {}

const SourceCode = (props: Props) => {
    return (
        <>
            <h1 className="text-center text-light mb-4">Source Code</h1>
            <Grid spacing={2} container direction="row" justifyContent="flex-start" alignItems="flex-start" flexWrap='wrap'>
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
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <ProjectCard />
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <ProjectCard />
                </Grid>
            </Grid>
        </>
    )
}

export default SourceCode