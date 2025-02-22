import React, {FC, ReactElement} from 'react';

import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';

import GeomaticoLink from '../../components/GeomaticoLink';
import styled from '@mui/system/styled';

import {CulturalEvent} from '../../domain/entities/CulturalEvent';
import SidePanelType from '../../components/SidePanels/SidePanelType';
import SidePanelLocation from '../../components/SidePanels/SidePanelLocation';
import SidePanelSettings from '../../components/SidePanels/SidePanelSettings';
import {ChangedTypes} from '../../domain/entities/common';
import SidePanelDate from '../../components/SidePanels/SidePanelDate';
import {Dayjs} from 'dayjs';

const ScrollableContent = styled(Box)({
  overflow: 'auto',
  padding: '8px',
});

const stackSx = {
  height: '100%',
  overflow: 'hidden'
};

export type SidePanelContentProps = {
  changedTypes: ChangedTypes,
  events: Array<CulturalEvent>,
  mapStyle: string,
  menuId: string,
  selectedEndDate: Dayjs,
  selectedStartDate: Dayjs,
  selectedTypes: Array<string>,
  onMapStyleChanged: (style: string) => void,
  onEndDateChanged: (endDate: Dayjs) => void
  onSelectedTypesChanged: (types: Array<string>) => void,
  onStartDateChanged: (startDate: Dayjs) => void
};

const SidePanelContent: FC<SidePanelContentProps> = ({
  changedTypes,
  events,
  mapStyle,
  menuId,
  selectedEndDate,
  selectedStartDate,
  selectedTypes,
  onMapStyleChanged,
  onEndDateChanged,
  onSelectedTypesChanged,
  onStartDateChanged
}) => {

  if(!events) return;

  const menuContent: Record<string, ReactElement> = {
    type: <SidePanelType
      changedTypes={changedTypes}
      selectedTypes={selectedTypes}
      onSelectedTypesChanged={(types) => onSelectedTypesChanged(types)}
    />,
    date: <SidePanelDate
      changedTypes={changedTypes}
      selectedStartDate={selectedStartDate}
      selectedEndDate={selectedEndDate}
      onStartDateChanged={onStartDateChanged}
      onEndDateChanged={onEndDateChanged}
    />,
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
