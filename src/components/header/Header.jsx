import React from 'react'
import {Button} from'../button/Button';
import './Header.css';
import '../button/Button.css';

function Header () {
    return (
        <div className='home'>
                <div className="row index">
                        <div className="col-2">
                            <img src={require("../../images/shoe-transparent-background-20.png")} alt="" className="banner-img"/>
                        </div>
                        <div className="col-2 headercol title-container">
                            <h1>KEEP IT MOVING,<br/> we're on another level!</h1>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--outline'
                                    buttonSize='btn--large'
                                >
                                    EXPLORE NOW
                                </Button>
                        </div>
                    </div>
            </div>
                )
};

export default Header;