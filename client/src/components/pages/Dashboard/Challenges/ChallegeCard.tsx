import React from 'react'

type Props = {}

const ChallegeCard = (props: Props) => {
    return (
        <>
            <div className="challenge-card py-3 text-light">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-1">
                            <img src="https://picsum.photos/200/200" alt="task_logo" className='card-logo' draggable={false} />
                        </div>
                        <div className="col-10">
                            <div className="tags d-flex">
                                <div className="tag">HTML</div>
                                <div className="tag">CSS</div>
                                <div className="tag">JAVA</div>
                                <div className="tag">Java Script</div>
                            </div>
                            <h3 className="challenger-title text-light text-capitalize">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repudiandae.</h3>
                            <div className="date">Ends : July 05</div>
                        </div>
                        <div className="col-1">
                            <div className="price-container text-center">
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