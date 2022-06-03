import React from 'react'
import { Link } from 'react-router-dom'
import HeaderHompage from '../shared/HeaderHompage'
import PrimaryButton from '../shared/PrimaryButton'

const HomePage = () => {
    return (
        <>
            <HeaderHompage />
            <main>
                <section className="top_sectionMain">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-8">
                                <h1 className="mainHeading text-light">Are you a Javascript Developer looking for a job?</h1>
                                <PrimaryButton to='/signup' value='Sign Up Now!' outline={false} />
                            </div>
                            <div className="col-4">
                                <img src="/img/right-side-img.svg" alt="right side main img" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="project-detail-sec">
                    <div className="container">
                        <h2 className="">Our chrome extension will apply you to 100s a week. </h2>
                        <p className="font-weight-bold">Allow you to grow your portfolio and contribute to the future of job search software.</p>

                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage