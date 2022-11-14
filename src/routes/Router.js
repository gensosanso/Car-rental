import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import NewBien from "../pages/NewBien";
import MesBiens from "../pages/MesBiens";
import Settings from "../pages/Settings";
import tousLesBiens from "../assets/dummy-data/biens";

const LOGGED_USER_ID = 1;
const biensArr = tousLesBiens;
const users = biensArr.map(b => b.user);
const user = users.find(u => u.id === LOGGED_USER_ID);
const usersBiens = biensArr.filter(b => b.user.id === LOGGED_USER_ID);


const Router = () => {
        return ( <
                Routes >
                <
                Route path = "/"
                element = { < Navigate to = "/dashboard"
                    element = { < Dashboard biens = { biensArr } />} / > }
                    /> <
                    Route path = "/dashboard"
                    element = { < Dashboard / > }
                    /> <
                    Route path = "/new-bien"
                    element = { < NewBien / > }
                    /> <
                    Route path = "/mes-biens"
                    element = { < MesBiens biens = { usersBiens }
                        />} / >
                        <
                        Route path = "/settings"
                        element = { < Settings / > }
                        /> < /
                        Routes >
                    );
                };

                export default Router;