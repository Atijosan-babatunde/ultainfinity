import React from 'react';
import { Link } from 'react-router-dom';
import globe from '../../asset/globe.png';





export function Header() {
    return (
        <nav className="navbar navbar-expand-lg  bg-blue">
            <div className="container">
                <Link className="navbar-brand" to="#landing"><img src="images/logo-ultainfinity.svg" loading="lazy" alt="" class="nav_logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0  navbar-nav-scroll " style={{ marginLeft: "8em" }}>
                        <li className="nav-item ">
                            <Link className="nav-link active" aria-current="page" to="#">Who we are</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Crypto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">How it works</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">FAQS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Subscribe</Link>
                        </li>
                    </ul>
                    <form className="d-flex">

                        <Link className="nav-link" to="#">Login</Link>

                        <button className="btn btn-outline1  px-4" type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}


export function Footer() {
    return (
        <section id="footer-details" style={{ backgroundImage: `url(${globe})`, repeat: "no-repeat", width: "100%" }}>
            <div className='container' >
                <div className='row'>
                    <div className='footer ' style={{ paddingTop: "15em" }} >
                        <div className='logo-footer justify-content-center text-center mb-5' >
                            <Link className="navbar-brand" to="#landing"><img src="images/logo-ultainfinity.svg" loading="lazy" alt="" class="nav_logo " /></Link>
                        </div>
                        <div className='row' >
                            <div className='col-md-7' style={{ padding: "10px" }}>
                                <h2 className='footer-header'>Join Our Community</h2>
                                <h3 className='footer-header1'>Subscribe</h3>
                                <p className='footer-para'>Subscribe to our Community Channels to get regular updates, our group developments and free Airdrops & Bounties of Cryptocurrencies.</p>
                            </div>
                            <div className='col-md-5 ' >
                                <h2 className='footer-header'>Quick Links</h2>

                                <ul className='' >
                                    <li className='footer-li' >Investor Brochure</li>
                                    <li className='footer-li'>About Us</li>
                                    <li className='footer-li'>Join Waitlist</li>
                                    <li className='footer-li'>Download App</li>
                                </ul>

                            </div>
                        </div>

                        <div className='row'>
                            <div className='social-media justify-content-center text-center mt-5'>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-telegram-plane"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-whatsapp"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fas fa-phone-volume"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fa-brands fa-nfc-directional"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-reddit-alien"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-line"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-medium"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-medium"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-medium"></i></Link>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='social-media justify-content-center text-center mt-4 mb-5'>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-telegram-plane"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-whatsapp"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fas fa-phone-volume"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fa-brands fa-nfc-directional"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-reddit-alien"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-line"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-medium"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-medium"></i></Link>
                                <Link id="facebook" to="https://www.facebook.com/ultainfinity.global.group" target="_blank" className='social-icon-link'><i class="fab fa-medium"></i></Link>
                            </div>
                        </div>


                        <div className="row mt-4 mb-5">
                            <div className="col-6 text-end">
                                <button className="btn btn-outline-footer py-0 px-4  " type="submit">Privacy Policy</button>
                            </div>

                            <div className="col-6">
                                <button className="btn btn-outline-footer py-0 px-5 " type="submit">Terms of use</button>
                            </div>
                        </div>
                        <div className="section-2 mt-4">
                            <div className="text-size-small-2">© Copyright Ultainfinity Global Group 2022</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}