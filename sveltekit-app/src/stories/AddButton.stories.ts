import type { Meta, StoryObj } from '@storybook/svelte';

import AddButton from '../lib/components/buttons/AddButton.svelte';

const meta = {
  title: 'App/AddButton',
  component: AddButton,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
} satisfies Meta<AddButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };