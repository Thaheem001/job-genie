import React from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../../layout/DashboardLayout'
import ChallegeCard from '../Challenges/ChallegeCard'

type Props = {}

const SubDec = (props: Props) => {
    return (
        <DashboardLayout>
            <>
                <h1 className="text-center text-light">Submissions / Discussions</h1>
                <Link to={'/challenge/submit'}><ChallegeCard /></Link>
                <Link to={'/challenge/submit'}><ChallegeCard /></Link>
                <Link to={'/challenge/submit'}><ChallegeCard /></Link>
            </>
        </DashboardLayout>
    )
}

export default SubDec