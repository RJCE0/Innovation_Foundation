import React from "react";
import { DiscoverNavbar } from "../discover/DiscoverNavbar";
import Footer from "../layout/Footer";

export const MyApplications = () => {
  return (
    <>
      <DiscoverNavbar />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          padding: "20px 20px",
          height: "80vh",
        }}
      >
        <h1>My Applications</h1>
      </div>
      <Footer />
    </>
  );
};
