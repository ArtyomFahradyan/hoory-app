import React from 'react';

const BtnGoogle = ({action, type = 'success', text, disabled = true, style = null}) => {
    return (
        <button
            style={style}
            disabled={disabled}
            className={`btn-${type} btn`}
            onClick={action}>
            {text}
        </button>
    );
};

export default BtnGoogle;