import React from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import ChallengeCard from './ChallengeCard'
import { useDispatch } from "react-redux";
import { changeHeading } from "../../../../features/HeaderHeading/HeaderHeadingSlice";

type Props = {}

const Challenges = (props: Props) => {
    const dispatch = useDispatch();
    dispatch(changeHeading('Practice Challange'));
    return (
        <DashboardLayout>
            <>
                {/* <h1 className='text-light text-center'>Practice Challange</h1> */}
                <ChallengeCard title='Customize color' level='Easy' />
                <ChallengeCard title='Part time filters' level='Medium' />
            </>
        </DashboardLayout>
    )
}

export default Challenges