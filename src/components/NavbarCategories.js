import React from "react";
import { makeStyles } from "@material-ui/core";

import "./NavbarCategories.css";

const useStyles = makeStyles((theme) => ({
  component: {
    display: "flex",
    margin: "12px 30px 0 30px",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.action.hover, // Use theme hover color
    },
  },
  image: {
    width: 64,
    marginBottom: theme.spacing(1), // Add some spacing below the image
  },
  text: {
    marginTop: theme.spacing(1), // Add some spacing above the text
    fontSize: 14,
    fontWeight: 600,
  },
}));

const NavbarCategories = () => {
  return (
    // <Box className={classNamees.component}>
    <div className="superContainer">
      <div className="container">
        <div className="innerContainer">
          <ul className="innerMostContainer">
            <li>
              <a className="navLink" href="/product">
                AK Products
              </a>
            </li>
            <li>
              <a className="navLink" href="/product">
                Baby Care
              </a>
            </li>
            <li>
              <a className="navLink" href="/product">
                Health Drinks &amp; Supplements
              </a>
            </li>
            <li>
              <a className="navLink" href="/product">
                Women Care
              </a>
            </li>
            <li>
              <a className="navLink" href="/product">
                Personal Care
              </a>
            </li>
            <li>
              <a className="navLink" href="/product">
                Ayurveda
              </a>
            </li>
            <li>
              <a className="navLink" href="/product">
                Health Devices
              </a>
            </li>
            <li>
              <a className="navLink" href="/product">
                Home Essentials
              </a>
            </li>
            <li>
              <a className="navLink" href="/product">
                Health Condition
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarCategories;
