import React, {FC} from 'react';

import SectionTitle from '../../components/SectionTitle';
import {CulturalEvent} from '../../domain/entities/CulturalEvent';
import {getUniqueValues} from '../../utils/getUniqueValues';
import SwitchPad from '@geomatico/geocomponents/Forms/SwitchPad';
import {getRandomColor} from '../../utils/getRandomColor';

export type SidePanelTypeProps = {
  events: Array<CulturalEvent>,
  typeSelected: Array<string>,
  onTypeChange: (type: Array<string>) => void
};

const styles = {
  switchPad: {
    '& .SwitchPad-text': {
      fontSize: 12,
    },
    '& .SwitchPad-item': {
      m: 0,
    }
  }
};

const SidePanelType: FC<SidePanelTypeProps> = ({events, typeSelected, onTypeChange}) => {

  if(!events) return;

  const allTypes = getUniqueValues(events.map(e => e.event.type));
  const types = allTypes
    .filter(type => type !== '')
    .map(type => ({
      id: type,
      label: type,
      color: getRandomColor()
    }
    ));

  return <>
    <SectionTitle titleKey={'TIPO'}/>
    <SwitchPad categories={types} selected={typeSelected} onSelectionChange={onTypeChange} sx={styles.switchPad}/>
  </>;
};

export default SidePanelType;
