import React from 'react';
import hooryIcon from '../../../images/hoory icon grey.svg';
import Input from '../../core/input';
import Button from '../../core/button';

const FirstStep = (props) => {
    return (
        <div className="signup-content">
            <div className="step-logo">
                <img src={hooryIcon} alt="hooryIcon"/>
            </div>
            <div className="form-state logo-label">
                <span>hoory</span>
            </div>
            <div className="form-state">
                <form className="form-first-step">
                    <label className="assistant-name-label" htmlFor="assistant-name">Name your assistant</label>
                    <Input
                        required={true}
                        onChange={name => props.setAssistant({
                            ...props.assistant,
                            name,
                        })}
                        value={props.assistant.name}
                        type="text"
                        textCenter={true}
                        filedId="assistant-name" />
                </form>
            </div>
            <div className="form-state">
                <Button
                    disabled={!props.assistant.name}
                    action={props.handleNextStep}
                    text="Start"
                    type="success"/>
            </div>
        </div>
    );
};

export default FirstStep;