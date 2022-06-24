import React, { useState } from 'react'
import { TextField, Box, Modal, Button } from '@mui/material';
import { ReplyCommentProp } from './ReplyComments';

type Props = {
    openModal?: any;
    hideModal?: any;
    userInfo?: any;
}

const UserProfileModal = ({ openModal, hideModal, userInfo }: Props) => {
    const { fullName, linkedIn, portFolio, email } = userInfo;
    console.log(userInfo)
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: "0px 0px 20px #000",
        p: 3,
        borderRadius: 4,
    };
    return (
        <>
            <Modal
                open={openModal}
                onClose={hideModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component="div">
                    <h3 className="text-dark text-center">User Info</h3>
                    <table className='table table-bordered font-weight-bold'>
                        <tr>
                            <td>Full Name</td>
                            <td>{fullName}</td>
                        </tr>
                        <tr>
                            <td>Linked In</td>
                            <td>{linkedIn ? <><a className='text-dark' href={linkedIn} target='_blank' title={linkedIn}>Linked In Link</a></> : 'Profile Not Update '}</td>
                        </tr>
                        <tr>
                            <td>PortFolio</td>
                            <td>{portFolio ? <><a className='text-dark' href={portFolio} target='_blank' title={linkedIn}>PortFolio Link</a></> : "Profile Not Update"}</td>
                        </tr>
                        <tr>
                            <td>Email Address</td>
                            <td>{email}</td>
                        </tr>
                    </table>
                </Box>
            </Modal>
        </>
    )
}

export default UserProfileModal