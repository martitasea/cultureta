import {TypeItem} from './domain/entities/common';

export const DRAWER_WIDTH = 320;
export const SM_BREAKPOINT = 600;
export const MINI_SIDE_PANEL_WIDTH = 61;
export const MINI_SIDE_PANEL_DENSE_WIDTH = 45;

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

export const TYPE_CATEGORIZER: Array<TypeItem> = [
  {
    id: 'music',
    label: 'Música',
    color: '#6e1c81',
    types: [
      'Musica',
      'Danza Baile',
      'Jazz Soul Funky Swing Reagge',
      'Coro Gospel',
      'Cantautor Folk Country',
      'Musical Cabaret',
      'Flamenco',
      'Rock Pop',
    ]
  },
  {
    id: 'literature',
    label: 'Literatura',
    color: '#811c34',
    types: [
      'Recitales Presentaciones Actos Literarios',
      'Cuentacuentos Titeres Marionetas',
      'Clubes Lectura',
    ]
  },
  {
    id: 'dramaticArt',
    label: 'Arte dramático',
    color: '#816e1c',
    types: [
      'Teatro Performance',
      'Cine Actividades Audiovisuales',
      'Comedia Monologo',
      'Circo Magia',
    ],
  },
  {
    id: 'itineraries',
    label: 'Excursiones e Itinerarios',
    color: '#11433c',
    types: [
      'Excursiones Itinerarios Visitas',
      'Campamentos',
      'Itinerarios Otras Actividades Ambientales',
      'Actividades Calle Arte Urbano'
    ]
  },
  {
    id: 'exibitions',
    label: 'Exposiciones y Programación Cultural',
    color: '#0b5577',
    types: [
      'Exposiciones',
      'Programacion Destacada Agenda Cultura',
      'Cursos Talleres',
      'Conferencias Coloquios',
      'Capacitacion Digital',
      'Concursos Certamenes'
    ]
  },
  {
    id: 'special',
    label: 'Eventos Especiales',
    color: '#ba330b',
    types: [
      'Fiestas Carnavales',
      'Folclore Etnica',
      '1ciudad21distritos',
    ]
  },
  {
    id: 'others',
    label: 'Otros',
    color: '#454545',
    types: [
      'Actividades Deportivas',
      'Actividades Escolares',
      'Idiomas',
      'En Linea'
    ]
  }
];