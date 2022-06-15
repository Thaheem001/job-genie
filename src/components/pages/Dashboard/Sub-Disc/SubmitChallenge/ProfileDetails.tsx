import React, { useState } from 'react'
// import FolderZipIcon from '@mui/icons-material/FolderZip';
// import UploadFileIcon from '@mui/icons-material/UploadFile';

type Props = {}

const ProfileDetails = (props: Props) => {
    // const [isUpload, setIsUplaod] = useState<string>();
    // const handleChange = (e: any) => {
    //     var files = e.target.files;
    //     setIsUplaod(files[0]?.name);
    // }

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <img src="https://picsum.photos/500/500" className='img-fluid rounded shadow-lg' alt="Challenge-pic" />
                </div>
                <div className="col-9">
                    <h3 className="Price text-right">Price : $100</h3>
                    <h3 className='Challenge-title'>Lorem ipsum dolor sit amet.</h3>
                    <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore illum tempora magnam nemo temporibus earum inventore! Blanditiis quo quae laborum nulla quos, enim nam deserunt.</p>
                    <div className="date">
                        <p className="float-right upload-date">Uploaded Date : 14 June 2022</p>
                    </div>
                    <div className="tags d-flex">
                        <div className="tag">HTML</div>
                        <div className="tag">CSS</div>
                        <div className="tag">JAVA</div>
                        <div className="tag">Java Script</div>
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