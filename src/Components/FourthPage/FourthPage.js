import classes from './FourthPage.module.css'
import React, { Component } from 'react'
import Footer from '../Footer/Footer'

class FourthPage extends Component {
    render() {
        return (
            <div className={classes.FourthPage}>

                <h1 className={classes.Heading}>My recent works</h1>
                <Footer />
            </div>
        )
    }
}

export default FourthPage
