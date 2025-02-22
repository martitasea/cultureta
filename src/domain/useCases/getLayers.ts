import { LayerSpecification } from 'maplibre-gl';

export const getLayers = (
  selectedTypes: Array<string>,
/*  timestampStartDate: number,
  timestampEndDate: number,*/
): Array<LayerSpecification> => [
  {
    id: 'culturalEvents-points',
    source: 'culturalEvents',
    type: 'circle',
    filter: [
      'all',
      ['match', ['get', 'type'], selectedTypes, true, false],
      /*[
        'any',
        [
          'all',
          ['>=', ['get', 'startDate'], timestampStartDate],
          ['<=', ['get', 'startDate'], timestampEndDate]
        ],
        [
          'all',
          ['>=', ['get', 'endDate'], timestampStartDate],
          ['<=', ['get', 'endDate'], timestampEndDate]
        ],
      ]*/
    ],
    paint: {
      'circle-color': ['get', 'color'],
      'circle-stroke-color': '#ffffff',
      'circle-stroke-width': 1,
      'circle-radius': ['interpolate', ['linear'], ['zoom'], 14, 10, 20, 8],
      'circle-opacity': 0.75
    }
  },
  {
    id: 'culturalEvents-free-points',
    source: 'culturalEvents',
    type: 'circle',
    //filter: ['in', ['get', 'type'], ['literal', selectedTypes]],
    filter: [
      'all',
      ['in', ['get', 'type'], ['literal', selectedTypes]],
      ['!=', ['get', 'free'], true]
    ],
    paint: {
      'circle-color': '#ffffff',
      'circle-radius': ['interpolate', ['linear'], ['zoom'], 14, 2, 20, 1],
      'circle-opacity': 0.75
    }
  },
  /*{
    id: 'culturalEvents-organizer',
    source: 'culturalEvents',
    type: 'symbol',
    filter: ['in', ['get', 'type'], ['literal', selectedTypes]],
    minzoom: 12,
    layout: {
      'text-field':  ['get', 'title'],
      'text-anchor': 'left',
      'text-justify': 'left',
      'text-radial-offset': 1,
      'text-size': 14
    }
  }*/
];
