import React, {FC, ReactElement} from 'react';

import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';

import GeomaticoLink from '../../components/GeomaticoLink';
import styled from '@mui/system/styled';

import {CulturalEvent} from '../../domain/entities/CulturalEvent';
import SidePanelType from '../../components/SidePanels/SidePanelType';
import SidePanelLocation from '../../components/SidePanels/SidePanelLocation';
import SidePanelSettings from '../../components/SidePanels/SidePanelSettings';

const ScrollableContent = styled(Box)({
  overflow: 'auto',
  padding: '8px',
});

const stackSx = {
  height: '100%',
  overflow: 'hidden'
};

export type SidePanelContentProps = {
  events: Array<CulturalEvent>,
  menuId: string,
  mapStyle: string,
  onMapStyleChanged: (style: string) => void
};

const SidePanelContent: FC<SidePanelContentProps> = ({events, menuId, mapStyle, onMapStyleChanged}) => {

  if(!events) return;

  const menuContent: Record<string, ReactElement> = {
    type: <SidePanelType events={events} typeSelected={[]} onTypeChange={() => {}}/>,
    date: <>FECHA</>,
    audience: <>AUDIENCIA</>,
    location: <SidePanelLocation events={events}/>,
    amount: <>PRECIO</>,
    settings: <SidePanelSettings mapStyle={mapStyle} onMapStyleChanged={onMapStyleChanged}/>,
  };

  return <Stack sx={stackSx}>
    <ScrollableContent>
      {menuContent[menuId]}
    </ScrollableContent>
    <GeomaticoLink/>
  </Stack>;
};

export default SidePanelContent;
