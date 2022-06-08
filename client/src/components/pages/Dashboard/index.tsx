import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

type Props = {}

const DashboardPage = (props: Props) => {
    const notify = () => toast.loading('This is an error!');
    return (
        <>
            <h1 className="text-center text-light">DashboardPage</h1>
            <button onClick={notify}>Make me a toast</button>
            <Toaster />
        </>
    )
}

export default DashboardPage