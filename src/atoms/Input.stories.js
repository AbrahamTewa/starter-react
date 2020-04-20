/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node */

// ============================================================
// Import package
import React from 'react';
import { storiesOf } from '@storybook/react';

// ============================================================
// Import module
import Input from './Input';

// ============================================================
// Story
storiesOf('Input', module)
    .add('with text', () => (
        <Input
            title="Enter title"
        />
    ));
