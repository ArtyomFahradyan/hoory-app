import React from 'react';

export const AlertTemplate = ({
    message,
    customFields,
    handleClose,
    classNames,
}) => {
    const {title, className} = customFields;

    return (
        <div className={` alert-notify ${classNames} ${className}`}>
            {title && <h4 className="ui-pnotify-title">{(title)}!</h4>}
            <div className="ui-pnotify-text">{message}</div>
            <span className='s-alert-close' onClick={handleClose}/>
        </div>
    );
};

export default AlertTemplate;
