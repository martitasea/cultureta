import React, {FC} from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {useTranslation} from 'react-i18next';

const typographySx = {
  fontWeight: 'bold'
};

export type SectionTitleProps = {
  titleKey: string
};

const SectionTitle: FC<SectionTitleProps> = ({titleKey}) => {
  const {t} = useTranslation();
  return (
    <Box mb={0.5}>
      <Typography variant="overline" sx={typographySx}>
        {t(titleKey)}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
