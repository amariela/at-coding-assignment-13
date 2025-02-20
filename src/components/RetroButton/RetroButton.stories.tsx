import type { Meta, StoryObj } from '@storybook/react';
import RetroButton from './RetroButton';

const meta: Meta<typeof RetroButton> = {
    component: RetroButton,
    title: 'AT-Retro-Library/Retro-Button',
}

export default meta;

type Story = StoryObj<typeof RetroButton>;

export const Primary: Story = {
    args: {
        label: "Click Me",
        buttonId: 'retroButton',
        disabled: false,
        backgroundColor: "lightblue"
    }
}

