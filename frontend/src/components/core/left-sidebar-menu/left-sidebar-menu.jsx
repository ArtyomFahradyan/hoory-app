import React from 'react';
import logo from '../../../images/logo.svg';
import stepImg from '../../../images/step.svg';
import doneImg from '../../../images/done.svg';

const LeftSidebarMenu = ({steps}) => {
    return (
        <>
            <nav className="sidenav">
                <div className="logo">
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="signup-steps">
                    <ul>
                        {
                            Object.values(steps).map(step => (
                                    <li key={step.text}>
                                        {step.done ?
                                            <img src={doneImg} alt="doneImg"/> :
                                            <img src={stepImg} alt="stepImg"/>
                                        }

                                        {step.text}
                                    </li>
                                ),
                            )
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default LeftSidebarMenu;
