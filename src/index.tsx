import {createRoot} from 'react-dom/client';
import React, {FC} from 'react';

import Routes from './routes/routes';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {StyledEngineProvider} from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import './i18n';

const App: FC = () =>
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme()}>
      <CssBaseline/>
      <Routes/>
    </ThemeProvider>
  </StyledEngineProvider>;

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App/>);
}

export default App;
