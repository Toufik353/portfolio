import classes from './ThirdPage.module.css'
import React, { Component } from 'react'
import Footer from '../Components/Footer/Footer'

class ThirdPage extends Component {

    render() {
        return (
            <div className={classes.ThirdPage}>

                <h1 className={classes.Heading}>Skills</h1>

                <div className={classes.Skills_Container}>
                    <div className={classes.Skills}>
                        <p className={classes.Title}>Languages</p>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JavaScript</p>
                        <p>Recat JS</p>
                    </div>

                    <div className={classes.Skills}>
                        <p className={classes.Title}>Dev Tools</p>
                        <p>Git</p>
                        <p>Redux</p>
                        <p>Bootstrap</p>
                        <p>JQuery</p>
                    </div>

                    <div className={classes.Skills}>
                        <p className={classes.Title}>Design Tools</p>
                        <p>Design Tools</p>
                        <p>HTML5</p>
                        <p>CSS3</p>
                    </div>

                </div>

                <p className={classes.Text}>You must be wondering what I have done with all the things above.
Well, <span>here you go.</span></p>
                <Footer />

            </div>
        )
    }
}


export default ThirdPage