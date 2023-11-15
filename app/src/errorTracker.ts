// ============================================================
// Import packages
import * as Sentry from '@sentry/react';
import {
  name as PACKAGE_NAME,
  version as PACKAGE_VERSION,
} from '../package.json';

const { SENTRY_DSN } = import.meta.env;

// ============================================================
// Functions
function initialize() {
  if (!SENTRY_DSN) {
    console.log('Error tracker disabled');
    return;
  }

  console.log('Error tracker enabled');

  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [
      new Sentry.BrowserTracing({
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: [
          'localhost',
          /^https:\/\/yourserver\.io\/api/,
        ],
      }),
      new Sentry.Replay(),
    ],

    release: `${PACKAGE_NAME}@${PACKAGE_VERSION}`,

    // change the sample rate to 100% when sampling sessions where errors occur.
    replaysOnErrorSampleRate: 1.0,

    // Session Replay
    // This sets the sample rate at 10%.
    // You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysSessionSampleRate: 0.1,

    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions
  });
}

// ============================================================
// Exports
export {
  initialize,
};
