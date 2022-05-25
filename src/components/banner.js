import React from 'react';
// import { BaseContainer } from '../web/layouts/Containers';
import videobg from "../asset/videobg.mp4";
import we from "../asset/we.png";
import { BaseContainer } from '../web/layouts/Containers';




const Banner = () => {
    return(
        <BaseContainer>
            <div className='bg-vid '>
                <div className='overlay'></div>
                <video src={videobg} autoPlay loop muted />
                <div className='content'>
                    <h2> We are all in</h2>
                    <p>The Greatest Wealth<br /> Creation & Wealth Transfer<br /> has begun.</p>
                    <div className="row mt-4 mb-5">
                        <div className="col-6">
                            <button className="btn btn-outline1 py-0 px-4 rounded-12" type="submit">Join Waitlist</button>
                        </div>

                        <div className="col-6">
                            <button className="btn btn-outline1 py-0 px-5 rounded-12" type="submit">Prices</button>
                        </div>
                    </div>

                                       
                    <div >
                        <div className='container'>
                            <div className='col-md-12'>
                                <div className='about'>
                                    <p>Ultainfinity Global Group, an international ecosystem comprising numerous business groups and units including Ultainfinity Group, SLAPA Group, Sumra Group are proud to be involved in the invention, origination and commencement of arguably the greatest wealth creation, wealth transfer, wealth distribution and wealth management; ever seen before,starting with our Whitelists, PreSales, Reward Bonus, PreMarket Exchange, Airdrops, Bounties, GRIP 300, Super Staking, Synthetic SLAPA Token, and many others including Premium Wealth Membership programs such as Millionaire, Midas, Connoisseur etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    



                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='who'>
                                    <h3>Who we are</h3>
                                    <p>We are a global financial technology group, called ULTAINFINITY GLOBAL GROUP based in the U.K. U.S.A & E.U. We are about to commence the worldwide launch of our own multiple cryptocurrencies.</p>

                                    <p>We are starting the launch with a Whitelist in order to provide an opportunity for investors and supporters of our global project to purchase our cryptocurrencies. The Whitelist will be followed by the main PreSales and immediately thereafter, we will make available a PreMarket Exchange to buy and sell our cryptocurrencies.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='side1'>
                                    <img src={we} alt="side" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </BaseContainer>
    )
}


export default Banner 
