import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';

const Header = () => {
return(
    <nav>
        <IndexLink to="/home" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/coupons" activeClassName="active">Coupons</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
    </nav>
);

};

export default Header;
