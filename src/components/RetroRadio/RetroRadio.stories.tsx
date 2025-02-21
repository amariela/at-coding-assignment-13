import type { Meta, StoryObj } from '@storybook/react';
import RetroRadio from './RetroRadio';

const meta: Meta<typeof RetroRadio> = {
    component: RetroRadio,
    title: 'AT-Retro-Library/Retro-Radio',
}

export default meta;

type Story = StoryObj<typeof RetroRadio>;

export const Primary: Story = {
    args: {
        id: "radio1",
        name: "group1",
        value: "1",
        label: "Option 1",
        onChange: () => { },
        disabled: false,
        backgroundColor: "lightblue"
    }
}
