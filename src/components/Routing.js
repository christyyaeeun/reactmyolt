import React from "react";

// Import pages
import Home from "./Homepage";
import UserProfile from "./Profile";
import Journal from "./Journal";

import { Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import Header from './container/Header';

export const HomeRoute = "/";
export const ProfileRoute = "profile/";
export const JournalRoute = "journal/";

class Routing extends React.Component {
  render() {
    return (
      <>
      <Outlet>
        <Route path={HomeRoute} component={Home} />
        <Route path={ProfileRoute} exact component={UserProfile} />
        <Route path={JournalRoute} component={Journal} />
        </Outlet>
      </>
    );
  }
}

export default Outlet(Routing);
