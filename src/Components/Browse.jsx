import React from 'react'
import { Link } from 'react-router-dom'
import "./Browse.css"


export default function Browse() {
    return (
        <>

            <div className='movie'>
                <Link to="/Telugu">
                    <div className='language'>
                        <h1>Telugu</h1>
                    </div>
                </Link>


                <Link to="/English">
                    <div className='language'>
                        <h1>English</h1>
                    </div>
                </Link>


                <Link to="/Korean">
                    <div className='language'>
                        <h1>Korean</h1>
                    </div>
                </Link>


                <Link to="/Malayalam">
                    <div className='language'>
                        <h1>Malayalam</h1>
                    </div>
                </Link>


            </div>

        </>
    )
}
