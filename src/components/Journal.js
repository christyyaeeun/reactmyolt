import React from "react";
import { Outlet } from "react-router-dom";
import { Entry1 } from "../ui-components";

export default function Journal() {
  return (
    <div className="journal-page">
      <div className="journal-content">
        <h2 class="text-center mt-3">Journal</h2>
        <div className="journal">
          <Entry1 />
        </div>
        <Outlet />
      </div>
      </div>
  );
}
