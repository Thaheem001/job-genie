import React from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../../layout/DashboardLayout'
import ChallengeCard from '../Challenges/ChallengeCard'

type Props = {}

const SubDec = (props: Props) => {
    return (
        <DashboardLayout>
            <>
                <h1 className="text-center text-light">Submissions / Discussions</h1>
                <p className="text-light">Practice Challenges</p>
                <ChallengeCard title='Customize color' date='July 05' price={100} tags={['Html', "CSS", "js"]} />
                <ChallengeCard title='Part time filters' date='July 05' price={100} tags={['Html', "CSS", "js"]} />
                <p className="text-light">Cash Challenges</p>
                <ChallengeCard title='Email Recruiters' date='July 05' price={100} tags={['Html', "CSS", "js"]} />
                <ChallengeCard title='Add ML to improve resumes' date='July 05' price={100} tags={['Html', "CSS", "js"]} />
                {/* <Link to={'/challenge/submit'}><ChallengeCard /></Link>
                <Link to={'/challenge/submit'}><ChallengeCard /></Link>
                <Link to={'/challenge/submit'}><ChallengeCard /></Link> */}
            </>
        </DashboardLayout>
    )
}

export default SubDec