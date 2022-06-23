import React, { useState } from 'react'
// import FolderZipIcon from '@mui/icons-material/FolderZip';
// import UploadFileIcon from '@mui/icons-material/UploadFile';

export type ChallengeTypesSingle = {
    title: string;
    img: string;
    price?: number;
    level?: string;
    technologyStack?: string[];
    type: string;
}
const ProfileDetails = ({ img, title, type, price, level, technologyStack }: ChallengeTypesSingle) => {

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <img src={img} className='w-100 rounded shadow-lg' alt="Challenge-pic" />
                </div>
                <div className="col-9">
                    {price &&
                        <h3 className="Price text-right">Price : ${price}</h3>
                    }
                    {level &&
                        <h3 className="level text-right text-capitalize text-danger">Level : {level}</h3>
                    }
                    <h3 className='Challenge-title'>{title}</h3>
                    <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore illum tempora magnam nemo temporibus earum inventore! Blanditiis quo quae laborum nulla quos, enim nam deserunt.</p>
                    <div className="date">
                        <p className="float-right challenge-type">Challenge Type : <span className="text-capitalize text-danger">{type}</span></p>
                    </div>
                    <div className="tags d-flex">
                        {technologyStack &&
                            technologyStack.map((tag, key) => <div className="tag" key={key}>{tag}</div>)
                        }
                    </div>

                    {/* {isUpload &&
                        <div className="Upload-folder-name bg-success d-inline-flex "><FolderZipIcon />{isUpload}</div>
                    } */}
                    {/* <div className="upload-project">
                        <label htmlFor="uploadDoc" className='btn-own float-right'><UploadFileIcon /> Upload Project</label>
                        <input type="file" name="upload-doc" id="uploadDoc"
                            accept=".zip,.rar,.7zip" className='d-none'
                            onChange={e => handleChange(e)} />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ProfileDetails