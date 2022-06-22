import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeHeading } from '../../../../features/HeaderHeading/HeaderHeadingSlice'
import DashboardLayout from '../../../layout/DashboardLayout'
import ChallengeCard from '../Challenges/ChallengeCard'

type Props = {}

const SubDec = (props: Props) => {
    const dispatch = useDispatch();
    dispatch(changeHeading('Submissions / Discussions'));
    return (
        <DashboardLayout>
            <>
                {/* <h1 className="text-center text-light">Submissions / Discussions</h1> */}
                <p className="text-light">Practice Challenges</p>
                <ChallengeCard title='Customize color' level='Easy' />
                <ChallengeCard title='Part time filters' level='Medium' />
                <p className="text-light">Cash Challenges</p>
                <ChallengeCard title='Email Recruiters' price={100} />
                <ChallengeCard title='Add ML to improve resumes' price={100} />
                {/* <Link to={'/challenge/submit'}><ChallengeCard /></Link>
                <Link to={'/challenge/submit'}><ChallengeCard /></Link>
                <Link to={'/challenge/submit'}><ChallengeCard /></Link> */}
            </>
        </DashboardLayout>
    )
}

export default SubDec