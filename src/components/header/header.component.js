import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import "./header.component.css";
import { useStateValue } from "../../store/state.provider";

const Header = () => {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
          alt=""
        />
        <div className="header-input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header-center">
        <div className="header-option header-option-active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header-option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header-option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header-right">
          <div className="header-info">
              <Avatar src={user.photoURL}/>
              <h4>{user.displayName}</h4>
          </div>

          <IconButton>
              <AddIcon/>
          </IconButton>
          <IconButton>
              <ForumIcon/>
          </IconButton>
          <IconButton>
              <NotificationsActiveIcon/>
          </IconButton>
          <IconButton>
              <ExpandMoreIcon/>
          </IconButton>
      </div>
    </div>
  );
};

export default Header;
