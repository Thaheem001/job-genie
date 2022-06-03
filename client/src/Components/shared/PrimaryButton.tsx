import React from 'react'
import { Link } from 'react-router-dom'

type PrimaryButton = {
    to: string;
    value: string;
    className?: string;
    outline?: boolean;
}

const PrimaryButton = (props: PrimaryButton) => {
    return (
        <>
            <Link to={props.to} className={`btn-own${props.outline ? '-outline' : ''} ${props.className}`}>{props.value}</Link>
        </>
    )
}

export default PrimaryButton