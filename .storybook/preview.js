import React from 'react';

import {blue} from '@mui/material/colors';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {ThemeProvider as Emotion10ThemeProvider} from 'emotion-theming';
import CssBaseline from '@mui/material/CssBaseline';

import '../src/i18n';

import { themes } from '@storybook/theming';

const systemMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  backgrounds: {disable: true},
  layout: 'fullscreen',
  docs: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    theme: systemMode === 'light' ? themes.light : themes.dark
  },
};

export const globalTypes = {
  mode: {
    description: 'Global mode',
    defaultValue: 'light',
    toolbar: {
      items: [
        {value: 'light', title: '☼ Light mode'},
        {value: 'dark', title: '☾ Dark mode'}
      ],
      dynamicTitle: true,
    }
  }
};

export const initialGlobals = {
  mode: systemMode
};

const withThemeProvider = (Story, context) => {
  const theme = createTheme({
    palette: {
      mode: context.globals.mode,
      primary: {
        main: '#D9419E'
      },
      secondary: {
        main: blue[500]
      }
    }
  });

  return (<Emotion10ThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div style={{ backgroundColor: theme.palette.background.paper}}>
        <Story {...context} />
      </div>
    </ThemeProvider>
  </Emotion10ThemeProvider>);
};

export const decorators = [
  withThemeProvider,
];

export const tags = ['autodocs', 'autodocs'];
