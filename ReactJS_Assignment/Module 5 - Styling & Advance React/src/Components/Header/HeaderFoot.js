export default function HeaderFoot() {
    return (
        <div className='MainContainer'>
            <div className='main flex jcs ali px-3'>

                {/* Col - 30 */}
                <div className='col-35'>
                    <div className='leftHeadFooter flex ali mt-4 mb-4'>
                        <div className='dropdown'>
                            <a
                                className='btn btn-secondary dropdown-toggle px-4 py-2 fs-6 category'
                                href='#'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                <i class='me-2 fs-5 fa-solid fa-border-all'></i> Browse All Categories
                            </a>

                            <ul class='dropdown-menu'>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='mx-5 fs-20px'><a href='#' className="text-dark  py-2 px-3 fw-medium"> <i class='fa-solid fa-fire dealIcon fs-5 me-2'></i> Hot Deals</a>
                        </div>
                    </div>
                </div>

                {/* Col 70 */}

                <div className='col-65'>
                    <div className='rightHeadFooter flex'>
                        {/* Home */}

                        <div className='dropdown marginLeft'>
                            <a
                                className='btn dropdown-toggle homeTab'
                                href='#'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >Home
                            </a>

                            <ul class='dropdown-menu'>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Home 1
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Home 2
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Home 3
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Home 4
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Home 5
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Home 6
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Home 7
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Home 8
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Home 9
                                    </a>
                                </li>
                            </ul>
                        </div>


                        {/* About */}
                        <div className="marginLeft textLinkAlign  fw-medium">
                            <a href='#'>About</a>
                        </div>

                        {/* Shop */}
                        <div className='dropdown marginLeft'>
                            <a
                                className='btn dropdown-toggle fw-medium'
                                href='#'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Shop
                            </a>

                            <ul class='dropdown-menu'>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>


                        {/* Vendors */}

                        <div className='dropdown marginLeft'>
                            <a
                                className='btn dropdown-toggle fw-medium'
                                href='#'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Vendors
                            </a>

                            <ul class='dropdown-menu'>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Store Listing
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Store Details
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        My Order
                                    </a>
                                </li>
                            </ul>
                        </div>


                        {/* Mega Menu */}

                        <div className='dropdown marginLeft'>
                            <a
                                className='btn dropdown-toggle fw-medium'
                                href='#'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Mega Menu
                            </a>

                            <ul class='dropdown-menu'>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>


                        {/* Blog */}
                        <div className='dropdown marginLeft'>
                            <a
                                className='btn dropdown-toggle fw-medium'
                                href='#'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Blog
                            </a>

                            <ul class='dropdown-menu'>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Blog default
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Blog Grid
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Blogi List
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Blog Big
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Blog Wide
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Single Blog
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Pages */}
                        <div className='dropdown marginLeft'>
                            <a
                                className='btn dropdown-toggle fw-medium'
                                href='#'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Pages
                            </a>

                            <ul class='dropdown-menu'>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        My Account
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Shop Cart
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Shop Compare
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Shop Whishlist
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Checkout
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Refund and Return Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="marginLeft textLinkAlign fw-medium">
                            <a href='#'>Contact</a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
