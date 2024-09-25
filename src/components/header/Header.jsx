import React from 'react'
import HEADERCSS from './Header.module.css';

function Header () {
    return (
        <div className={HEADERCSS.home}>
                <div className={HEADERCSS.index}>
                        <div className={`${HEADERCSS.headercol} ${HEADERCSS.titleContainer}`}>
                            <h1>KEEP IT MOVING.<br/> WE'RE ON ANOTHER LEVEL.</h1>
                        </div>
                    </div>
            </div>
                )
};

export default Header;