import React from 'react'
import DashboardLayout from '../../../../layout/DashboardLayout'
import ChallegeCard from '../ChallegeCard'

type Props = {}

const CashChallenges = (props: Props) => {
    return (
        <DashboardLayout>
            <>
                <h1 className='text-center text-light'>Cash Challenges</h1>
                <ChallegeCard />
                <ChallegeCard />
                <ChallegeCard />
                <ChallegeCard />
                <ChallegeCard />
                <ChallegeCard />
            </>
        </DashboardLayout>
    )
}

export default CashChallenges