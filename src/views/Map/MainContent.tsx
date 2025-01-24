import React, {FC, useState} from 'react';

import Map from '@geomatico/geocomponents/Map/Map';

import {INITIAL_VIEWPORT} from '../../config';

export type MainContentProps = {
  mapStyle: string
};

const MainContent: FC<MainContentProps> = ({mapStyle}) => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);

  return <Map
    mapStyle={mapStyle}
    viewport={viewport}
    onViewportChange={setViewport}
  />;
};

export default MainContent;
