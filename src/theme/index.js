import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
// hooks
import useSettings from '../hooks/useSettings';
//
import shape from './shape';
import palette from './palette';
import breakpoints from './breakpoints';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node
};

export default function ThemeConfig({ children }) {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions = useMemo(

    () => ({
      palette: isLight ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
      shape,
     
      breakpoints,
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark
    }),

    [isLight, themeDirection]

  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (

    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>

  );
}
