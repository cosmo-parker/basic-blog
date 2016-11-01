import * as React from 'react'
import Header from './Header'
import Nav from './Nav'

export default (props: any) => (
    <div className='container'>
        <Header />
        <Nav />
        <div>
            {props.children}
        </div>
    </div>
)
