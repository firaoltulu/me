// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// hooks

// components
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import Settings from './components/settings';
import NotistackProvider from './components/NotistackProvider';
import { Typography } from '@mui/material';


// ----------------------------------------------------------------------

export default function App() {

  return (
    <ThemeConfig>

      <RtlLayout>
        <NotistackProvider>
          <Settings />
          <ScrollToTop />

          <Router />

        </NotistackProvider>
      </RtlLayout>

    </ThemeConfig>
  );
}