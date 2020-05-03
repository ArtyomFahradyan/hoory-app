import React from 'react';
import {colors} from '../../../configs/constants';
import Button from '../../core/button';

const SecondStep = (props) => {
    return (
        <div className="signup-content">
            <div className="form-state">
                <h2 className="form-label">Select {props.assistant.name}'s icon</h2>
            </div>
            <div className="form-state">
                <img
                    onClick={() => props.setAssistant({
                        ...props.assistant,
                        gander: 'female',
                    })}
                    className="assistant-icon"
                    src={require(`../../../images/logos/female-selected-${props.assistant.color}.svg`)}
                    alt=""/>
                <img
                    onClick={() => props.setAssistant({
                        ...props.assistant,
                        gander: 'male',
                    })}
                    className="assistant-icon"
                    src={require(`../../../images/logos/male${props.assistant.gander === 'male' ? '-selected' : ''}-${props.assistant.color}.svg`)}
                    alt=""/>
            </div>
            <div className="form-state">
                <h2 className="form-label">Select color scheme</h2>
            </div>
            <div className="colors-wrapper">
                {colors.map(color => (
                   <div
                       key={color.color}
                       style={{borderColor: color.color}}
                       className={(props.assistant.color === color.value ? 'active' : '') + ' colors-sub'}>
                       <div
                           style={{backgroundColor: color.color}}
                           onClick={() => props.setAssistant({
                               ...props.assistant,
                               color: color.value,
                           })}
                           className={
                               (color.value === props.assistant.color ? 'selected ' : '') +
                               ` color-container-${color.value} color`
                           }>
                       </div>
                   </div>
                ))}
            </div>
            <div className="form-state">
                <Button
                    disabled={false}
                    action={props.handleNextStep}
                    text="Next"
                    type="success"/>
            </div>
        </div>
    );
};

export default SecondStep;