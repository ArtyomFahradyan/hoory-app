import React from 'react';

const TwoInputInOne = (
    {
        setSecondInputValue,
        setFirstInputValue,
        firstInputPlaceholder = '',
        secondInputPlaceholder = '',
        firstInputValue = '',
        secondInputValue = '',
        type = 'text',
        textCenter = false,
    },
) => {
    return (
        <div className="two-inputs-in-one">
            <input
                autoComplete="off"
                className={(textCenter ? 'input-text-center' : '') + ' text-input first-input'}
                onChange={(e) => setFirstInputValue(e.target.value)}
                type={type}
                placeholder={firstInputPlaceholder}
                value={firstInputValue} />
            <input
                autoComplete="off"
                className={(textCenter ? 'input-text-center' : '') + ' text-input second-input'}
                onChange={(e) => setSecondInputValue(e.target.value)}
                type={type}
                placeholder={secondInputPlaceholder}
                value={secondInputValue} />
        </div>
    );
};

export default TwoInputInOne;