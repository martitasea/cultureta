import React, {FC} from 'react';

import BaseMapList from '@geomatico/geocomponents/Map/BaseMapList';
import {MAPSTYLES} from '../../config';

export type SidePanelSettingsProps = {
  mapStyle: string,
  onMapStyleChanged: (style: string) => void
};

const SidePanelSettings: FC<SidePanelSettingsProps> = ({mapStyle, onMapStyleChanged}) => {

  return <>
    <BaseMapList
      styles={MAPSTYLES}
      selectedStyleId={mapStyle}
      onStyleChange={onMapStyleChanged}
    />
  </>;
};

export default SidePanelSettings;