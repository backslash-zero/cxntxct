import type { Meta, StoryObj } from '@storybook/svelte';

import NavBar from '../lib/components/nav/NavBar.svelte';

const meta = {
  title: 'App/NavBar',
  component: NavBar,
  argTypes: {
  },
} satisfies Meta<NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}