import React from 'react'
import AsideDash from '../../pages/Dashboard/Aside'
import HomeLayout from '../HomeLayout'

type DashboardLayOutProps = {
    Aside?: JSX.Element;
    children?: React.ReactElement
}

const DashboardLayout = ({ Aside, children }: DashboardLayOutProps) => {
    return (
        <>
            <section>
                <HomeLayout>
                    <section className='dashboard'>
                        <div className="main-dashboard-menue">
                            {Aside ? Aside : <AsideDash />}
                            <div className="right-side-dashboard-menu">
                                <>{children}</>
                            </div>
                        </div>
                    </section>
                </HomeLayout>
            </section>
        </>
    )
}

export default DashboardLayout