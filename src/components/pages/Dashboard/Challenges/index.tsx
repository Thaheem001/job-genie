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
                <ChallengeCard title='Customize color' date='July 05' tags={['HTML5', "CSS3",]} />
                <ChallengeCard title='Part time filters' date='July 05' tags={["Java Script", "Java"]} />
            </>
        </DashboardLayout>
    )
}

export default Challenges