import "./CardSlot.css"

export default function CardSlot() {

    return (
        <div className="MainContainer my-5">
            <div className="main">
                <div className="cardHeader flex ali">
                    <h2 className="me-5">Featured Categories</h2>

                    <a href="#" className="text-dark px-3 py-2"><h6>Cake & Milk</h6></a>
                    <a href="#" className="text-dark px-3 py-2"><h6>Coffee & Teas</h6></a>
                    <a href="#" className="text-dark px-3 py-2"><h6>Cake</h6></a>
                    <a href="#" className="text-dark px-3 py-2"><h6>Pet Foods</h6></a>
                    <a href="#" className="text-dark px-3 py-2"><h6>Vegetables</h6></a>
                </div>

                <div className="cardsSection flex ali jcs mt-4">

                    <div className="col-9 card flex ali jcc rounded-4 bg-red bgColor py-3">
                        <div>
                            <img className="cardImg" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png" alt="Coke & Milk"></img>
                        </div>
                        <div className="cardTitle text-center mt-3">
                            <h6>Coke & Milk</h6>
                            <p>11 items</p>
                        </div>
                    </div>

                    <div className="col-9 card  flex ali jcc rounded-4 bgColor py-3">
                        <div>
                            <img className="cardImg" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-12.png" alt="Organic Kiwi"></img>
                        </div>
                        <div className="cardTitle text-center mt-3">
                            <h6>Organic Kiwi</h6>
                            <p>6 items</p>
                        </div>
                    </div>

                    <div className="col-9 card flex ali jcc rounded-4 bgColor py-3">
                        <div>
                            <img className="cardImg" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-11.png" alt="Peach"></img>
                        </div>
                        <div className="cardTitle text-center mt-3">
                            <h6>Peach</h6>
                            <p>6 items</p>
                        </div>
                    </div>

                    <div className="col-9 card flex ali jcc rounded-4 bgColor py-3">
                        <div>
                            <img className="cardImg" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-9.png" alt="Red Apple"></img>
                        </div>
                        <div className="cardTitle text-center mt-3">
                            <h6>Red Apple</h6>
                            <p>10 items</p>
                        </div>
                    </div>

                    <div className="col-9 card flex ali jcc rounded-4 bgColor py-3">
                        <div>
                            <img className="cardImg" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-3.png" alt="Snacks"></img>
                        </div>
                        <div className="cardTitle text-center mt-3">
                            <h6>Snacks</h6>
                            <p>11 items</p>
                        </div>
                    </div>

                    <div className="col-9 card flex ali jcc rounded-4 bgColor py-3">
                        <div>
                            <img className="cardImg" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-1.png" alt="Vegetable"></img>
                        </div>
                        <div className="cardTitle text-center mt-3">
                            <h6>Vegetable</h6>
                            <p>6 items</p>
                        </div>
                    </div>

                    <div className="col-9 card flex ali jcc rounded-4 bgColor py-3">
                        <div>
                            <img className="cardImg" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-2.png" alt="Strawberry"></img>
                        </div>
                        <div className="cardTitle text-center mt-3">
                            <h6>Strawberryk</h6>
                            <p>10 items</p>
                        </div>
                    </div>

                    <div className="col-9 card flex ali jcc rounded-4 bgColor py-3">
                        <div>
                            <img className="cardImg" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-4.png" alt="Black Plum"></img>
                        </div>
                        <div className="cardTitle text-center mt-3">
                            <h6>Black Pilm</h6>
                            <p>10 items</p>
                        </div>
                    </div>

                    <div className="col-9 card flex ali jcc rounded-4 bgColor py-3">
                        <div>
                            <img className="cardImg" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-5.png" alt="Custured Apple"></img>
                        </div>
                        <div className="cardTitle text-center mt-3">
                            <h6>Custured Apple</h6>
                            <p>10 items</p>
                        </div>
                    </div>

                    <div className="col-9 card flex ali jcc rounded-4 bgColor py-3">
                        <div>
                            <img className="cardImg" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-14.png" alt="Coffee & Tea"></img>
                        </div>
                        <div className="cardTitle text-center mt-3">
                            <h6>Coffee & Tea</h6>
                            <p>11 items</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}