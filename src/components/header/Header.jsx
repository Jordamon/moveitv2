import React from 'react'
import {Button} from'../button/Button';
import './Header.css';
import '../button/Button.css';

function Header () {
    return (
        <div className='home'>
                <div className="row index">
                        <div className="col-2 headercol">
                            <h1>Keep it moving,
                                we're on another level!</h1>
                            <p>Consistancy is key. You've got to find your pace and keep at it.
                                We're here to drive you forwards!</p>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--outline'
                                    buttonSize='btn--large'
                                >
                                    EXPLORE NOW
                                </Button>
                        </div>
                        <div className="col-2">
                            <img src={require("../../images/shoe-transparent-background-20.png")} alt="" className="banner-img"/>
                        </div>
                    </div>
            </div>
                )
};

export default Header;