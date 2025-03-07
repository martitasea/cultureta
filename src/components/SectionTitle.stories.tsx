import type {Meta, StoryObj} from '@storybook/react';

import SectionTitle from './SectionTitle';

const meta: Meta<typeof SectionTitle> = {
  title: 'Common/SectionTitle',
  component: SectionTitle
};
export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    titleKey: 'baseMapStyle',
  }
};
