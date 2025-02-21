import type { Meta, StoryObj } from '@storybook/react';
import RetroText from './RetroText';

const meta: Meta<typeof RetroText> = {
    component: RetroText,
    title: 'AT-Retro-Library/Retro-Text',
}

export default meta;

type Story = StoryObj<typeof RetroText>;

export const Primary: Story = {
    args: {
        label: "Hello!",
        textId: 'retroText',
        disabled: false,
        backgroundColor: "lightblue"
    }
}

