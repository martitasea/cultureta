import React, {FC} from 'react';

import SectionTitle from '../../components/SectionTitle';

import CircleIcon from '@mui/icons-material/Circle';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import {CulturalEvent} from '../../domain/entities/CulturalEvent';

import {getUniqueValues} from '../../utils/getUniqueValues';

import {COLOR_BY_TYPE} from '../../config';

export type SidePanelLocationProps = {
  events: Array<CulturalEvent>
};

const SidePanelLocation: FC<SidePanelLocationProps> = ({events}) => {

  const allDistricts = getUniqueValues(events.map(e => e.location.address.district));
  const allNeighborhood = getUniqueValues(events.map(e => e.location.address.neighborhood));

  if(!events) return;

  return <>
    <SectionTitle titleKey={'DISTRITO'}/>
    {
      allDistricts
        .map((type, index) => <Box key={index} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1}}>
          <CircleIcon sx={{fontSize: 10, color: COLOR_BY_TYPE.filter(t => type === t.id)[0]?.color || '#6b6b6b'}}/>
          <Typography sx={{fontSize: 12}}>{type}</Typography>
        </Box>
        )
    }
    <Divider/>
    <SectionTitle titleKey={'DISTRITO'}/>
    {
      allNeighborhood
        .map((district, index) =>
          <Typography sx={{fontSize: 12}} key={index}>{district}</Typography>)
    }
  </>;
};

export default SidePanelLocation;
