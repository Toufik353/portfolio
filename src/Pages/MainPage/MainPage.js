import classes from './MainPage.module.css'
import React, { Component } from 'react'
import FirstComp from '../../Components/FirstComp/FirstComp'
import SecondPage from '../../Components/SecondPage/SecondPage'
import ThirdPage from '../../ThirdPage/ThirdPage'
import Footer from '../../Components/Footer/Footer'
import FourthPage from '../../Components/FourthPage/FourthPage'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

class MainPage extends Component {
    render() {
        return (
            <div className={classes.MainPage}>
                <BrowserRouter>
                    <div className={classes.LeftPage}>
                        <Switch>
                            <Route exact path="/" component={FirstComp} />
                            {/* <FirstComp /> */}
                            <Route exact path="/SecondPage" component={SecondPage} />
                            {/* <SecondPage /> */}
                            <Route exact path="/ThirdPage" component={ThirdPage} />
                            {/* <ThirdPage /> */}
                            <Route exact path="/FourthPage" component={FourthPage} />
                            {/* <FourthPage /> */}
                        </Switch>
                    </div>
                </BrowserRouter>

                <BrowserRouter>
                    <div className={classes.RightPage}>
                        <Link to="/">
                            <div className={classes.Carousel_Button}>

                            </div>
                        </Link>

                        <Link to="/SecondPage">
                            <div className={classes.Carousel_Button}>

                            </div>
                        </Link>
                        <Link to="/ThirdPage">
                            <div className={classes.Carousel_Button}>

                            </div>
                        </Link>
                        <Link to="/FourthPage">
                            <div className={classes.Carousel_Button}>

                            </div>
                        </Link>
                    </div>
                </BrowserRouter>

            </div>
        )
    }


}

export default MainPage
