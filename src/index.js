import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// redux
import { store, persistor } from './redux/store';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
import { NavProvider } from './contexts/NavContext';
// components
import App from './App';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
  <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <SettingsProvider>

            <CollapseDrawerProvider>

              <BrowserRouter>
                <NavProvider>
                  <App />
                </NavProvider>
              </BrowserRouter>

            </CollapseDrawerProvider>

          </SettingsProvider>,
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
);


