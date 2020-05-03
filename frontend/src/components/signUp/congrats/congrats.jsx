import React from 'react';
import Button from '../../core/button/button';
import {Link} from 'react-router-dom';

const Congrats = (props) => {
    return (
        <div className="signup-content">
            <div className="step-logo">
                <img
                    src={require(`../../../images/logos/${props.assistant.gander}-selected-${props.assistant.color}.svg`)}
                    alt="hooryIcon"/>
            </div>
            <div className="form-state signup-form-control">
                <h2 className="form-label">
                    Fantastico
                    {
                        <img
                            className="popper-icon"
                            src={require('../../../images/popper1.png')}
                            alt="popper"/>
                    }
                </h2>
            </div>
            <div className="signup-form-control congrats-text">
                <p>You have successfully setup the hoory widget on your web site!</p>
                <p>Proceed to admin Dashboard to start training {props.name}</p>
            </div>
            <div className="form-state">
                <Link
                    to={{
                        pathname: '/login',
                    }}
                    className='list-item-settings__item'
                >
                    <Button
                        disabled={!props.assistant.name}
                        action={props.handleNextStep}
                        text="Go to Admin Dashboard"
                        type="success"/>
                </Link>
            </div>
        </div>
    );
};

export default Congrats;