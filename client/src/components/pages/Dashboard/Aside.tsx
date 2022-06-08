import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const AsideDash = (props: Props) => {
    return (
        <>
            <aside>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/home'}>Source Code</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/challenges'}>Challenges <span>&#40; practice challenge and cash challenge &#41;</span></NavLink>
                        </li>
                        <li>
                            <NavLink to={'/sub-dic'}>Submissions / Discussions</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Profile'}>Profile</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default AsideDash