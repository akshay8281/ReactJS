
import "./MainSlider.css"

export default function MainSlider() {
    return (
        <div className='MainContainer mt-5'>
            <div className='main '>
                <div id='carouselExampleFade' class='carousel slide carousel-fade'>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div class='carousel-inner'>
                        <div class='carousel-item active'>
                            <img
                                class='d-block w-100 rounded-5 imgSlide'
                                src='https://img.freepik.com/free-photo/supermarket-banner-concept-with-ingredients_23-2149421160.jpg?size=626&ext=jpg'
                                alt='img'
                            ></img>
                        </div>
                        <div class='carousel-item'>
                            <img
                                class='d-block w-100 rounded-5 imgSlide'
                                src='https://img.freepik.com/free-photo/supermarket-banner-concept-with-ingredients_23-2149421125.jpg?w=1380&t=st=1713756380~exp=1713756980~hmac=c81797a6cdc1b3cc3b3b81f4e548cd23ca0ba64b60e73ddb007096a320f2501a'
                                alt='img'
                            ></img>
                        </div>
                        <div class='carousel-item'>
                            <img
                                class='d-block w-100 rounded-5 imgSlide'
                                src='https://img.freepik.com/premium-photo/string-bag-with-grocery-two-tone-background_185193-85430.jpg?size=626&ext=jpg'
                                alt='img'
                            ></img>
                        </div>
                    </div>

                    <button
                        class='carousel-control-prev'
                        type='button'
                        data-bs-target='#carouselExampleFade'
                        data-bs-slide='prev'>
                        <span class='carousel-control-prev-icon me-5' aria-hidden='true'></span>
                        <span class='visually-hidden'>Previous</span>
                    </button>
                    <button
                        class='carousel-control-next'
                        type='button'
                        data-bs-target='#carouselExampleFade'
                        data-bs-slide='next'>
                        <span class='carousel-control-next-icon' aria-hidden='true'></span>
                        <span class='visually-hidden'>Next</span>
                    </button>

                </div>
            </div>
        </div>
    )
}
