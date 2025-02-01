import React, {FC} from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Chip from '@mui/material/Chip';
import {useTranslation} from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {grey} from '@mui/material/colors';

export type AlertProps = {
  title: string
  items: Array<string>
  onClose: () => void
};

const AlertOccurrences: FC<AlertProps> = ({title, items, onClose}) => {

  const {t} = useTranslation();

  const titleStyle = {
    color: 'secondary.main',
    textTransform: 'uppercase',
    '& h2': {
      fontWeight: 900
    }
  };

  return <Dialog open={true}>
    <DialogTitle sx={titleStyle}>{title}</DialogTitle>
    <DialogContent>
      <Box sx={{display: 'flex', flexDirection: 'column'}} mb={1}>
        <Typography sx={{fontSize: 14}} gutterBottom>{t('newOccurrences')}</Typography>
        {
          items.map((item, index) => <Chip key={index} label={item} sx={{color: grey[700], fontSize: 14, my: 0.5, width: 'auto', textTransform: 'uppercase'}}/>)
        }
        <Typography sx={{fontSize: 14, mt: 1}} gutterBottom>{t('includeOccurrences')}</Typography>
      </Box>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="secondary">{t('exit')}</Button>
    </DialogActions>
  </Dialog>;
};

export default AlertOccurrences;

