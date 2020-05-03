import React from 'react';

const Header = (props) => {
    return (
        <header className="header">
            <div>
                <img
                    className="img-user"
                    src={require('../../../images/user.png')}
                    alt="userImg"/>
            </div>
            <div className="user-info">
                <span className="name-surname">{props.user.firstName + ' ' + props.user.firstName}</span>
                <span className="email">{props.user.email}</span>
            </div>
            <button
                onClick={props.logout}
                className="btn-logout">
                Logout
                <img
                    src={require('../../../images/Shape.svg')}
                    alt="shapeIcon"/>
            </button>
        </header>
    );
};

export default Header;