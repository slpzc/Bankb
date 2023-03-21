import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Authorization from "../pages/Authorizations";
import OutletLayout from "@components/OutletLayout";
import Main from "../pages/Main";
import Dialogs from "../pages/Dialogs";

import Menu from "@components/Menu";
// @ts-ignore
import Scroll from 'react-scroll';
import Transfer from "../pages/transfer";
import History from "../pages/history";
import DialogMessenger from "../pages/dialogMessenger";
import TransferDialog from "../pages/transferDialog";

const Element = Scroll.Element;

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <Element>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Authorization/>}/>
                <Route path="/application" element={<OutletLayout/>}>
                    <Route path="main" element={<Main/>}/>
                    <Route path="dialogs" element={<Dialogs/>}/>
                    <Route path="dialogs/:id" element={<DialogMessenger/>}/>
                    <Route path="transfer" element={<Transfer/>}/>
                    <Route path="history" element={<History/>}/>
                </Route>
                <Route path="/application/transferDialog/:id" element={<TransferDialog/>}/>
            </Routes>
            <Menu/>
        </Element>
    );
};

export default AnimatedRoutes;