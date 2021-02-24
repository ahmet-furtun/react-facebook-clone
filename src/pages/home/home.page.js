import React from 'react';

import Feed from '../../components/feed/feed.component';
import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Widgets from '../../components/widgets/widgets.component';

const Home = () => {
    return (
        <div className="homepage">
            <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
    )
}

export default Home;
