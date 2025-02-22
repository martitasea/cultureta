import React, {FC} from 'react';
import Box from '@mui/material/Box';
import {SxProps} from '@mui/material';

type TooltipProps = {
  top: number
  left: number
  children: React.ReactNode
};

const Tooltip: FC<TooltipProps> = ({top, left, children}) => {
  const tooltipStyle: SxProps = {
    background: '#ffffff',
    borderRadius: 2,
    width: '450px',
    height: 'auto',
    m: 2,
    position: 'fixed',
    top: top - 40,
    left: left,
  };

  return <Box sx={tooltipStyle}>{children}</Box>;
};

export default Tooltip;