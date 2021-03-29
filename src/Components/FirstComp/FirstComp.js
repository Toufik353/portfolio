import classes from './FirstComp.module.css'
import React, { Component } from 'react'
import Footer from '../Footer/Footer'

class FirstComp extends Component {
    render() {
        return (
            <div className={classes.FirstComp}>
                <div className={classes.Container} >
                    <h1 className={classes.HeadText}>Hello, I'm <span className={classes.Name}>Toufik Desai </span></h1>
                    <h1 className={classes.HeadText}>A front-end web developer</h1>

                    <button className={classes.Button}>Get to know more</button>
                </div>

                <Footer />
            </div>
        )
    }


}
export default FirstComp
