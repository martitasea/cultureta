import React, {FC} from 'react';

import Stack from '@mui/material/Stack';

import BaseMapList from '@geomatico/geocomponents/Map/BaseMapList';

import Box from '@mui/material/Box';

import {MAPSTYLES} from '../../config';
import SectionTitle from '../../components/SectionTitle';
import GeomaticoLink from '../../components/GeomaticoLink';
import styled from '@mui/system/styled';

const ScrollableContent = styled(Box)({
  overflow: 'auto',
  padding: '8px',
});

const stackSx = {
  height: '100%',
  overflow: 'hidden'
};

export type SidePanelContentProps = {
  mapStyle: string,
  onMapStyleChanged: (style: string) => void
};

const SidePanelContent: FC<SidePanelContentProps> = ({mapStyle, onMapStyleChanged}) =>
  <Stack sx={stackSx}>
    <ScrollableContent>
      <SectionTitle titleKey="baseMapStyle"/>
      <BaseMapList
        styles={MAPSTYLES}
        selectedStyleId={mapStyle}
        onStyleChange={onMapStyleChanged}
      />
    </ScrollableContent>
    <GeomaticoLink/>
  </Stack>;

export default SidePanelContent;
