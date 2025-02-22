import React, {FC} from 'react';

import SectionTitle from '../../components/SectionTitle';

import Box from '@mui/material/Box';
import {ChangedTypes} from '../../domain/entities/common';
import {useTranslation} from 'react-i18next';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es';

dayjs.locale('ES');

export type SidePanelDateProps = {
  changedTypes: ChangedTypes,
  selectedStartDate: Dayjs,
  selectedEndDate: Dayjs,
  onStartDateChanged: (startDate: Dayjs) => void
  onEndDateChanged: (endDate: Dayjs) => void
};


const SidePanelDate: FC<SidePanelDateProps> = ({selectedStartDate, selectedEndDate, onStartDateChanged, onEndDateChanged}) => {

  const {t} = useTranslation();

  return <>
    <SectionTitle titleKey={'date'}/>
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, gap: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disablePast={true}
          maxDate={dayjs().add(99, 'day')}
          format="DD [de] MMMM"
          formatDensity={'dense'}
          label={t('from')}
          value={selectedStartDate}
          views={['day', 'month']}
          onChange={(newValue) => newValue && onStartDateChanged(newValue)}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disablePast={true}
          minDate={selectedStartDate}
          maxDate={dayjs().add(99, 'day')}
          format="DD [de] MMMM"
          formatDensity={'dense'}
          label={t('to')}
          value={selectedEndDate}
          views={['day', 'month']}
          onChange={(newValue) => newValue && onEndDateChanged(newValue)}
        />
      </LocalizationProvider>
    </Box>
  </>;
};

export default SidePanelDate;
