import type {Meta, StoryObj} from '@storybook/react';

import AlertOccurrences from './AlertOccurrences';

const meta: Meta<typeof AlertOccurrences> = {
  title: 'Common/AlertOccurrences',
  component: AlertOccurrences
};
export default meta;

type Story = StoryObj<typeof AlertOccurrences>;

export const Default: Story = {
  args: {
    title: 'Nuevos tipos',
    items: [
      'Exposiciones',
      'Programacion Destacada Agenda Cultura',
      'Actividades Calle Arte Urbano',
      'Recitales Presentaciones Actos Literarios',
      'Cursos Talleres'
    ]
  }
};
