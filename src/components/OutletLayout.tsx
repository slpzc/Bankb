import React from 'react';
import {Outlet, useParams} from "react-router-dom";
import Search from "../components/search";
import Navigation from "../components/navigation";
import styled from 'styled-components'

const Content = styled.main`
  padding-bottom: 140px;
  &.margin{
    margin-top: 81px;
  }
`;

const OutletLayout = () => {
    const {id} = useParams();

    return (
        <>
            <Search />
             <Content className={`content ${ !id && 'margin'}`}>
                 <Outlet/>
             </Content>
            <Navigation/>
        </>
    );
};

export default OutletLayout;