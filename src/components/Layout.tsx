import React, {FC, useState} from 'react';

import styled from '@mui/system/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import LogoHorizontalNegativo from './logos/LogoHorizontalNegativo';

//MUI-ICONS
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import CelebrationIcon from '@mui/icons-material/Celebration';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import SettingsIcon from '@mui/icons-material/Settings';

import ResponsiveHeader from '@geomatico/geocomponents/Layout/ResponsiveHeader';
import SidePanel from '@geomatico/geocomponents/Layout/SidePanel';
import MiniSidePanel from '@geomatico/geocomponents/Layout/MiniSidePanel';

import {
  DRAWER_WIDTH,
  MINI_SIDE_PANEL_WIDTH,
  SM_BREAKPOINT,
} from '../config';
import {useTranslation} from 'react-i18next';
/*import {getUniqueValues} from '../utils/getUniqueValues';
import {evaluateOccurrences} from '../utils/evaluateOccurrences';*/
import AlertOccurrences from './AlertOccurrences';
/*import {CulturalEvent} from '../domain/entities/CulturalEvent';*/
import {ChangedTypes} from '../domain/entities/common';


export type MainProps = {
  widescreen: boolean,
  isleftdraweropen: boolean
}

const Main = styled(Box)<MainProps>(() => ({
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
  left: 0
})) as React.ElementType;

const responsiveHeaderSx = {
  '&.MuiAppBar-root': {
    zIndex: 1500
  }
};

const styles = {
  sidePanel: {
    '& .MuiPaper-root': {
      left: 10 + MINI_SIDE_PANEL_WIDTH + 10,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRadius: '5px',
      height: 'auto',
      maxHeight: '80%',
      opacity: 0.75
    }
  },
  miniSidePanel: {
    '& .MiniSidePanel-menu': {
      opacity: 0.75
    },
    '& .MuiPaper-root': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: 10,
      height: 'auto',
      borderRadius: '5px',

    }
  }
};

export type LayoutProps = {
  isAlertTypeOpen: boolean,
  newTypes: ChangedTypes,
  mainContent: React.ReactElement,
  sidePanelContent: React.ReactElement,
  menuId?: string,
  onMenuIdChange: (menuId: string) => void,
  onAlertTypeOpen: () => void,
};

const Layout:  FC<LayoutProps> = ({isAlertTypeOpen, newTypes, mainContent, sidePanelContent, menuId, onMenuIdChange, onAlertTypeOpen}) => {

  const {t} = useTranslation();

  const widescreen = useMediaQuery(`@media (min-width:${SM_BREAKPOINT}px)`, {noSsr: true});
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);


  const handleMenuIdChange = (menuId: string) => onMenuIdChange(menuId);

  const handleClose = () => setIsSidePanelOpen(!isSidePanelOpen);


  const MINISIDEPANEL_CONFIG = [
    {id: 'type', label: t('type') , content: <CelebrationIcon/>},
    {id: 'date', label: t('date') , content: <CalendarMonthIcon/>},
    {id: 'audience', label: t('audience') , content: <PeopleIcon/>},
    {id: 'location', label: t('location') , content: <NotListedLocationIcon/>},
    {id: 'amount', label: t('amount') , content: <EuroSymbolIcon/>},
    {id: 'settings', label: t('settings') , content: <Box my={2.5}><SettingsIcon/></Box>},
  ];

  return <>
    <ResponsiveHeader
      title={'Pasión por la información geográfica'}
      logo={<LogoHorizontalNegativo width="100%"/>}
      onStartIconClick={widescreen ? undefined : handleClose}
      isStartIconCloseable={isSidePanelOpen}
      sx={responsiveHeaderSx}
    >
    </ResponsiveHeader>
    <MiniSidePanel
      actions={MINISIDEPANEL_CONFIG}
      selectedActionId={menuId || 'mapview'}
      onActionClick={handleMenuIdChange}
      dense={!widescreen}
      sx={styles.miniSidePanel}
    />
    {sidePanelContent && isSidePanelOpen &&
      <SidePanel
        drawerWidth={DRAWER_WIDTH + 'px'}
        anchor="left"
        isOpen={isSidePanelOpen}
        onClose={handleClose}
        widescreen={widescreen}
        sx={styles.sidePanel}
      >
        {sidePanelContent}
      </SidePanel>
    }
    <Main>
      {mainContent}
    </Main>
    {
      isAlertTypeOpen && <AlertOccurrences
        title={'Nuevos tipos'}
        onClose={onAlertTypeOpen}
        items={newTypes.unCategorizedOccurrences}/>
    }
  </>;
};

export default Layout;
