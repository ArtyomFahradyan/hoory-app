import React from 'react';

// eslint-disable-next-line max-len
const Input = ({onChange, value = '', type = 'text', placeholder = '', textCenter = false, filedId = 'text-input', required = false, name = ''}) => {
    return (
        <>
            <input
                required={required}
                autoComplete="off"
                name={name}
                id={filedId}
                className={(textCenter ? 'input-text-center' : '') + ' text-input'}
                onChange={(e) => onChange(e.target.value)}
                type={type}
                placeholder={placeholder}
                value={value} />
            {type === 'password' ?
                <img className="eye-icon" src={require('../../../images/password visibility.svg')} alt="eye icon"/> :
                null
            }
        </>
    );
};

export default Input;