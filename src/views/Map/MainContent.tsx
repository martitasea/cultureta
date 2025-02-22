import React, {FC, useMemo, useState} from 'react';

import Map from '@geomatico/geocomponents/Map/Map';

import {INITIAL_VIEWPORT} from '../../config';
import {CulturalEvent} from '../../domain/entities/CulturalEvent';
import {toFeatureCollection} from '../../repository/CulturalEventMapper';
import { SourceSpecification } from 'maplibre-gl';
import {getLayers} from '../../domain/useCases/getLayers';

import { MapLayerMouseEvent } from 'maplibre-gl';
/*import styled from '@mui/system/styled';*/
import {FeatureProperties} from '../../domain/entities/common';
/*import {PopUpInfo} from '../../domain/entities/common';*/
import Typography from '@mui/material/Typography';
import Tooltip from '../../components/Tooltip';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {Dayjs} from 'dayjs';
/*import {formatDate} from '../../utils/formatDate';*/

/*const PopupInfo = styled(Popup)({
  cursor: 'default',
  '& .mapboxgl-popup-content': {
    padding: 0
  }
});*/

export type MainContentProps = {
  culturalEvents: Array<CulturalEvent>
  mapStyle: string,
  selectedStartDate: Dayjs,
  selectedEndDate: Dayjs,
  selectedTypes: Array<string>
};

const MainContent: FC<MainContentProps> = ({
  culturalEvents,
  mapStyle,
  /*selectedStartDate,
  selectedEndDate,*/
  selectedTypes
}) => {

  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);

  const [tooltipValue, setTooltipValue] = useState<FeatureProperties | undefined>(undefined);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number, left: number } | undefined>(undefined);

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

  /*const timestampStartDate = selectedStartDate.unix();
  const timestampEndDate = selectedEndDate.unix();*/

  const layers = useMemo(
    //() => getLayers(selectedTypes, timestampStartDate, timestampEndDate),
    () => getLayers(selectedTypes),
    [selectedTypes]);

  const handleClick = (event: MapLayerMouseEvent) => {
    const culturalEventFeature = event.features?.[0];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const properties: FeatureProperties | undefined = culturalEventFeature?.properties;
    if(culturalEventFeature) {
      setTooltipPosition({left: event.originalEvent.pageX, top: event.originalEvent.pageY});
      setTooltipValue(properties);
    } else {
      setTooltipPosition(undefined);
      setTooltipValue(undefined);
    }
  };
  console.log(tooltipValue);
  return <Map
    sources={sources}
    layers={layers}
    mapStyle={mapStyle}
    viewport={viewport}
    onViewportChange={setViewport}
    interactiveLayerIds={['culturalEvents-points']}
    onClick={handleClick}
  >
    {tooltipValue && tooltipPosition &&
      <Tooltip {...tooltipPosition}>
        <Box p={1}>
          <Typography variant="overline" sx={{fontSize: 12, fontWeight: 900}}>{tooltipValue.eventLocation}</Typography>
          <Typography sx={{fontSize: 12}} gutterBottom>{tooltipValue.title}</Typography>
          <Typography sx={{fontSize: 12}}>{tooltipValue.description}</Typography>
          {/*<Typography sx={{fontSize: 12}}>CUANDO {tooltipValue.startDate === tooltipValue.endDate ? tooltipValue.startDate : `${tooltipValue.startDate} - ${tooltipValue.endDate}`}</Typography>*/}
          {!tooltipValue.free && <Typography sx={{fontSize: 12}}>PRECIO {tooltipValue.price}</Typography>}
          <Link href={tooltipValue.link} target="_blank" rel="noreferrer">Más info...</Link>
        </Box>
      </Tooltip>
    }
    {/* {popupInfo && popupInfo.lat && popupInfo.lng &&
      <Popup
        latitude={popupInfo?.lat}
        longitude={popupInfo?.lng}
        closeButton={true}
        closeOnClick={false}
        onClose={() => setPopupInfo(undefined)}
        anchor="top"
      >
        <Card>
          <CardContent>
            <Typography>{popupInfo.properties.title}</Typography>
          </CardContent>
        </Card>
      </Popup>
    }*/}
  </Map>
  ;
};

export default MainContent;
