import React from 'react'
import DashboardLayout from '../../../../layout/DashboardLayout'
import ChallengeCard from '../ChallengeCard'

type Props = {}

const CashChallenges = (props: Props) => {
    return (
        <DashboardLayout>
            <>
                <h1 className='text-center text-light'>Cash Challenges</h1>
                <ChallengeCard title='Email Recruiters' date='July 05' price={100} tags={['Html', "CSS", "js"]} />
                <ChallengeCard title='Add ML to improve resumes' date='July 05' price={100} tags={['Html', "CSS", "js"]} />
            </>
        </DashboardLayout>
    )
}

export default CashChallenges