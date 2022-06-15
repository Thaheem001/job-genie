import React from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { TextField, Grid, Box } from '@mui/material';

type Props = {}

const Profile = (props: Props) => {

    return (
        <DashboardLayout>
            <section className="profile-section about-section gray-bg position-relative" >
                <div className="container-fluid">
                    <div className="row align-items-center ">
                        {/* <div className="col-3 profile-img">
                            <div className="about-avatar">
                                <img className='img-fluid' src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile_Image" />
                            </div>
                        </div> */}
                        <div className="col-md-9">
                            <div className="about-text go-to">
                                <h3 className="text-light profile-text">Profile User Name</h3>
                                <h6 className="lead text-light">Designation Details!</h6>
                                <p className='text-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam officia vitae eos, pariatur facere, mollitia error iure doloremque consequatur quam, debitis sapiente et tempora excepturi.</p>
                                <div className="row about-list w-100 pl-3">
                                    <div className="media col-md-6">
                                        <label>Email</label>
                                        <p>User@mail.com</p>
                                    </div>
                                    <div className="media col-md-6">
                                        <label>Phone #</label>
                                        <p>+1-000-000-0000</p>
                                    </div>
                                    <div className="media col-md-6">
                                        <label>Linked In</label>
                                        <p>@UserName</p>
                                    </div>
                                    <div className="media col-md-6">
                                        <label>Skype</label>
                                        <p>@UserName</p>
                                    </div>
                                    <div className="media col-md-6">
                                        <label>Git Hub</label>
                                        <p>@UserName</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* edit fourm all  */}
                    {/* <div className="update_fourm_data">
                        <Grid >
                            <Box component="form">
                                <TextField id="outlined-basic" label="Email Address" variant="filled" fullWidth />
                            </Box>
                        </Grid>
                    </div> */}
                </div>
            </section>
        </DashboardLayout>
    )
}

export default Profile