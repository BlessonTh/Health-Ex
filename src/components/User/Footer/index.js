import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {
    facebook,
    linkedin2,
    twitter
} from 'react-icons-kit/icomoon'
import {Images} from '../../../utils/Images'

const Index = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0 pr-lg-4">
                        <div className="text-center text-lg-left">
                            <Link to="/">
                                <img src={Images.Logo} className="img-fluid" alt="..." />
                            </Link>
                            <br />
                            <p>Brought to you by team HealthAdda</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0 text-center text-lg-left pr-lg-4">
                        <h5>Need Help?</h5>
                        <Link to="/">support</Link>
                        <Link to="/">helpline</Link>
                        <Link to="/">privacy & policy</Link>
                        <Link to="/">terms & conditions</Link>
                    </div>
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0 text-center text-lg-left">
                        <h5>Contacts</h5>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com">
                                    <Icon icon={facebook} size={18} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/">
                                    <Icon icon={linkedin2} size={18} />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com">
                                    <Icon icon={twitter} size={18} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;