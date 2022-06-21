import React from 'react'
import DashboardLayout from '../../../../layout/DashboardLayout'
import ChallengeCard from '../ChallengeCard'
import { useDispatch } from "react-redux";
import { changeHeading } from "../../../../../features/HeaderHeading/HeaderHeadingSlice";

type Props = {}

const CashChallenges = (props: Props) => {
    const dispatch = useDispatch();
    dispatch(changeHeading('Cash Challenges'));
    return (
        <DashboardLayout>
            <>
                {/* <h1 className='text-center text-light'>Cash Challenges</h1> */}
                <ChallengeCard title='Email Recruiters' date='July 05' price={100} tags={['Html', "CSS", "js"]} />
                <ChallengeCard title='Add ML to improve resumes' date='July 05' price={100} tags={['Html', "CSS", "js"]} />
            </>
        </DashboardLayout>
    )
}

export default CashChallenges