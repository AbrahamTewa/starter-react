// ============================================================
// Import packages
import React from 'react';
import { createRoot } from 'react-dom/client';

import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

// ============================================================
// Import modules
import * as errorTracker from './errorTracker';
import {
  App,
} from './scenes';

// ============================================================
// Functions
/**
 * Initialize the application
 */
function initialize() {
  errorTracker.initialize();

  const domNode = document.getElementById('root');

  if (!domNode) {
    throw Error('No "root"');
  }
  const root = createRoot(domNode);

  const router = createBrowserRouter([
    {
      element: <App />,
      path: '/',
    },
  ]);

  root.render(
    <React.StrictMode>
      <div>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>,
  );
}

document.addEventListener('DOMContentLoaded', initialize);
