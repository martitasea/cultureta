import React from 'react';
import MapIcon from '@mui/icons-material/Map';
import TableChartIcon from '@mui/icons-material/TableChart';

export const DRAWER_WIDTH = 320;
export const SM_BREAKPOINT = 600;
export const MINI_SIDE_PANEL_WIDTH = 61;
export const MINI_SIDE_PANEL_DENSE_WIDTH = 45;

export const MINISIDEPANEL_CONFIG = [
  {id: 'mapView', route: '../map', label: 'map', content: <MapIcon/>},
  {id: 'detail', route: '../detail', label: 'detail', content: <TableChartIcon/>}
];

export const INITIAL_VIEWPORT = {
  latitude: 40.417025,
  longitude: -3.702908,
  zoom: 11,
  bearing: 0,
  pitch: 0
};

export const OFFICIAL_ICGC_MAPSTYLES = [
  {
    'label': 'Ortofoto',
    'thumbnail': 'https://visors.icgc.cat/contextmaps/imatges_estil/icgc_orto_hibrida.png',
    'id': 'https://geoserveis.icgc.cat/contextmaps/icgc_orto_hibrida.json',
    'firstTopLayer': 'place-other'
  },
  {
    'label': 'Estándar',
    'thumbnail': 'https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_estandard.png',
    'id': 'https://geoserveis.icgc.cat/contextmaps/icgc_mapa_estandard.json',
    'firstTopLayer': 'place-other'
  },
  {
    'label': 'Gris',
    'thumbnail': 'https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_base_gris_simplificat.png',
    'id': 'https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_gris_simplificat.json',
    'firstTopLayer': 'place_other'
  },
  {
    'label': 'Fosc',
    'thumbnail': 'https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_base_fosc.png',
    'id': 'https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json',
    'firstTopLayer': 'place-other'
  }
];

export const MAPSTYLES = [
  {
    'label': 'Basic',
    'thumbnail': 'https://tileserver.geomatico.es/styles/klokantech-basic/12/2145/1434.png',
    'id': 'https://tileserver.geomatico.es/styles/klokantech-basic/style.json'
  },
  {
    'label': 'OSM Bright',
    'thumbnail': 'https://tileserver.geomatico.es/styles/osm-bright/12/2145/1434.png',
    'id': 'https://tileserver.geomatico.es/styles/osm-bright/style.json'
  },
  {
    'label': 'Positron',
    'thumbnail': 'https://tileserver.geomatico.es/styles/positron/12/2072/1529.png',
    'id': 'https://tileserver.geomatico.es/styles/positron/style.json'
  },
  {
    'label': 'Dark Matter',
    'thumbnail': 'https://tileserver.geomatico.es/styles/dark-matter/12/2072/1529.png',
    'id': 'https://tileserver.geomatico.es/styles/dark-matter/style.json'
  }
];

export const INITIAL_MAPSTYLE_URL = MAPSTYLES[2].id;

export const COLOR_BY_TYPE = [
  {
    id: 'Teatro Performance',
    color: '#2a5fcf'
  },
  {
    id: 'Exposiciones',
    color: '#ded306'
  },
  {
    id: 'Programación Destacada Agenda Cultural',
    color: '#06de9d'
  },
  {
    id: 'Jazz Soul Funky Swing Reagge',
    color: '#380e51'
  },
  {
    id: 'Música',
    color: '#dd4b0c'
  }
];
