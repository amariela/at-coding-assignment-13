import type { Meta, StoryObj } from '@storybook/react';
import RetroLabel from './RetroLabel';

const meta: Meta<typeof RetroLabel> = {
    component: RetroLabel,
    title: 'AT-Retro-Library/Retro-Label',
}

export default meta;

type Story = StoryObj<typeof RetroLabel>;

export const Primary: Story = {
    args: {
        label: "First Name",
        labelFor: 'retroLabel',
        disabled: false,
        backgroundColor: "lightblue"
    }
}

