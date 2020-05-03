import React, {useState} from 'react';

const Assistant = ({assistant, editAction, deleteAction}) => {
    const [showEdit, setShowEdit] = useState(false);
    return (
        <div className="assistant-wrapper">
            <div className="name-and-icon">
                <img
                    className="assistant-icon"
                    src={require(`../../../images/logos/${assistant.gander}-selected-${assistant.color}.svg`)}
                    alt="logo"/>
                <span>{assistant.name}</span>
            </div>
            <div className="icons">
                {showEdit ?
                    <>
                        <div className="edit-icon-wrapper">
                            <img
                                onClick={() => editAction(assistant)}
                                className="edit-icon"
                                src={require('../../../images/edit.png')}
                                alt="logo"/>
                        </div>
                        <div className="edit-icon-wrapper">
                            <img
                                onClick={() => deleteAction(assistant._id)}
                                className="edit-icon"
                                src={require('../../../images/delete.png')}
                                alt="logo"/>
                        </div>
                    </> : null
                }
                <div className="edit-icon-wrapper">
                    <img
                        className="edit-icon"
                        onClick={() => setShowEdit(!showEdit)}
                        src={require('../../../images/dots.png')}
                        alt="logo"/>
                </div>
            </div>
        </div>
    );
};

export default Assistant;