/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node */

// ============================================================
// Import package
import type { Meta, StoryObj } from '@storybook/react';

// ============================================================
// Import module
import Input from './Input';

// ============================================================
// Story
const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    // More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated
  // Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Example/Input',
};

type Story = StoryObj<typeof meta>;

const Simple: Story = {
};

export default meta;
export {
  Simple,
};
