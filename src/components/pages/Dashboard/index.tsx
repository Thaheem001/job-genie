import React from 'react'
import DashboardLayout from '../../layout/DashboardLayout'
import SourceCode from './SourceCode'

type Props = {}

const DashboardPage = (props: Props) => {
    return (
        <>
            <DashboardLayout >
                <>
                    <SourceCode />
                </>
            </DashboardLayout>
        </>
    )
}

export default DashboardPage