import React from 'react';

import { Avatar } from '@material-ui/core';

import './sidebar-row.component.css';

const SidebarRow = ({src, Icon, title}) => {
    return (
        <div className="sidebarrow">
            {src && <Avatar src={src} />}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow;
