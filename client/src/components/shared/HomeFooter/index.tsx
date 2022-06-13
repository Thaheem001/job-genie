import React from 'react'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

type Props = {}

const HomeFooter = (props: Props) => {
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <ul className='list-unstyled d-flex justify-content-around mb-0'>
                                <li><Link to="#" className="text-light">Terms & Condition</Link></li>
                                <li><Link to="#" className="text-light">Privacy</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 text-center text-light">©2023 by JobGenie.</div>
                        <div className="col-3 d-flex justify-content-center">
                            <ul className='list-unstyled d-flex mb-0'>
                                <li>
                                    <Link className='text-light mr-3' to={'#'}><InstagramIcon /></Link>
                                </li>
                                <li>
                                    <Link className='text-light' to={'#'}><LinkedInIcon /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default HomeFooter