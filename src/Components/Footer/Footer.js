import classes from './Footer.module.css'
import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

class Footer extends Component {
    render() {
        return (
            <div className={classes.Footer}>

                <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target="_blank"><FontAwesomeIcon icon={faEnvelope} className={classes.Footer_Icon} /></a>
                <a href="https://www.linkedin.com/in/toufik-desai-55b583106/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className={classes.Footer_Icon} /></a>
                <a href="https://github.com/Toufik353" target="_blank"><FontAwesomeIcon icon={faGithub} className={classes.Footer_Icon} /></a>
            
            </div>
        )
    }
}

export default Footer