import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

function loadJquery() {
  const styleSheetLoaded = new Promise((resolve) => {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href =
      'https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css';
    stylesheet.onload = resolve;

    document.head.appendChild(stylesheet);
  });

  const jqueryLoaded = new Promise((resolve) => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-3.6.4.js';
    jquery.crossorigin = 'anonymous';
    jquery.onload = resolve;

    document.head.appendChild(jquery);
  });

  const jqueryUILoaded = new Promise((resolve) => {
    const jqueryUI = document.createElement('script');

    document.head.appendChild(jqueryUI);
    jqueryUI.src = 'https://code.jquery.com/ui/1.13.2/jquery-ui.js';
    jqueryUI.crossorigin = 'anonymous';
    jqueryUI.onload = resolve;
  });

  return Promise.all([styleSheetLoaded, jqueryLoaded, jqueryUILoaded]);
}

loadJquery().then(() => {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
