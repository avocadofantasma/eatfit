import React from 'react'
import {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share';

const FixedButton = () => {
    const shareUrl = "https://www.facebook.com/FITEATNUTRITION/";

    return (
        <div className="fixed-action-btn horizontal">
            <a href="#!" className="btn-floating btn-large accent-color">
                <i className="large material-icons">share</i>
            </a>
            <ul>
                <li><span className="btn-floating blue"> <FacebookShareButton url={shareUrl} size={32} round={true} /></span></li>
                <li><span className="btn-floating blue"> <GooglePlusShareButton url={shareUrl} size={32} round={true} /></span></li>
                <li><span className="btn-floating blue"> <TwitterShareButton url={shareUrl} size={32} round={true} /></span></li>
                <li><span className="btn-floating blue"> <WhatsappShareButton url={shareUrl} size={32} round={true} /></span></li>
            </ul>
        </div>)
}

export default FixedButton