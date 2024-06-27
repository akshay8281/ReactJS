
export default function HeaderMain() {
    return (
        <div className='MainContainer mt-4'>
            <div className='main flex ali jcs'>
                <div className='col-50'>
                    <div className="leftBar flex jcs ali">
                        <div className='logoContainer'>
                            <img
                                className='headerLogo'
                                src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/logo.png'
                                alt='img'
                            ></img>
                        </div>

                        <div className='input-group mb-3 inputbar border-success rounded-2'>
                            <input
                                type='text'
                                className='form-control '
                                placeholder="Search for products"
                                aria-label="Recipient's username"
                                aria-describedby='basic-addon2'
                            ></input>
                            <div className='input-group-append'>
                                <button className='searchBtn btn btn-success ' type='button'>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-50 rightBar flex ali jcc">
                    <div>
                        <button type='button' class='btn vendor btn-light'>
                            Become Vendor <i class='fa-solid fa-arrow-right'></i>
                        </button>
                    </div>

                    <div className="">
                        <ul className="flex buySlot">
                            <li>
                                <i class='fa-solid fa-arrows-spin'></i>
                                <a href='#'>Compare</a>
                            </li>
                            <li>
                                <i class='fa-regular fa-heart'></i>
                                <a href='#'>Whishlist</a>
                            </li>
                            <li>
                                <i class='fa-solid fa-cart-arrow-down'></i>
                                <a href='#'>Cart</a>
                            </li>
                            <li>
                                <i class='fa-regular fa-user'></i>
                                <a href='#'>Account</a>
                            </li>
                        </ul>
                    </div>
                </div>






            </div>
        </div>
    )
}
