import React, {FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styled from '@mui/system/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import LogoHorizontalNegativo from './logos/LogoHorizontalNegativo';

import ResponsiveHeader from '@geomatico/geocomponents/Layout/ResponsiveHeader';
import SidePanel from '@geomatico/geocomponents/Layout/SidePanel';
import MiniSidePanel from '@geomatico/geocomponents/Layout/MiniSidePanel';

import {
  DRAWER_WIDTH,
  MINI_SIDE_PANEL_DENSE_WIDTH,
  MINI_SIDE_PANEL_WIDTH,
  MINISIDEPANEL_CONFIG, SM_BREAKPOINT,
} from '../config';

export type MainProps = {
  widescreen: boolean,
  isleftdraweropen: boolean
}

const Main = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'widescreen' && prop !== 'isleftdraweropen',
})<MainProps>(({ widescreen, isleftdraweropen }) => ({
  flexGrow: 1,
  padding: 0,
  position: 'absolute',
  top: 56,
  '@media (min-width: 0px) and (orientation: landscape)': {
    top: 48
  },
  ['@media (min-width: '+ SM_BREAKPOINT +'px)']: {
    top: 64
  },
  bottom: 0,
  right: 0,
  left: widescreen ? +(isleftdraweropen && DRAWER_WIDTH) + MINI_SIDE_PANEL_WIDTH : MINI_SIDE_PANEL_DENSE_WIDTH
})) as React.ElementType;

const responsiveHeaderSx = {
  '&.MuiAppBar-root': {
    zIndex: 1500
  }
};

export type LayoutProps = {
  mainContent: React.ReactElement,
  sidePanelContent: React.ReactElement,
  miniSidePanelSelectedActionId?: string
};

const Layout:  FC<LayoutProps> = ({mainContent, sidePanelContent, miniSidePanelSelectedActionId = 'mapView'}) => {
  const navigate = useNavigate();
  const widescreen = useMediaQuery(`@media (min-width:${SM_BREAKPOINT}px)`, {noSsr: true});
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

  const handleActionClick = (id: string) => {
    const config_element = MINISIDEPANEL_CONFIG.find(el => el.id === id);
    if (miniSidePanelSelectedActionId === id && sidePanelContent) {
      setIsSidePanelOpen(!isSidePanelOpen);
    } else {
      if(config_element) navigate(config_element.route);
    }
  };

  const handleClose = () => setIsSidePanelOpen(!isSidePanelOpen);

  const sidePanelSx = {
    '& .MuiPaper-root': {
      left: widescreen ? MINI_SIDE_PANEL_WIDTH : MINI_SIDE_PANEL_DENSE_WIDTH
    }
  };

  return <>
    <ResponsiveHeader
      title="Pasión por la información geográfica"
      logo={<LogoHorizontalNegativo width="100%"/>}
      onStartIconClick={widescreen ? undefined : handleClose}
      isStartIconCloseable={isSidePanelOpen}
      sx={responsiveHeaderSx}
    >
    </ResponsiveHeader>
    <MiniSidePanel
      actions={MINISIDEPANEL_CONFIG}
      selectedActionId={miniSidePanelSelectedActionId}
      onActionClick={handleActionClick}
      dense={!widescreen}
    />
    {sidePanelContent && isSidePanelOpen &&
      <SidePanel
        drawerWidth={DRAWER_WIDTH + 'px'}
        anchor="left"
        isOpen={isSidePanelOpen}
        onClose={handleClose}
        widescreen={widescreen}
        sx={sidePanelSx}
      >
        {sidePanelContent}
      </SidePanel>
    }
    <Main widescreen={widescreen} isleftdraweropen={sidePanelContent && isSidePanelOpen}>
      {mainContent}
    </Main>
  </>;
};

export default Layout;
