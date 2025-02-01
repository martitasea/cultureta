import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import SidePanelContent from './SidePanelContent';
import MainContent from './MainContent';

import {INITIAL_MAPSTYLE_URL} from '../../config';

import {CulturalEventDto} from '../../repository/CulturalEventDto';
import {fromDto} from '../../repository/CulturalEventMapper';
import {CulturalEvent} from '../../domain/entities/CulturalEvent';

const Index = () => {
  const [mapStyle, setMapStyle] = useState(INITIAL_MAPSTYLE_URL);
  const [events, setEvents] = useState<Array<CulturalEvent>>([]);
  const [menuId, setMenuId] = useState<string>('type');

  useEffect(() => {
  // Función para realizar la solicitud usando .then()
    const fetchEvents = () => {
      fetch('https://datos.madrid.es/egob/catalogo/206974-0-agenda-eventos-culturales-100.json')
        .then(response => {
          if (!response.ok) {
            return Promise.reject(`Error: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          const allData = data['@graph'].map((d: CulturalEventDto) => fromDto(d));
          setEvents(allData);
        })
        .catch(error => {
          console.error('Error al hacer la solicitud:', error);
        });
    };
    fetchEvents(); // Llamada a la función
  }, []);

  const sidePanelContent = <SidePanelContent
    events={events}
    menuId={menuId}
    mapStyle={mapStyle}
    onMapStyleChanged={setMapStyle}
  />;

  const mainContent = <MainContent
    culturalEvents={events}
    mapStyle={mapStyle}
  />;

  return <Layout
    culturalEvents={events}
    sidePanelContent={sidePanelContent}
    mainContent={mainContent}
    onMenuIdChange={setMenuId}
  />;
};

export default Index;
