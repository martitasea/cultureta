import React, {FC, useMemo, useState} from 'react';

import Map from '@geomatico/geocomponents/Map/Map';

import {INITIAL_VIEWPORT} from '../../config';
import {CulturalEvent} from '../../domain/entities/CulturalEvent';
import {toFeatureCollection} from '../../repository/CulturalEventMapper';
import { LayerSpecification, SourceSpecification } from 'maplibre-gl';

export type MainContentProps = {
  mapStyle: string,
  culturalEvents: Array<CulturalEvent>
};

const MainContent: FC<MainContentProps> = ({culturalEvents, mapStyle}) => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);

  const sources: {
		[_: string]: SourceSpecification;
	} = useMemo(() => (
	  {
	    culturalEvents: {
	      type: 'geojson',
	      data: toFeatureCollection(culturalEvents)
	    }
	  }
	), [culturalEvents]);

  const layers: Array<LayerSpecification> = [
    {
      'id': 'culturalEvents-points',
      'source': 'culturalEvents',
      'type': 'circle',
      'paint': {
        'circle-color': ['get', 'color'],
        'circle-stroke-width': [
          'case',
          ['==', ['get', 'free'], true],
          1,
          0
        ],
        'circle-stroke-color': '#000000',
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 14, 5, 20, 2],
      }
    },
    {
      'id': 'culturalEvents-organizer',
      'source': 'culturalEvents',
      'type': 'symbol',
      'minzoom': 12,
      'layout': {
        'text-field':  ['get', 'title'],
        'text-anchor': 'left',
        'text-justify': 'left',
        'text-radial-offset': 1,
        'text-size': 20
      }
    }
  ];

  return <Map
    sources={sources}
    layers={layers}
    mapStyle={mapStyle}
    viewport={viewport}
    onViewportChange={setViewport}
  />;
};

export default MainContent;
