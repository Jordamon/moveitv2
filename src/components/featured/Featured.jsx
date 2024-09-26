import React from 'react';
import { Button } from '../button/Button';
import FEATUREDCSS from './Featured.module.css';

function Featured() {
    return (
        <div className={FEATUREDCSS.featuredProducts}>

            <div className={FEATUREDCSS.categories}>
                <div className={FEATUREDCSS.smallContainer}>
                    <div className={FEATUREDCSS.row}>
                        <div className={FEATUREDCSS.col3}>
                            <img src={require("../../images/Products/Womens/TRAINING CAMI TANK/TRAINING CAMI TANK1.webp")} alt="" className='imgClass' />
                        </div>
                        <div className={FEATUREDCSS.col3}>
                            <img src={require("../../images/Products/Men's/SPORT SEAMLESS 1:4 ZIP/SPORT SEAMLESS 1:4 ZIP.webp")} alt="" className='imgClass' />
                        </div>
                        <div className={FEATUREDCSS.col3}>
                            <img src={require("../../images/Products/Womens/TRAINING OVERSIZED JUMPER/TRAINING OVERSIZED SWEATSHIRT1.webp")} alt="" className='imgClass' />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${FEATUREDCSS.smallContainer} ${FEATUREDCSS.smallContainer1}`}>
                <h2 className={FEATUREDCSS.title}>Featured Products</h2>
                <div className={FEATUREDCSS.row}>
                    <div className={FEATUREDCSS.col4}>
                        <a href="product-1.html">
                            <img src={require("../../images/Products/Men's/SPORT SEAMLESS 1:4 ZIP/SPORT SEAMLESS 1:4 ZIP.webp")} className='imgClass' alt="" />
                        </a>
                        <a href="product#1details.html">
                            <h4>SPORT SEAMLESS 1:4 ZIP</h4>
                        </a>
                        <div className={FEATUREDCSS.rating}>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <p>£36</p>
                    </div>
                    <div className={FEATUREDCSS.col4}>
                        <a href="product-2.html">
                            <img src={require("../../images/Products/Men's/BOLD STRINGER/BOLD STRINGER1.webp")} alt="" className='imgClass' />
                        </a>
                        <a href="product-2.html">
                            <h4>BOLD STRINGER</h4>
                        </a>
                        <div className={FEATUREDCSS.rating}>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>£15.40</p>
                    </div>
                    <div className={FEATUREDCSS.col4}>
                        <a href="product-3.html">
                            <img src={require("../../images/Products/Men's/ARRIVAL WOVEN/ARRIVAL WOVEN JOGGERS1.webp")} alt="" className='imgClass' />
                        </a>
                        <a href="product-3.html">
                            <h4>ARRIVAL WOVEN JOGGER</h4>
                        </a>
                        <div className={FEATUREDCSS.rating}>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>£19.20</p>
                    </div>
                    <div className={FEATUREDCSS.col4}>
                        <a href="product-4.html">
                            <img src={require("../../images/Products/Men's/APOLLO JOGGERS/APOLLO JOGGERS1.webp")} alt="" className='imgClass' />
                        </a>
                        <a href="product-4.html">
                            <h4>APOLLO JOGGERS</h4>
                        </a>
                        <div className={FEATUREDCSS.rating}>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>£26.60</p>
                    </div>
                </div>
            </div>

            <div className={FEATUREDCSS.offer}>
                <div className={FEATUREDCSS.smallContainer}>
                    <div className={FEATUREDCSS.row}>
                        <div className={`${FEATUREDCSS.col2} ${FEATUREDCSS.offerText}`}>
                            <p>Exclusively Available at MoveIt</p>
                            <h1>Garmin Forerunner 945xt</h1>
                            <small>We made this watch for you — the up-at-dawn runners and the conditioned-for-pain triathletes. While you chase your next victory, make sure you’ve got the right tool for the job.</small>
                            <br />
                            <div className={FEATUREDCSS.garminBtn}>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--outline'
                                    buttonSize='btn--medium'
                                >
                                    BUY NOW
                                </Button>
                            </div>
                        </div>
                        <div className={FEATUREDCSS.col2}></div>
                    </div>
                </div>
            </div>

            <div className={FEATUREDCSS.testimonial}>
                <div className={FEATUREDCSS.smallContainer}>
                    <div className={FEATUREDCSS.row}>
                        <div className={FEATUREDCSS.col3}>
                            <i className="fa fa-quote-left"></i>
                            <p>While the Garmin Instinct Crossover offers a good core sports tracking experience, it doesn’t deliver the perfect marriage of smart and analogue watch design and is a rare miss from Garmin.</p>
                            <div className={FEATUREDCSS.rating}>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img src={require("../../images/Testimonials/testimonial-1.jpeg")} alt="" className={FEATUREDCSS.testImg} />
                            <h3>John Smith</h3>
                        </div>
                        <div className={FEATUREDCSS.col3}>
                            <i className="fa fa-quote-left"></i>
                            <p>While the Garmin Instinct Crossover offers a good core sports tracking experience, it doesn’t deliver the perfect marriage of smart and analogue watch design and is a rare miss from Garmin.</p>
                            <div className={FEATUREDCSS.rating}>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img src={require("../../images/Testimonials/testimonial-1.jpeg")} alt="" className={FEATUREDCSS.testImg} />
                            <h3>John Smith</h3>
                        </div>
                        <div className={FEATUREDCSS.col3}>
                            <i className="fa fa-quote-left"></i>
                            <p>While the Garmin Instinct Crossover offers a good core sports tracking experience, it doesn’t deliver the perfect marriage of smart and analogue watch design and is a rare miss from Garmin.</p>
                            <div className={FEATUREDCSS.rating}>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img src={require("../../images/Testimonials/testimonial-1.jpeg")} alt="" className={FEATUREDCSS.testImg} />
                            <h3>John Smith</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className={FEATUREDCSS.brands}>
                <div className={FEATUREDCSS.smallContainer}>
                    <div className={FEATUREDCSS.row}>
                        <div className={FEATUREDCSS.col5}>
                            <img src={require("../../images/Logos/adidas-logo.png")} alt="" className={FEATUREDCSS.imgClass} />
                        </div>
                        <div className={FEATUREDCSS.col5}>
                            <img src={require("../../images/Logos/boohoo-logo.jpeg")} alt="" className={FEATUREDCSS.imgClass} />
                        </div>
                        <div className={FEATUREDCSS.col5}>
                            <img src={require("../../images/Logos/gymshark-logo.png")} alt="" className={FEATUREDCSS.imgClass} />
                        </div>
                        <div className={FEATUREDCSS.col5}>
                            <img src={require("../../images/Logos/myprotein-logo.png")} alt="" className={FEATUREDCSS.imgClass} />
                        </div>
                        <div className={FEATUREDCSS.col5}>
                            <img src={require("../../images/Logos/nike-logo.png")} alt="" className={FEATUREDCSS.imgClass} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
