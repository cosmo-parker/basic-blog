import * as React from 'react'
import Header from './Header'

export default (props: any) => (
    <div className='container'>
        <Header />
        <div>
            {props.children}
        </div>
    </div>
)
