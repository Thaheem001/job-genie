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
                <ChallengeCard title='Email Recruiters' price={100} />
                <ChallengeCard title='Add ML to improve resumes' price={100} />
            </>
        </DashboardLayout>
    )
}

export default CashChallenges