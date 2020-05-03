import React, {useEffect, useState} from 'react';
import LeftSidebarMenu from '../core/left-sidebar-menu';
import {DASHBOARD_PAGE, defSteps, LOGIN_PAGE} from '../../configs/constants';
import FirstStep from './first-step/firstStep';
import SecondStep from './second-step/secondStep';
import ThirdStep from './third-step/thirdStep';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {addWorkspaceRequest, editUserRequest, signUpRequest} from '../../redux/actions';
import Congrats from './congrats';
import _ from 'lodash';

const SignUp = (props) => {
    const dispatch = useDispatch();
    const {user: logedinUser, workspace} = useSelector((state) => state.user, shallowEqual);
    const [steps, setSteps] = useState(defSteps);
    const [currentStep, setCurrentStep] = useState(steps.FIRST_STEP);
    const [assistant, setAssistant] = useState(workspace ? workspace : {
        name: '',
        color: '1',
        gander: 'female',
    });
    const [savedUser, setSavedUser] = useState(logedinUser);
    useEffect(() => {
        if (!_.isEqual(savedUser, logedinUser)) {
            props.history.push(DASHBOARD_PAGE);
        }
        if (logedinUser && steps.THIRD_STEP) {
            const newSteps = JSON.parse(JSON.stringify(steps));
            delete newSteps.THIRD_STEP;
            setSteps(newSteps);
        }
    }, [logedinUser, savedUser, props.history, steps]);

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    let stepComponent = null;
    switch (currentStep.value) {
        case defSteps.FIRST_STEP.value:
            stepComponent = (
                <FirstStep
                    assistant={assistant}
                    setAssistant={setAssistant}
                    handleNextStep={() => {
                        if (assistant.name) {
                            setSteps({
                                ...steps,
                                FIRST_STEP: {
                                    ...steps.FIRST_STEP,
                                    done: true,
                                },
                            });
                            setCurrentStep(steps.SECOND_STEP);
                        }
                    }}/>);
            break;
        case defSteps.SECOND_STEP.value:
            stepComponent = (
                <SecondStep
                    assistant={assistant}
                    setAssistant={setAssistant}
                    handleNextStep={() => {
                        if (assistant.color && assistant.gander) {
                            setSteps({
                                ...steps,
                                SECOND_STEP: {
                                    ...steps.SECOND_STEP,
                                    done: true,
                                },
                            });
                            if (workspace) {
                                dispatch(editUserRequest({
                                    userId: logedinUser._id,
                                    assistant,
                                }));
                            } else if(!workspace && logedinUser) {
                                dispatch(addWorkspaceRequest({assistant, userId: logedinUser._id}));
                            }else {
                                setCurrentStep(steps.THIRD_STEP);
                            }
                        }
                    }}/>);
            break;
        case defSteps.THIRD_STEP.value:
            stepComponent = (
                <ThirdStep
                    user={user}
                    setUser={setUser}
                    handleNextStep={() => {
                        if (
                            user.firstName &&
                            user.lastName  &&
                            user.email     &&
                            user.password
                        ) {
                            setSteps({
                                ...steps,
                                THIRD_STEP: {
                                    ...steps.THIRD_STEP,
                                    done: true,
                                },
                            });
                            setCurrentStep({});
                            dispatch(signUpRequest({
                                user,
                                assistant,
                            }));
                        }
                    }}
                />
            );
            break;
        default:
            stepComponent = (
                <Congrats
                    handleNextStep={() => props.history.push(LOGIN_PAGE)}
                    name={user.firstName}
                    assistant={assistant}/>
            );
    }

    return (
        <div className="signup">
            <div className="left-bar-container">
                <LeftSidebarMenu steps={steps}/>
            </div>
            <div className="signup-container">
                {stepComponent}
            </div>
        </div>
    );
};

export default SignUp;