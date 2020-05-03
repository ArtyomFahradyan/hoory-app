import React from 'react';

const Button = ({action}) => {
    return (
        <button
            className="btn-google"
            onClick={action}>
            {<img src={require('../../../images/google icon.svg')} alt="google icon"/>}
            Sign Up with Google
        </button>
    );
};

export default Button;