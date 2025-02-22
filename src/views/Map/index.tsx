import React, {useEffect, useMemo, useState} from 'react';
import Layout from '../../components/Layout';
import SidePanelContent from './SidePanelContent';
import MainContent from './MainContent';

import {INITIAL_MAPSTYLE_URL, TYPE_CATEGORIZER} from '../../config';

import {CulturalEventDto} from '../../repository/CulturalEventDto';
import {fromDto} from '../../repository/CulturalEventMapper';
import {CulturalEvent} from '../../domain/entities/CulturalEvent';
import {getUniqueValues} from '../../utils/getUniqueValues';
import {evaluateOccurrences} from '../../utils/evaluateOccurrences';
import dayjs from 'dayjs';

const Index = () => {
  const [mapStyle, setMapStyle] = useState(INITIAL_MAPSTYLE_URL);
  const [culturalEvents, setCulturalEvents] = useState<Array<CulturalEvent>>([]);
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
          setCulturalEvents(allData);
        })
        .catch(error => {
          console.error('Error al hacer la solicitud:', error);
        });
    };
    fetchEvents(); // Llamada a la función
  }, []);

  //const allTypes = useMemo(() => getUniqueValues(culturalEvents.map(e => e.event.type)) || [], [culturalEvents]);
  const allTypes = useMemo(() => getUniqueValues(culturalEvents.map(e => e.type)) || [], [culturalEvents]);
  const newTypes = useMemo(() => evaluateOccurrences(allTypes, TYPE_CATEGORIZER) || [], [allTypes]);

  const [isAlertTypeOpen, setAlertTypeOpen] = useState(newTypes && !!newTypes.unCategorizedOccurrences.length);
  const [selectedTypes, setSelectedTypes] = useState(TYPE_CATEGORIZER.flatMap(c => c.types));
  const [selectedStartDate, setStartDate] = useState(dayjs());
  const [selectedEndDate, setEndDate] = useState(dayjs().add(99, 'day'));

  useEffect(() => {
    if (allTypes.length && newTypes.unCategorizedOccurrences.length) {
      setAlertTypeOpen(true);
    }
    if (allTypes.length && newTypes.unUsedOccurrences.length) {
      console.warn('OCURRENCIAS SIN USAR:', newTypes.unUsedOccurrences);
    }
  }, [newTypes]);

  const sidePanelContent = <SidePanelContent
    changedTypes={newTypes}
    events={culturalEvents}
    mapStyle={mapStyle}
    menuId={menuId}
    selectedEndDate={selectedEndDate}
    selectedStartDate={selectedStartDate}
    selectedTypes={selectedTypes}
    onMapStyleChanged={setMapStyle}
    onEndDateChanged={setEndDate}
    onSelectedTypesChanged={setSelectedTypes}
    onStartDateChanged={setStartDate}
  />;

  const mainContent = <MainContent
    culturalEvents={culturalEvents}
    mapStyle={mapStyle}
    selectedEndDate={selectedEndDate}
    selectedStartDate={selectedStartDate}
    selectedTypes={selectedTypes}
  />;

  return <Layout
    newTypes={newTypes}
    sidePanelContent={sidePanelContent}
    mainContent={mainContent}
    isAlertTypeOpen={isAlertTypeOpen}
    onAlertTypeOpen={() => setAlertTypeOpen(false)}
    onMenuIdChange={setMenuId}
  />;
};

export default Index;
