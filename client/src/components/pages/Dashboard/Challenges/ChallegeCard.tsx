import React from 'react'

type Props = {}

const ChallegeCard = (props: Props) => {
    return (
        <>
            <div className="challenge-card py-3 text-light">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-2 col-6 offset-3 offset-md-0">
                            <img src="https://picsum.photos/200/200" alt="task_logo" className='card-logo' draggable={false} />
                        </div>
                        <div className="col-md-8 col-12 mt-4 mt-md-0">
                            <div className="tags d-flex ">
                                <div className="tag">HTML</div>
                                <div className="tag">CSS</div>
                                <div className="tag">JAVA</div>
                                <div className="tag">Java Script</div>
                            </div>
                            <h3 className="challenger-title text-light text-capitalize">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repudiandae.</h3>
                            <div className="date">Ends : July 05</div>
                        </div>
                        <div className="col-md-2 text-md-center text-right">
                            <div className="price-container text-center d-inline-block">
                                <h3 className="price">$<b>100</b></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChallegeCard