import React, {FC} from 'react';

import Stack from '@mui/material/Stack';

import BaseMapList from '@geomatico/geocomponents/Map/BaseMapList';

import Box from '@mui/material/Box';

import {COLOR_BY_TYPE, MAPSTYLES} from '../../config';
import SectionTitle from '../../components/SectionTitle';
import GeomaticoLink from '../../components/GeomaticoLink';
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import {CulturalEvent} from '../../domain/entities/CulturalEvent';
import {getUniqueValues} from '../../utils/getUniqueValues';
import CircleIcon from '@mui/icons-material/Circle';

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
  mapStyle: string,
  onMapStyleChanged: (style: string) => void
};

const SidePanelContent: FC<SidePanelContentProps> = ({events, mapStyle, onMapStyleChanged}) => {

  const allTypes = getUniqueValues(events.map(e => e.event.type));
  const allDistricts = getUniqueValues(events.map(e => e.location.address.district));
  const allNeighborhood = getUniqueValues(events.map(e => e.location.address.neighborhood));
  const allAudience = getUniqueValues(events.flatMap(e => e.audience));
  console.log('allAudience', allAudience);
  return <Stack sx={stackSx}>
    <ScrollableContent>

      <BaseMapList
        styles={MAPSTYLES}
        selectedStyleId={mapStyle}
        onStyleChange={onMapStyleChanged}
      />
      {events.length && <SectionTitle titleKey={'TIPO'}/>}
      {
        allTypes
          .map((type, index) => <Box key={index} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1}}>
            <CircleIcon sx={{fontSize: 10, color: COLOR_BY_TYPE.filter(t => type === t.id)[0]?.color || '#6b6b6b'}}/>
            <Typography sx={{fontSize: 12}}>{type}</Typography>
          </Box>
          )
      }
      {events.length && <SectionTitle titleKey={'DISTRITO'}/>}
      {
        allDistricts
          .map((district, index) =>
            <Typography sx={{fontSize: 12}} key={index}>{district}</Typography>)
      }
      {events.length && <SectionTitle titleKey={'BARRIO'}/>}
      {
        allNeighborhood
          .map((district, index) =>
            <Typography sx={{fontSize: 12}} key={index}>{district}</Typography>)
      }
    </ScrollableContent>
    <GeomaticoLink/>
  </Stack>;
};

  

export default SidePanelContent;
