// import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import { MainPage } from "./ui-components";
// import { Profile } from "./ui-components";
import { Profile } from "../ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "./protectedRoute";

 function UserProfile() {
  return (
    <>
    <div className="profile">
    <Profile />


    </div>
<Outlet />
</>
    );
}

export default withAuthenticator(UserProfile);