import React from 'react'
import { Link } from 'react-router-dom';

type PropsChallenge = {
    title?: string;
    price?: number;
    date?: string;
    tags?: string[];
    imgSrc?: string;
    challengeId?: string;
}

const ChallengeCard = ({ title, price = 0, date, imgSrc = "https://picsum.photos/200/200", challengeId = 'challenge__1', tags }: PropsChallenge) => {
    return (
        <Link to={`/challenge/submit/${challengeId}`}>
            <div className="challenge-card py-3 text-light">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-2 col-6 offset-3 offset-md-0">
                            <img src={imgSrc} alt="task_logo" className='card-logo' draggable={false} />
                        </div>
                        <div className="col-md-8 col-12 mt-4 mt-md-0">
                            <div className="tags d-flex ">
                                {tags?.map((tag, key) =>
                                    <div className="tag" key={key}>{tag}</div>
                                )}
                            </div>
                            <h3 className="challenger-title text-light text-capitalize">{title}</h3>
                            <div className="date">Ends : {date}</div>
                        </div>
                        <div className="col-md-2 text-md-center text-right">
                            <div className="price-container text-center d-inline-block">
                                <h3 className="price">$ <b> {price}</b></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ChallengeCard