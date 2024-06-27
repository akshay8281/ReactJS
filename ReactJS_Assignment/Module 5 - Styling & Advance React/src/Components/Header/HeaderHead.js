export default function HeaderHead() {

    return (
        <div className='MainContainer'>
            <div className='main flex jcs ali'>
                <div className='col-30 flex jcs ali'>
                    <ul className='navLinks flex jcs ali'>
                        <li>
                            <a href='#'>About Us</a>
                        </li>
                        <li className=""> | </li>
                        <li>
                            <a href='#'>My Account</a>
                        </li>
                        <li> | </li>
                        <li>
                            <a href='#'>Whishlist</a>
                        </li>
                        <li> | </li>
                        <li>
                            <a href='#'>Order Tracking</a>
                        </li>
                    </ul>
                </div>

                <div className='col-30 headCenter jcs'>
                    <h6>Senio's Member Discount Days! Save 25% Each Tuesday</h6>
                </div>

                <div className='col-30 flex selectorSection'>
                    <div className="flex ali contactdetail">
                        <div className='needHelp'>
                            <h6>
                                Need help? Call Us:
                                <a href='#' className='callNow'>
                                    +1800900122
                                </a>
                            </h6>
                        </div>
                        <div>
                            <select className='selectHead'>
                                <option>Englist</option>
                                <option>Hindi</option>
                                <option>Gujarati</option>
                                <option>French</option>
                                <option>Tamil</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div>
                            <li> | </li>
                        </div>
                        <div>
                            <select className='selectHead'>
                                <option>INR</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>JPY</option>
                                <option>AUD</option>
                                <option>CHF</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )

}