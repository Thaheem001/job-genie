import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { TextField, Box, Modal, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Cookies from "js-cookie";

type Props = {};

const Profile = (props: Props) => {
    const [userProfile, setUserProfile] = useState<any>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = React.useState(false);
    const [openChangePass, setOpenChangePass] = React.useState(false);

    const fetchUserProfile = async () => {
        const cookieKey = process.env.REACT_APP_AUTH_COOKIE;
        const APIURL = process.env.REACT_APP_API_URL;
        const authTokken = Cookies.get(cookieKey || "nothing");

        const dataSnap = await fetch(`${APIURL}/api/getProfile`, {
            // Adding method type
            method: "POST",
            // Adding body or contents to send
            body: JSON.stringify({
                authTokken,
            }),
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const { data } = await dataSnap.json();

        setUserProfile(data);
        setLoading(false);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenChangePass = () => setOpenChangePass(true);
    const handleCloseChangePass = () => setOpenChangePass(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
    }
    const handleSubmitUpdatePassword = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
    }

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return (
        <DashboardLayout>
            {!loading ? (
                <section className="profile-section about-section gray-bg position-relative">
                    <div className="container-fluid">
                        <div className="row align-items-center ">
                            {/* <div className="col-3 profile-img">
                                <div className="about-avatar">
                                    <img className='img-fluid' src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile_Image" />
                                </div>
                            </div> */}
                            {userProfile && (
                                <div className="col-md-9">
                                    <div className="about-text go-to">
                                        <h3 className="text-light profile-text">
                                            {userProfile?.fullName}
                                        </h3>
                                        <h6 className="lead text-light">
                                            {userProfile?.profession}
                                        </h6>
                                        <p className="text-light">{userProfile?.about}</p>
                                        <div className="row about-list w-100 pl-3">
                                            <div className="media col-md-6">
                                                <label>Email</label>
                                                <p>{userProfile?.email}</p>
                                            </div>
                                            <div className="media col-md-6">
                                                <label>Phone #</label>
                                                <p>{userProfile?.phone}</p>
                                            </div>
                                            <div className="media col-md-6">
                                                <label>Linked In</label>
                                                <p>
                                                    <a href={`https://${userProfile?.linkedIn}`}
                                                        className='text-light' target='_blank'
                                                    >{userProfile?.linkedIn}</a>
                                                </p>
                                            </div>
                                            <div className="media col-md-6">
                                                <label>Portfolio</label>
                                                <p>
                                                    <a href={`https://${userProfile?.portfolio}`}
                                                        className='text-light' target='_blank'
                                                    >{userProfile?.portfolio}</a>
                                                </p>
                                            </div>
                                            <div className="media col-md-6">
                                                <label>Password</label>
                                                <p className='d-flex align-items-center'>
                                                    <span className="mr-1 d-inline-block">********</span>
                                                    <Button onClick={handleOpenChangePass} className='user-edit-info text-danger'>Change <EditIcon /></Button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* user details edit info  */}
                            <div className="userEdit-info">
                                <Button onClick={handleOpen} className='user-edit-info'>Update Info <EditIcon /></Button>
                                {/* update user info modal  */}
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style} component="form" onSubmit={handleSubmit}>
                                        <h3 className="text-dark text-center">Update User Info</h3>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Full Name"
                                            placeholder="Full Name"
                                            size="small"
                                            className='my-2 w-100'
                                            defaultValue={userProfile?.fullName}

                                        />
                                        <TextField
                                            id="outlined-textarea"
                                            label="Profession"
                                            placeholder="Profession"
                                            size="small"
                                            className='my-2 w-100'
                                            defaultValue={userProfile?.profession}

                                        />
                                        <TextField
                                            id="outlined-textarea"
                                            label="Email Address "
                                            placeholder="Email Address"
                                            size="small"
                                            className='my-2 w-100'
                                            defaultValue={userProfile?.email}
                                        />
                                        <TextField
                                            id="outlined-textarea"
                                            label="Phone Number "
                                            placeholder="Phone Number"
                                            size="small"
                                            className='my-2 w-100'
                                            defaultValue={userProfile?.phone}
                                        />
                                        <TextField
                                            id="outlined-textarea"
                                            label="Linked In "
                                            placeholder="Linked In"
                                            size="small"
                                            className='my-2 w-100'
                                            defaultValue={userProfile?.linkedIn}
                                        />
                                        <TextField
                                            id="outlined-textarea"
                                            label="Portfolio "
                                            placeholder="Portfolio"
                                            size="small"
                                            className='my-2 w-100'
                                            defaultValue={userProfile?.portfolio}
                                        />
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="About me"
                                            placeholder='Write something about me!'
                                            multiline
                                            rows={3}
                                            className='my-2 w-100'
                                            defaultValue={userProfile?.about}
                                        />
                                        <button type="submit" className="btn-own w-100">Update User</button>
                                    </Box>
                                </Modal>
                                {/* change password modal  */}
                                <Modal
                                    open={openChangePass}
                                    onClose={handleCloseChangePass}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style} component="form" onSubmit={handleSubmitUpdatePassword}>
                                        <h3 className="text-dark text-center">Update User Info</h3>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Current Password"
                                            placeholder="Current Password"
                                            type="password"
                                            size="small"
                                            className='my-2 w-100'
                                        />
                                        <TextField
                                            id="outlined-textarea"
                                            label="New Password"
                                            placeholder="New Password"
                                            type="password"
                                            size="small"
                                            className='my-2 w-100'
                                        />
                                        <TextField
                                            id="outlined-textarea"
                                            label="Confirm New Password"
                                            placeholder="Confirm New Password"
                                            type="password"
                                            size="small"
                                            className='my-2 w-100'
                                        />
                                        <button type="submit" className="btn-own w-100">Update User</button>
                                    </Box>
                                </Modal>
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
            ) : (
                <h2>Loading ! ...</h2>
            )}
        </DashboardLayout>
    );
};

export default Profile;
