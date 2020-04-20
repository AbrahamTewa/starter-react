// ============================================================
// Import packages
import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

// ============================================================
// Import modules
import {
    App,
} from './scenes';

// ============================================================
// Functions
/**
 * Initialize the application
 */
function initialize() {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');

    document.querySelector('body').appendChild(root);

    ReactDOM.render(
        <Router>
            <div>
                <Route path="/" component={App} />
            </div>
        </Router>,
        root,
    );
}

document.addEventListener('DOMContentLoaded', initialize);
