import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './index.less';

function MyNavLink(props) {
    return (
        <NavLink activeClassName={style.active} className={style.nav} {...props} />
    )
}

export default MyNavLink;