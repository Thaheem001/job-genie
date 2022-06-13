import React from 'react'
import DashboardLayout from '../../../../layout/DashboardLayout'
import ChallegeCard from '../ChallegeCard'

type Props = {}

const PracticeChallange = (props: Props) => {
    return (
        <DashboardLayout>
            <>
                <h1 className='text-light text-center'>Practice Challange</h1>
                <ChallegeCard />
                <ChallegeCard />
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

export default PracticeChallange